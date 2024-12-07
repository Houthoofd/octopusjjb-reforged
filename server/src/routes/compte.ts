import express from 'express';
import jwt from 'jsonwebtoken';
import { Client as SQLClient } from '../packages/db/client';

const router = express.Router();


// Appliquer le middleware de vérification du token sur ce routeur
router.post('/', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).send('Email requis.');
  }

  const client = new SQLClient();

  try {
    const query = `
      SELECT email, first_name, last_name, created_at 
      FROM utilisateurs 
      WHERE email = ?`;
    const values = [email];

    const results = await client.query(query, values);

    if (results.length === 0) {
      return res.status(404).send('Utilisateur non trouvé.');
    }

    const userInfo = {
      email: results[0].email,
      first_name: results[0].first_name,
      last_name: results[0].last_name,
      created_at: results[0].created_at // Date de création du compte
    };

    console.log("Informations utilisateur trouvées :", userInfo);
    return res.status(200).json(userInfo);

  } catch (err) {
    console.error('Erreur lors de la récupération des informations utilisateur:', err);
    return res.status(500).send('Erreur lors de la récupération des informations.');
  }
});

export default router;
