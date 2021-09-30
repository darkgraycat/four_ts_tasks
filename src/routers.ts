import express, { Router } from 'express';

import { rangeConvert } from './range-converter';

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
