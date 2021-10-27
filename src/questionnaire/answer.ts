import { Question } from './question';

export class Answer {
  constructor(
    private text: string,
    private question: Question | null
  ) { }

  public show(): string {
    return `[${this.text}]`;
  }

  public next(): Question | null {
    return this.question;
  }
}
