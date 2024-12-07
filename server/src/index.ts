import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import path from 'path';

import { default as indexRouter } from './routes';

const __server_dirname = process.cwd ? process.cwd() : process.env.PWD as string;

const app = express();

app.use(cors({
  origin: 'http://ec2-18-185-136-232.eu-central-1.compute.amazonaws.com/'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use( express.static(path.join(__server_dirname, '/server/public')) );


app.use('/', indexRouter);

app.listen(3000)