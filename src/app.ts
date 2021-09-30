import express, { Application } from 'express';
import {
  rangeRouter
} from './routers';

const app: Application = express();

app.use(express.json());

app.use('/range', rangeRouter);

app.all('*', (req, res) => res.sendStatus(400));

export default app;
