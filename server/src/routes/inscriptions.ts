import express from 'express';
import bcrypt from 'bcrypt';
import { Client as SQLClient } from '../packages/db/client';

const router = express.Router();

router.post('/', async (req, res) => {
    const { firstName, lastName, email, password, date, tarif, genre } = req.body;

    console.log(firstName, lastName, email, password, date, tarif, genre);

    // Vérification des champs requis
    if (!firstName || !lastName || !email || !password || !date || !tarif || !genre) {
        return res.status(400).send('Tous les champs sont requis');
    }

    const client = new SQLClient();

    try {
        // Vérifier si l'utilisateur existe déjà
        const userExistsQuery = 'SELECT * FROM utilisateurs WHERE email = ?';
        const existingUsers = await client.query(userExistsQuery, [email]);

        if (existingUsers.length > 0) {
            return res.status(400).send('Un utilisateur avec cet email existe déjà');
        }

        // Récupérer l'ID du genre sélectionné
        const genreQuery = 'SELECT id FROM genres WHERE genre_name = ?';
        const genreResult = await client.query(genreQuery, [genre]);

        if (genreResult.length === 0) {
            return res.status(400).send('Genre invalide');
        }

        const genreId = genreResult[0].id;

        // Récupérer l'ID du tarif sélectionné
        const tarifQuery = 'SELECT id FROM plans_tarifaires WHERE nom_plan = ?';
        const tarifResult = await client.query(tarifQuery, [tarif]);

        if (tarifResult.length === 0) {
            return res.status(400).send('Tarif invalide');
        }

        const tarifId = tarifResult[0].id;
        console.log(tarifId,genreId)

        // Hash du mot de passe
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Insérer l'utilisateur avec les IDs du genre et du tarif, et abonnement à la fin
        const insertQuery = `
            INSERT INTO utilisateurs (first_name, last_name, email, password, gender, date_of_birth, status, grade, abonnement)
            VALUES (?, ?, ?, ?, ?, ?, 'user', '1', ?)
        `;

        await client.query(insertQuery, [firstName, lastName, email, hashedPassword, genreId, date, tarifId]);

        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });

    } catch (error) {
        console.error('Erreur lors de l\'inscription', error);
        res.status(500).send('Erreur lors de l\'inscription');
    }
});



export default router;
