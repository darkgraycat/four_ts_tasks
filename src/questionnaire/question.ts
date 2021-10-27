import { Answer } from './answer';

export class Question {
  constructor(
    private text: string,
    private answers: Array<Answer>
  ) { }

  public ask(): string {
    const answers: string = this.answers.map(
      (answer, i) =>
        `${i}:${answer.show()}`
    ).join(' ');
    return `${this.text}\n${answers}`;
  }

  public answer(index: number): Question | null {
    return this.answers[index].next();
  }
}
