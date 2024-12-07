import express from 'express';
import bcrypt from 'bcrypt'; 
import { Client as SQLClient } from '../packages/db/client';

const router = express.Router();


router.post('/', async (req, res) => {
  const { email, newpassword } = req.body;

  console.log(email, newpassword)

  if (!email || !newpassword) {
    return res.status(400).json({ message: 'Email et mot de passe sont requis' });
  }

  try {
    // Recherche l'utilisateur dans la base de données
    const client = new SQLClient();
    const query = 'SELECT * FROM utilisateurs WHERE email = ?';
    const values = [email];
    const results = await client.query(query, values);

    console.log(results)

    if (results.length === 0) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    const user = results[0];

    // Vérification du nouveau mot de passe (exemple de validation)
    if (newpassword.length < 8) {
      return res.status(400).json({ message: 'Le mot de passe doit contenir au moins 8 caractères' });
    }

    // Hachage du nouveau mot de passe avec bcrypt
    const hashedPassword = await bcrypt.hash(newpassword, 10);

    // Mise à jour du mot de passe dans la base de données
    const updateQuery = 'UPDATE utilisateurs SET password = ? WHERE email = ?';
    await client.query(updateQuery, [hashedPassword, email]);

    // Réponse de succès
    res.status(200).json({ message: 'Mot de passe changé avec succès' });
  } catch (err) {
    console.error('Erreur lors de la mise à jour du mot de passe', err);
    res.status(500).json({ message: 'Erreur serveur lors de la mise à jour du mot de passe' });
  }
});


export default router;