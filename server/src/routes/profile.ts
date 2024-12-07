import express from 'express';
import jwt from 'jsonwebtoken';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();


function formatDate(dateString: string, format: 'YYYY-MM-DD' | 'YYYY-MM' = 'YYYY-MM-DD'): string {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  if (format === 'YYYY-MM') {
    return `${year}-${month}`;
  }

  return `${year}-${month}-${day}`;
}

interface Participant {
  inscription_id: number;
  cours_id: number;
  date_cours: string;
  type_cours: string;
  heure_debut: string;
  heure_fin: string;
  status: string;
  participant_first_name: string;
  participant_last_name: string;
}

interface Courses {
  month: string; // Mois sous forme de 'YYYY-MM'
  total_courses: number; // Nombre total de cours dans le mois
  presences: [];
}



router.get('/', async(req, res) => {

  const { email, nom, prenom } = req.query;
  console.log('Requête reçue:', req.query);  // Log pour vérifier les paramètres reçus
  
  try {
    const client = new SQLClient();
    
    // Requête pour récupérer l'ID de l'utilisateur
    const userIdQuery = `
      SELECT id
      FROM utilisateurs
      WHERE email = ? AND last_name = ? AND first_name = ?;
    `;
    
    // Exécuter la requête pour récupérer l'ID de l'utilisateur
    const [user] = await client.query(userIdQuery, [email, nom, prenom]);
    console.log("Utilisateur trouvé:", user);

    // Si l'utilisateur n'est pas trouvé, renvoyer une erreur
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const userId = user.id; // Obtenir l'ID de l'utilisateur

    // Requête pour récupérer les inscriptions aux cours, incluant les informations des participants
    const presencesQuery = `
      SELECT 
        i.id AS inscription_id, 
        i.cours_id, 
        c.date_cours, 
        c.type_cours, 
        c.heure_debut, 
        c.heure_fin, 
        i.status, 
        u.first_name AS participant_first_name, 
        u.last_name AS participant_last_name 
      FROM inscriptions i
      JOIN cours c ON i.cours_id = c.id
      JOIN utilisateurs u ON i.utilisateur_id = u.id
      WHERE i.utilisateur_id = ?;
    `;
    
    const presences = await client.query(presencesQuery, [userId]);
    console.log("Présences récupérées:", presences);

    // Si aucune présence n'est trouvée
    if (!presences.length) {
      console.log("Aucune inscription trouvée pour cet utilisateur.");
    }

    // Requête pour récupérer le nombre total de cours par mois
    const totalCoursesQuery = `
      SELECT DATE_FORMAT(date_cours, '%Y-%m') AS month, COUNT(*) AS total_courses
      FROM cours
      GROUP BY DATE_FORMAT(date_cours, '%Y-%m')
      ORDER BY month ASC;
    `;
    
    const totalCourses = await client.query(totalCoursesQuery);
    // Parcourir chaque cours dans totalCourses
    const totalCoursesWithPresences = totalCourses.map((course: Courses) => {
      const courseMonth = course.month; // Déjà formaté en 'YYYY-MM'
      const participantsForCourse: Participant[] = []; // Tableau pour stocker les participants pour ce mois

      // Parcourir les présences (participants)
      presences.forEach((participant: Participant) => {
        const participantMonth = formatDate(participant.date_cours, "YYYY-MM"); // Formater la date de présence en 'YYYY-MM'

        // Si le mois de la présence et du cours correspondent
        if (courseMonth === participantMonth) {
          // Ajouter le participant à la liste des présences pour ce cours
          participantsForCourse.push({
            inscription_id: participant.inscription_id,
            cours_id: participant.cours_id,
            date_cours: participant.date_cours,
            type_cours: participant.type_cours,
            heure_debut: participant.heure_debut,
            heure_fin: participant.heure_fin,
            status: participant.status,
            participant_first_name: participant.participant_first_name,
            participant_last_name: participant.participant_last_name
          });
        }
      });

  // Retourner le cours avec les participants ajoutés
    return {
      month: courseMonth,
      total_courses: course.total_courses,
      presences: participantsForCourse // Ajouter les participants (présences)
    };
  });



    

    // Renvoyer les données au front-end
    res.json({
      totalCourses: totalCoursesWithPresences
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});


router.post('/', async (req, res) => {
  const { email, last_name, first_name } = req.body;

  console.log("Données reçues via body:", { email, last_name, first_name });

  try {
    const client = new SQLClient();
    
    // Requête pour récupérer l'ID de l'utilisateur
    const userIdQuery = `
      SELECT id
      FROM utilisateurs
      WHERE email = ? AND last_name = ? AND first_name = ?;
    `;
    
    // Exécuter la requête pour récupérer l'ID de l'utilisateur
    const [user] = await client.query(userIdQuery, [email, last_name, first_name]);
    console.log("Utilisateur trouvé:", user);

    // Si l'utilisateur n'est pas trouvé, renvoyer une erreur
    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const userId = user.id; // Obtenir l'ID de l'utilisateur

    // Requête pour récupérer les inscriptions aux cours, incluant les informations des participants
    const presencesQuery = `
      SELECT 
        i.id AS inscription_id, 
        i.cours_id, 
        c.date_cours, 
        c.type_cours, 
        c.heure_debut, 
        c.heure_fin, 
        i.status, 
        u.first_name AS participant_first_name, 
        u.last_name AS participant_last_name 
      FROM inscriptions i
      JOIN cours c ON i.cours_id = c.id
      JOIN utilisateurs u ON i.utilisateur_id = u.id
      WHERE i.utilisateur_id = ?;
    `;
    
    const presences = await client.query(presencesQuery, [userId]);
    console.log("Présences récupérées:", presences);

    // Si aucune présence n'est trouvée
    if (!presences.length) {
      console.log("Aucune inscription trouvée pour cet utilisateur.");
    }

    // Requête pour récupérer le nombre total de cours par mois
    const totalCoursesQuery = `
      SELECT DATE_FORMAT(date_cours, '%Y-%m') AS month, COUNT(*) AS total_courses
      FROM cours
      GROUP BY DATE_FORMAT(date_cours, '%Y-%m')
      ORDER BY month ASC;
    `;
    
    const totalCourses = await client.query(totalCoursesQuery);
    // Parcourir chaque cours dans totalCourses
    const totalCoursesWithPresences = totalCourses.map((course: Courses) => {
      const courseMonth = course.month; // Déjà formaté en 'YYYY-MM'
      const participantsForCourse: Participant[] = []; // Tableau pour stocker les participants pour ce mois

      // Parcourir les présences (participants)
      presences.forEach((participant: Participant) => {
        const participantMonth = formatDate(participant.date_cours, "YYYY-MM"); // Formater la date de présence en 'YYYY-MM'

        // Si le mois de la présence et du cours correspondent
        if (courseMonth === participantMonth) {
          // Ajouter le participant à la liste des présences pour ce cours
          participantsForCourse.push({
            inscription_id: participant.inscription_id,
            cours_id: participant.cours_id,
            date_cours: participant.date_cours,
            type_cours: participant.type_cours,
            heure_debut: participant.heure_debut,
            heure_fin: participant.heure_fin,
            status: participant.status,
            participant_first_name: participant.participant_first_name,
            participant_last_name: participant.participant_last_name
          });
        }
      });

  // Retourner le cours avec les participants ajoutés
    return {
      month: courseMonth,
      total_courses: course.total_courses,
      presences: participantsForCourse // Ajouter les participants (présences)
    };
  });



    

    // Renvoyer les données au front-end
    res.json({
      totalCourses: totalCoursesWithPresences
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des données :', error);
    res.status(500).json({ message: 'Erreur interne du serveur' });
  }
});









export default router;