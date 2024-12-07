import path from 'path';
import express from 'express';

const router = express.Router();

import { default as accueilRouter } from './accueil';


// Routes principales
router.use('/accueil', accueilRouter);







export default router;
