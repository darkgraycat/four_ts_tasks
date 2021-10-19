import { convert } from '../src/range-converter/convert';

describe('Range converter test', () => {

  test('Convert 1m to cm', async () => {
    expect(await convert(
      { distance: { unit: 'm', value: 1 }, convert_to: 'cm' },
    )).toEqual({ unit: 'cm', value: 100 });
  });

  test('Conver 20ft to in', async () => {
    expect(await convert(
      { distance: { unit: 'ft', value: 20 }, convert_to: 'in' },
    )).toEqual({ unit: 'in', value: 240 });
  });

});
