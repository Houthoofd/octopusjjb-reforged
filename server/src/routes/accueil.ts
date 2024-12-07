import express from 'express';
import path from 'path';
import fs from 'fs';
import {Client as SQLClient} from '../packages/db/client';

const router = express.Router();

router.get('/', async(res,req) => {
  req.send(200).json({message: "Hello from accueil"})
})

export default router;