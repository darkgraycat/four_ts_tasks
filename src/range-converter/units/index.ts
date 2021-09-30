import { promises as fs } from 'fs';

const file_path = __dirname + '/table.json';

// export const units = (
//   async () => JSON.parse(
//     await fs.readFile(file_path, 'utf-8')
//   )
// )();

export const units = (
  async () => {
    console.log('fetching');
    return JSON.parse(await fs.readFile(file_path, 'utf-8'));
  }
)();



export const add = async (unit: string, coef: number) => {
  const table = await units;
  table[unit] = coef;
  await fs.writeFile(file_path, JSON.stringify(table, null, 2), 'utf-8');
};
