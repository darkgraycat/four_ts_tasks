import { IMethod } from './method.interface';

import { Exclude } from './exclude';
import { Include } from './include';
import { SortBy } from './sort-by';

const METHODS_LIST = {
  'exclude': Exclude,
  'include': Include,
  'sort_by': SortBy,
};

export const getMethod = (methodName: string): IMethod => {
  return METHODS_LIST[methodName];
};
