import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();

interface Cour {
    id: number;
    type_cours: string;
    date_cours: string;
    heure_debut: string;
    heure_fin: string;
    participants?: Participant[];
}
  
interface Participant {
    participant_id: number;
    first_name: string;
    last_name: string;
    email: string;
}


// Endpoint pour la vérification de l'utilisateur
router.get('/', async (req, res) => {
  // Créer une instance du client SQL
  const client = new SQLClient();

  try {
    // Première requête : récupérer les cours à venir
    const queryCours = 'SELECT * FROM cours WHERE date_cours >= CURDATE() LIMIT 12';
    const coursResults: Cour[] = await client.query(queryCours); // Récupère tous les cours à venir

    if (coursResults.length === 0) {
      return res.status(404).send('Aucun cours trouvé.');
    }

    // Retourner la liste des cours
    res.json({ cours: coursResults });

  } catch (err) {
    console.error('Erreur lors du chargement des cours:', err);
    res.status(500).send('Erreur lors du chargement des cours.');
  }
});

  
  
  

router.post('/participant', async (req, res) => {
  const { cour_id } = req.body; // Récupérer l'ID du cours depuis le corps de la requête
  console.log(cour_id);

  if (!cour_id) {
    return res.status(400).json({ message: "L'ID du cours est requis." });
  }

  try {
    // Créer une instance du client SQL (en supposant que tu utilises mysql2 ou mysql)
    const client = new SQLClient(); // Assure-toi que ce client est bien configuré pour ta base de données

    // Requête SQL pour récupérer les participants inscrits à ce cours
    const query = `
      SELECT utilisateurs.id AS participant_id, utilisateurs.last_name, utilisateurs.first_name, utilisateurs.email
      FROM utilisateurs
      JOIN inscriptions ON utilisateurs.id = inscriptions.utilisateur_id
      WHERE inscriptions.cours_id = ?;
    `;

    // Exécuter la requête avec l'ID du cours
    const results = await client.query(query, [cour_id]);

    // Vérifier si les résultats sont valides
    if (!results || results.length === 0) {
      return res.status(404).json({ message: "Aucun participant trouvé pour ce cours." });
    }

    // Utilisation sécurisée de 'participants'
    const participants = results;

    console.log(participants);

    // Réponse avec les participants trouvés
    res.status(200).json({ participants: participants, message: "Participants trouvés avec succès." });

  } catch (error) {
    console.error('Erreur lors de la récupération des participants:', error);
    return res.status(500).json({ message: "Erreur serveur lors de la récupération des participants." });
  }
});



router.post('/inscription', async (req, res) => {
  const { last_name, first_name, email } = req.body.user;
  const { id: coursId } = req.body.cours;

  if (!last_name || !first_name || !email || !coursId) {
    return res.status(400).json({ message: "Des informations sont manquantes." });
  }

  try {
    const client = new SQLClient();

    // Requête pour récupérer l'ID de l'utilisateur
    const queryUser = `
      SELECT id FROM utilisateurs 
      WHERE last_name = ? AND first_name = ? AND email = ?;
    `;
    const resultUser = await client.query(queryUser, [last_name, first_name, email]);

    if (resultUser.length === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé." });
    }

    const userId = resultUser[0].id;

    // Vérification si l'utilisateur est déjà inscrit au cours
    const queryCheck = `
      SELECT * FROM inscriptions 
      WHERE utilisateur_id = ? AND cours_id = ?;
    `;
    const resultCheck = await client.query(queryCheck, [userId, coursId]);

    console.log(resultCheck)

    if (resultCheck.length > 0) {
      // Informer que l'utilisateur est déjà inscrit
      console.log(`Utilisateur déjà inscrit au cours ${coursId}`);
      return res.status(409).json({ info_message: `Vous êtes déjà inscrit au cours ${coursId}` });
    }

    // Inscription de l'utilisateur
    const queryInsert = `
      INSERT INTO inscriptions (utilisateur_id, cours_id) 
      VALUES (?, ?);
    `;
    await client.query(queryInsert, [userId, coursId]);

    // Réponse de succès
    res.status(200).json({ success_message: "Inscription réussie", userId, coursId });

  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error);
    res.status(500).json({ message: "Erreur serveur lors de l'inscription." });
  }
});



// Route pour valider la présence d'un participant
router.post('/participant/cancel', async (req, res) => {
  const { courId, participantId } = req.body; // Récupère les données envoyées par le front
  
  if (!courId || !participantId) {
    return res.status(400).json({ message: 'Cour ID et Participant ID sont requis.' });
  }

  try {
    const client = new SQLClient();
    // Exécution de la requête d'update avec les paramètres
    const result = await client.query(
      'UPDATE inscriptions SET status = FALSE WHERE cours_id = ? AND utilisateur_id = ?',
      [courId, participantId]
    );

    // Vérifie si des lignes ont été réellement modifiées
    if (result.changedRows === 0) {
      return res.status(404).json({ message: 'Aucun changement n\'a eu lieu, vérifie si le participant est déjà validé.' });
    }

    // Si un changement a eu lieu
    return res.status(200).json({ message: 'Participant supprimé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut :', error);
    return res.status(500).json({ message: 'Erreur serveur.' });
  }
});

router.post('/participant/validation', async (req, res) => {
  const { courId, participantId } = req.body; // Récupère les données envoyées par le front
  
  if (!courId || !participantId) {
    return res.status(400).json({ message: 'Cour ID et Participant ID sont requis.' });
  }

  try {
    const client = new SQLClient();
    // Exécution de la requête d'update avec les paramètres
    const result = await client.query(
      'UPDATE inscriptions SET status = TRUE WHERE cours_id = ? AND utilisateur_id = ?',
      [courId, participantId]
    );

    // Vérifie si des lignes ont été réellement modifiées
    if (result.changedRows === 0) {
      return res.status(404).json({ message: 'Aucun changement n\'a eu lieu, vérifie si le participant est déjà validé.' });
    }

    // Si un changement a eu lieu
    return res.status(200).json({ message: 'Participant validé avec succès.' });
  } catch (error) {
    console.error('Erreur lors de la mise à jour du statut :', error);
    return res.status(500).json({ message: 'Erreur serveur.' });
  }
});








  







export default router;