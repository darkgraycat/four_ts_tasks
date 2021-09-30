import express, { Router } from 'express';

import { rangeConvert, addUnit } from './range-converter';

export const rangeRouter: Router = express.Router();

rangeRouter.get('/:from/:to/:value', async (req, res) => {
  const { from, to, value } = req.params;

  return res.send(
    await rangeConvert({
      distance: {
        unit: from,
        value: Number.parseFloat(value)
      },
      convert_to: to
    })
  );
});

rangeRouter.post('/', async (req, res) => {
  const { unit, coef } = req.body;
  await addUnit(unit, coef);
  return res.sendStatus(200);
});
