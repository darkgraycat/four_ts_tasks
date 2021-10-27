import { promises as fs } from 'fs';

const path = __dirname + '/storage';

const writeFile = async (name: string, data: string): Promise<void> => {
  await fs.writeFile(`${path}/${name}`, data, 'utf-8');
};

const readFile = async (name: string): Promise<string> => {
  return await fs.readFile(`${path}/${name}`, 'utf-8');
};
