import { promises as fs } from 'fs';
import { Sorter } from '../src/sorter/sorter';

describe('Sorter test', () => {
  const { sort } = Sorter.getInstance();
  let request_1, request_2,
    response_1, response_2;
  beforeAll(async () => {
    const path = `${__dirname}/mocks/sorter/`;
    request_1 = await fs.readFile(path + 'request_1.json', 'utf8');
    request_2 = await fs.readFile(path + 'request_2.json', 'utf8');
    response_1 = await fs.readFile(path + 'response_1.json', 'utf8');
    response_2 = await fs.readFile(path + 'response_2.json', 'utf8');
  });
  test('Include sort', () => {
    const { data, condition } = JSON.parse(request_1);
    const { result } = JSON.parse(response_1);
    expect(sort(data, condition)).toBe(result);
  });
  // test('Exclude sort', () => {
  //   const { data, condition } = JSON.parse(request_2);
  //   const { result } = JSON.parse(response_2);
  //   expect(sort(data, condition)).toBe(result);
  // });
});
