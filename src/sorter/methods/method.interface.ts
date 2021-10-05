import { Collection } from '../collection';

export interface IMethod {
  // new(fields: Array<Object>): IMethod;
  new(n: string): IMethod;
  execute(collection: Collection, fields: Array<Object>): Collection;
}
