import { Collection } from './collection';
import { getMethod } from './methods';
import { IMethod } from './methods/method.interface';

export class Condition {

  private methods: IMethod[];

  constructor(conditions: Object) {
    console.log(conditions);
    for (let methodName in conditions) {
      const method = getMethod(methodName);
      // this.methods.push(new method());
    }
  }

  // public apply(collection: Collection): Collection {
  //   this.methods.map(method => {
  //     // method.execute(collection, )
  //   });
  // }
}
