import express from 'express';
import jwt from 'jsonwebtoken';
import { Client as SQLClient } from '../packages/db/client';

const router = express.Router();


router.post('/',async (req, res) => {
  const { email, first_name, last_name} = req.body; 
  console.log("Requête reçue avec les données :", req.body);

  console.log(email, first_name, last_name)

  if (!email || !first_name || !last_name) {
    return res.status(400).send('Tous les champs sont requis.');
  }

  const client = new SQLClient();

  try {
    // Requête pour récupérer l'utilisateur
    const query = `
      SELECT * FROM utilisateurs 
      WHERE email = ? AND first_name = ? AND last_name = ?`;
    const values = [email, first_name, last_name];

    const results = await client.query(query, values);

    if (results.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }

    console.log(results)

    const userInfo = {
      email: results[0].email,
      first_name: results[0].first_name,
      last_name: results[0].last_name,
      role: results[0].status,
      gender: results[0].gender,
      date_of_birth: results[0].date_of_birth,
      grade: null,
      abonnement: null
    };

    // Requête pour récupérer le nom du grade à partir de l'ID du grade
    const gradeQuery = `
      SELECT grade FROM grades WHERE id = ?`; // Recherche par ID du grade
    const gradeResults = await client.query(gradeQuery, [results[0].grade]);

    console.log(gradeResults)

    if (gradeResults.length > 0) {
      userInfo.grade = gradeResults[0].grade; // Ajout du nom du grade dans 'grade'
    } else {
      userInfo.grade = null; // Valeur par défaut si aucune correspondance
    }

    // Requête pour récupérer le nom du genre à partir de l'ID du genre
    const genreQuery = `SELECT genre_name FROM genres WHERE id = ?`;
    const genreResults = await client.query(genreQuery, [results[0].gender]);

    if (genreResults.length > 0) {
      userInfo.gender = genreResults[0].genre_name; // Ajout du nom du genre dans 'gender'
    }

    // Requête pour récupérer le type d'abonnement à partir de l'ID d'abonnement
    const abonnementQuery = `SELECT nom_plan FROM plans_tarifaires WHERE id = ?`;
    const abonnementResults = await client.query(abonnementQuery, [results[0].abonnement]);

    if (abonnementResults.length > 0) {
      userInfo.abonnement = abonnementResults[0].nom_plan; // Ajout du nom du plan d'abonnement
    }

    console.log("Informations utilisateur trouvées :", userInfo);
    return res.status(200).json(userInfo);

  } catch (err) {
    console.error('Erreur lors de la récupération des informations utilisateur:', err);
    return res.status(500).send('Erreur lors de la récupération des informations.');
  }
});

// Appliquer le middleware de vérification du token sur ce routeur
router.get('/abonnement', async (req, res) => {
  const client = new SQLClient();

  try {
    // Requête pour récupérer les noms des abonnements et leurs prix
    const query = `
      SELECT nom_plan, prix
      FROM plans_tarifaires`;
    
    const results = await client.query(query);

    if (results.length === 0) {
      return res.status(404).send('Aucun plan tarifaire trouvé.');
    }

    // Extraire les noms des abonnements et les prix sous forme d'objets
    const abonnements = results.map(plan => ({
      nom_plan: plan.nom_plan,
      prix: plan.prix
    }));

    console.log("Plans tarifaires trouvés :", abonnements);
    return res.status(200).json(abonnements);

  } catch (err) {
    console.error('Erreur lors de la récupération des plans tarifaires:', err);
    return res.status(500).send('Erreur lors de la récupération des plans tarifaires.');
  }
});

// Appliquer le middleware de vérification du token sur ce routeur
router.get('/gender', async (req, res) => {
  const client = new SQLClient();

  try {
    // Requête pour récupérer les noms des abonnements et leurs prix
    const query = `
      SELECT genre_name
      FROM genres`;
    
    const results = await client.query(query);

    if (results.length === 0) {
      return res.status(404).send('Aucun plan tarifaire trouvé.');
    }

    // Extraire les noms des abonnements et les prix sous forme d'objets
    const genres = results.map(genre => ({
      genre: genre.genre_name
    }));

    console.log("Plans genres trouvés :", genres);
    return res.status(200).json(genres);

  } catch (err) {
    console.error('Erreur lors de la récupération des plans tarifaires:', err);
    return res.status(500).send('Erreur lors de la récupération des plans tarifaires.');
  }
});

// Appliquer le middleware de vérification du token sur ce routeur
router.get('/grade', async (req, res) => {
  const client = new SQLClient();

  try {
    // Requête pour récupérer les noms des abonnements et leurs prix
    const query = `
      SELECT *
      FROM grades`;
    
    const results = await client.query(query);

    if (results.length === 0) {
      return res.status(404).send('Aucun plan tarifaire trouvé.');
    }

    console.log("grades trouvés :", results);
    return res.status(200).json(results);

  } catch (err) {
    console.error('Erreur lors de la récupération des plans tarifaires:', err);
    return res.status(500).send('Erreur lors de la récupération des plans tarifaires.');
  }
});




export default router;
