import path from 'path';
import express from 'express';

const router = express.Router();

import { default as accueilRouter } from './accueil';
import { default as utilisateursRouter } from './utilisateurs';
import { default as informationsRouter } from './informations';


// Routes principales
router.use('/accueil', accueilRouter);
router.use('/utilisateurs', utilisateursRouter);
router.use('/informations', informationsRouter);






export default router;
