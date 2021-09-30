import { IParams, IRange } from './interfaces';
import { units } from './units';

const convert = async (params: IParams): Promise<IRange> => {
  const { value, unit } = params.distance;
  const table = await units;

  const meters = value * Number.parseFloat(table[unit]);
  const result = meters / Number.parseFloat(table[params.convert_to]);

  return {
    unit: params.convert_to,
    value: result
  };
};

export default convert;
