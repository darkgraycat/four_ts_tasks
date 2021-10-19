export abstract class Method {
  constructor(
    protected rule: Array<Object>
  ) { }

  execute(data: Array<Object>): Array<Object> {
    throw new Error('Not implemented yet');
  };
}
