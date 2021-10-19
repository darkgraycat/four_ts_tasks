import { getMethod } from './methods/get-method';
import { Method } from './methods/method';

export class Sorter {

  private static instance: Sorter;

  private constructor() { }

  public static getInstance() {
    return this.instance || (this.instance = new Sorter());
  }

  public sort(data: Array<Object>, condition: Object): Array<Object> {
    for (let key in condition) {
      getMethod(key, condition[key])
        .execute(data);
    }
    console.log('result', data);
    return data;
  }
}
