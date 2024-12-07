import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();



router.post('/', async (req, res) => {
    const utilisateurs = req.body; 
    const client = new SQLClient(); 

    try {
        for (const utilisateur of utilisateurs) {
            const { nom, email, cours } = utilisateur;

            // Vérifier si l'utilisateur existe déjà
            const userQuery = `SELECT * FROM utilisateurs WHERE email = ?`;
            const userValues = [email];
            const existingUser = await client.query(userQuery, userValues);

            if (existingUser.length > 0) {
                console.log(`L'utilisateur avec l'email ${email} existe déjà.`);
                return res.status(400).json({ message: `L'utilisateur avec cet email existe déjà.` });
            }

            // Insérer l'utilisateur
            const insertUserQuery = `INSERT INTO utilisateurs (first_name, email, status) VALUES (?, ?, 'visitor')`;
            const userResult = await client.query(insertUserQuery, [nom, email]);
            const utilisateurId = userResult.insertId; // Récupérer l'ID de l'utilisateur

            console.log("Utilisateur inséré avec succès, ID:", utilisateurId);


            for (const cour of cours) {
                const { id: coursId } = cour; 

                // Vérifier si l'utilisateur a déjà réservé ce cours
                const checkQuery = `
                    SELECT * FROM reservations 
                    WHERE utilisateur_id = ? AND cours_id = ?
                `;
                const checkValues = [utilisateurId, coursId];
                const existingReservation = await client.query(checkQuery, checkValues);

                if (existingReservation.length > 0) {
                    console.log(`L'utilisateur ID: ${utilisateurId} a déjà réservé ce cours ID: ${coursId}`);
                    return res.status(400).json({ message: `L'utilisateur a déjà réservé ce cours.` });
                }

                // Créer la réservation
                await client.query(
                    'INSERT INTO reservations (utilisateur_id, cours_id) VALUES (?, ?)', 
                    [utilisateurId, coursId]
                );

                console.log(`Réservation créée pour l'utilisateur ID: ${utilisateurId} et le cours ID: ${coursId}`);
            }

            // Vérifier le statut de l'utilisateur après insertion
            const statusQuery = `SELECT status FROM utilisateurs WHERE id = ?`;
            const statusResult = await client.query(statusQuery, [utilisateurId]);
            const userStatus = statusResult[0] ? statusResult[0].status : null; // Obtenir le statut
            res.status(200).json({ message: 'Utilisateurs et réservations créés avec succès.', role: userStatus });
        }

    } catch (error) {
        console.error('Erreur lors de la création des utilisateurs et réservations:', error);
        res.status(500).json({ error: 'Erreur serveur lors de la création.' });
    } finally {
        // Optionnel : fermer la connexion à la base de données si nécessaire
        // await client.close();
    }
});




router.post('/verification', async (req, res) => {
    const { nom, email } = req.body;
    console.log("Nom:", nom, "Email:", email);
    console.log("Vérification en cours...");

    const client = new SQLClient(); 

    try {
        // Étape 1: Vérifier si l'utilisateur existe
        const userQuery = `
            SELECT * FROM utilisateurs 
            WHERE email = ?
        `;
        const userValues = [email];
        const existingUser = await client.query(userQuery, userValues);

        // Étape 2: Si l'utilisateur n'existe pas, permettre l'inscription
        if (existingUser.length === 0) {
            console.log(`L'utilisateur ${nom} (${email}) n'est pas inscrit.`);
            return res.status(200).json({ canRegister: true }); // Indique que l'utilisateur peut s'inscrire
        }

        // Étape 3: Si l'utilisateur existe, vérifier les réservations
        const utilisateurId = existingUser[0].id; 
        const reservationQuery = `
            SELECT * FROM reservations 
            WHERE utilisateur_id = ?
        `;
        const reservationValues = [utilisateurId];
        const reservations = await client.query(reservationQuery, reservationValues);
        
        // Étape 4: Si l'utilisateur a déjà réservé, renvoyer un message d'erreur
        if (reservations.length > 0) {
            console.log(`L'utilisateur ${nom} (${email}) a déjà réservé un cours.`);
            return res.status(400).json({ message: "Vous avez déjà réservé un cours d'essai.", canRegister: false }); // Indique que l'utilisateur ne peut pas s'inscrire
        }

        // Étape 5: Aucune réservation existante
        res.status(200).json({ message: "Aucune réservation existante pour cet utilisateur.", canRegister: true }); // Indique que l'utilisateur peut réserver
        
    } catch (error) {
        console.error('Erreur lors de la vérification des réservations:', error);
        res.status(500).json({ error: 'Erreur serveur lors de la vérification.' });
    } finally {
       
    }
});











export default router;