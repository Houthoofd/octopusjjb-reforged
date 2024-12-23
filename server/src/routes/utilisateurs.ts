import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client, Client as SQLClient} from '../packages/db/client';

const router = express.Router();

router.post('/verification', async (req, res) => {
  try {
    const { nom, prenom, date_naissance, email } = req.body;

    console.log(nom,prenom,date_naissance,email)
    
    const client = new Client();

    const result = await client.IsUserExist(nom, prenom, email, date_naissance);

    if (result.exists) {
      console.log('Utilisateur déjà existant:', result.user);
      res.status(409).json({ message: 'L\'utilisateur existe déjà.' });
    } else {
      console.log('Aucun utilisateur trouvé, inscription possible.');
      res.status(200).json({ message: 'Aucun utilisateur trouvé, inscription possible.' });
    }
  } catch (error) {
    console.error('Erreur lors de la vérification de l\'utilisateur :', error);
    res.status(500).json({ message: 'Erreur serveur lors de la vérification de l\'utilisateur.' });
  }
});

router.post('/inscription', async (req, res) => {
  const { prenom, nom, nom_utilisateur, email, genre, date_naissance, password, plan_tarifaire } = req.body;
  
  const client = new Client();
  console.log(req.body);
  client.inscrireUtilisateur(prenom, nom, nom_utilisateur, email, genre, date_naissance, password, plan_tarifaire, 'ceinture blanche', 'utilisateur')
      .then((result) => {
          res.status(200).json({ message: "Utilisateur inscrit avec succès", userId: result.insertId });
      })
      .catch((error) => {
          console.error('Erreur lors de l\'inscription de l\'utilisateur :', error);
          res.status(500).json({ message: "Erreur lors de l'inscription", error: error.message });
      });
});



export default router;