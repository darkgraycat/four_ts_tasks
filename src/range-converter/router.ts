import express, { Router } from 'express';

import { convert } from './convert';
import { add } from './units';

export const router: Router = express.Router();

router.get('/:from/:to/:value', async (req, res) => {
  const { from, to, value } = req.params;
  return res.send(
    await convert({
      distance: {
        unit: from,
        value: Number.parseFloat(value)
      },
      convert_to: to
    })
  );
});

router.post('/', async (req, res) => {
  const { unit, coef } = req.body;
  await add(unit, coef);
  return res.sendStatus(200);
});
