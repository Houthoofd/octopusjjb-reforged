import express from 'express';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'; 
import { Client as SQLClient } from '../packages/db/client';

// Charger les variables d'environnement
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send('Email et mot de passe sont requis');
  }

  const client = new SQLClient();

  try {
    const query = 'SELECT * FROM utilisateurs WHERE email = ?';
    const values = [email];
    const results = await client.query(query, values);

    if (results.length === 0) {
      return res.status(401).send('Utilisateur non trouvé');
    }

    const user = results[0];

    const match = await bcrypt.compare(password, user.password);
    console.log(user);
    if (!match) {
      return res.status(401).send('Mot de passe incorrect');
    }

    // Vérification de TOKEN_SECRET
    const tokenSecret = process.env.TOKEN_SECRET;
    if (!tokenSecret) {
      console.error('Erreur : TOKEN_SECRET est undefined');
      return res.status(500).send('Erreur de configuration serveur');
    }

    // Génération du token JWT
    const token = jwt.sign(
      { email: user.email, role: user.status },
      tokenSecret,
      { expiresIn: '1h' }
    );
    console.log('Cookie set:', 'token=' + token);

    res.cookie('token', token, {
      httpOnly: true,         // Le cookie ne peut être accédé que par le serveur, pas par JavaScript
      secure: false,          // Ne pas forcer HTTPS si vous utilisez HTTP
      sameSite: 'none',       // Permet l'envoi du cookie dans les requêtes inter-domaines
      maxAge: 3600000,        // Durée de vie du cookie (1 heure)
      domain: '.octopusjjb.ovh', // Assurez-vous que le domaine est bien configuré
    });

    // Envoi du token également dans la réponse JSON
    res.status(200).json({
      message: 'Connexion réussie',
      userData: {
        email: user.email,
        role: user.status,
        nom: user.last_name,
        prenom: user.first_name,
        isloged: true
      },
    });

  } catch (err) {
    console.error('Erreur lors de la vérification de l\'utilisateur', err);
    res.status(500).send('Erreur lors de la vérification de l\'utilisateur');
  }
});



export default router;
