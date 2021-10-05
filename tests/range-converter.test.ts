import { rangeConvert } from '../src/range-converter';

describe('Range converter test', () => {

  test('Convert 1m to cm', async () => {
    expect(await rangeConvert(
      { distance: { unit: 'm', value: 1 }, convert_to: 'cm' },
    )).toEqual({ unit: 'cm', value: 100 });
  });

  test('Conver 20ft to in', async () => {
    expect(await rangeConvert(
      { distance: { unit: 'ft', value: 20 }, convert_to: 'in' },
    )).toEqual({ unit: 'in', value: 240 });
  });

});
