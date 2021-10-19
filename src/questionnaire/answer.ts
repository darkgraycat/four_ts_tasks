import { Question } from './question';

export class Answer {
  constructor(
    private text: string,
    private next: Question
  ) { }

  getText(): string {
    return this.text;
  }

  getNextQuestion(): Question {
    return this.next;
  }
}
