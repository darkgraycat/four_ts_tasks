import express, { Router } from 'express';
import { Sorter } from './sorter';

export const router: Router = express.Router();

router.post('/', (req, res) => {
  const { data, condition } = req.body;
  const { sort } = Sorter.getInstance();
  const result = sort(JSON.parse(data), JSON.parse(condition));
  return res.send(JSON.stringify(result, null, 2));
});
