import { Collection } from './collection';
import { Condition } from './condition';
import { SorterDto } from './sorter.dto';

export class Sorter {

  private collection: Collection;
  private condition: Condition;

  constructor(dto: SorterDto) {
    this.collection = new Collection(dto.data);
    this.condition = new Condition(dto.condition);
    this.init();
  }

  private init() {
    console.log(this.collection);
    console.log(this.condition);
  }

  // public sort(): Collection {
  //   const methods = this.condition.getMethods();
  //   const data = this.collection.getData();
  //   // methods.map(method => { });
  // }

}
