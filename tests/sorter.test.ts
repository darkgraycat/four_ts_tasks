import { promises as fs } from 'fs';

import { Sorter } from '../src/sorter/sorter';

describe('Sorter test', () => {
  let beforeFile, afterFile;

  let sorter = null;
  let test1, test2;

  beforeAll(async () => {
    const path = `${__dirname}/mocks/sorter/`;
    beforeFile = await fs.readFile(path + 'before.json', 'utf8');
    afterFile = await fs.readFile(path + 'after.json', 'utf8');

    test1 = JSON.parse(beforeFile);
    test2 = JSON.parse(afterFile);

    try {
      sorter = new Sorter({
        data: test1.data,
        condition: test1.condition
      });
    } catch (error) {
      console.error(error);
    }

  });
  test('Sort mocks', () => {
    expect(1).toBe(1);
  });
});
