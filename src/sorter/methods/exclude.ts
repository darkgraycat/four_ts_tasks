import { Collection } from '../collection';
import { IMethod } from './method.interface';

export class Exclude implements IMethod {
  n: string;
  constructor(n: string) {
    this.n = n;
  }
  execute(collection: Collection, fields: Object[]): Collection {
    throw new Error('Method not implemented.');
  }

  // execute(collection: Collection, fields: Object[]): Collection {
  //   const data = collection.getData();
  //   return collection;
  // }


  // public exec(collection, fields): Collection {
  //   const data = collection.getData();
  //   const filtered = data.filter(item => {
  //     this.fields.map(field => {
  //       console.log('TTTT', item, field);
  //     });
  //   });

  //   return this.collection;
  // }
}
