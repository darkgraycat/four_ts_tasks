import { promises as fs } from 'fs';
import path from 'path';

const PATH = path.join(__dirname, 'table.json');

export const units = (
  async () => JSON.parse(
    await fs.readFile(PATH, 'utf-8')
  )
)();

export const add = async (unit: string, coef: number) => {
  const table = await units;
  table[unit] = coef;
  await fs.writeFile(PATH, JSON.stringify(table), 'utf-8');
};
