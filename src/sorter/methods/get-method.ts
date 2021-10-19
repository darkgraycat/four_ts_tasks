import { Include } from './include';
import { Method } from './method';

const METHODS = {
  include: Include,
  sort_by: null
};

export const getMethod = (name: string, rule: Array<Object>): Method => {
  return new METHODS[name](rule);
};
