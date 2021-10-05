export class SorterDto {
  data: Object[];
  condition: Object;
  constructor(json: string) {
    const parsedFile = JSON.parse(json);
    if (!parsedFile.data || !parsedFile.condition)
      throw new Error('Unsupported file format');
    this.data = parsedFile.data;
    this.condition = parsedFile.condition;
  }
}
