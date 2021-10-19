import { Method } from './method';

export class Include extends Method {

  execute(data: Array<Object>): Array<Object> {
    return data.filter(element => {
      console.log('PIIII', element, this.rule);
      return this.rule.map(rule => {
        for (let key in rule) {
          if (element[key] !== rule[key]) return false;
        }
        return true;
      });
    });
  }

}

