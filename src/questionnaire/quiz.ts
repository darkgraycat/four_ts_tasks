import { Answer } from './answer';
import { Question } from './question';

export class Quiz {

  private id: string;
  private question: Question | null;

  constructor(id: string, data: Object) {
    this.id = id;
    this.question = Quiz
      .parseQuestion(data);
  }

  public getId(): string {
    return this.id;
  }

  public getQuestion(): Question | null {
    return this.question;
  }

  public check(): string {
    // let numberOfPaths = 0;
    // const run = (q: Question) => {
    //   const n = q.getAmountOfAnswers();
    //   for (let i = 0; i < n; i++) {
    //     const next = q.answer(Variants[i]);
    //     numberOfPaths++;
    //     if (next) run(next);
    //   }
    // };
    // console.log(numberOfPaths);
    return '';
  }

  public toString(): string {
    return JSON.stringify(this, null, 2);
  }

  public static parseQuestion(obj: any): Question | null {
    if (!obj) return null;
    const key: string = Object.keys(obj)[0];
    return new Question(key, Quiz.parseAnswers(obj[key]));
  }

  public static parseAnswers(obj: any): Array<Answer> {
    return Object.keys(obj).map(text => new Answer(text, Quiz.parseQuestion(obj[text])));
  }
}
