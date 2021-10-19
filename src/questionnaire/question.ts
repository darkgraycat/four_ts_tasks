import { Answer } from './answer';

export class Question {
  constructor(
    private id: string,
    private text: string,
    private answers: Array<Answer>
  ) { }

}
