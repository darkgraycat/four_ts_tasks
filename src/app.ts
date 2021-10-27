import express, { Application } from 'express';

import { router as rangeRouter } from './range-converter/router';
import { router as sortRouter } from './sorter/router';
import { router as questionnaireRouter } from './questionnaire/router';

const app: Application = express();

app.use(express.json());

// app.use('/range', rangeRouter);
// app.use('/sort', sortRouter);
app.use('/qa', questionnaireRouter);

app.all('*', (_, res) => res.sendStatus(400));

export default app;
