import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client, Client as SQLClient} from '../packages/db/client';

const router = express.Router();

router.get('/abonnement', async (req, res) => {
  const client = new Client();

  client.obtenirLesPlansTarifaires()
      .then((roles) => {
          res.status(200).json({ roles });
      })
      .catch((error) => {
          console.error('Erreur lors de la récupération des plans tarifaires :', error);
          res.status(500).json({ message: "Erreur lors de la récupération des plans tarifaires", error: error.message });
      });
});

router.get('/genres', async (req, res) => {
  const client = new Client();

  client.obtenirLesGenres()
      .then((roles) => {
          res.status(200).json({ roles });
      })
      .catch((error) => {
          console.error('Erreur lors de la récupération des genres :', error);
          res.status(500).json({ message: "Erreur lors de la récupération des genres", error: error.message });
      });
});

router.get('/roles', async (req, res) => {
  const client = new Client();

  client.obtenirLesRoles()
      .then((roles) => {
          res.status(200).json({ roles });
      })
      .catch((error) => {
          console.error('Erreur lors de la récupération des rôles :', error);
          res.status(500).json({ message: "Erreur lors de la récupération des rôles", error: error.message });
      });
});



export default router;