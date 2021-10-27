import { promises as fs } from 'fs';
import { Answer } from '../src/questionnaire/answer';
import { Question } from '../src/questionnaire/question';
import { Quiz } from '../src/questionnaire/quiz';

describe('Questionnaire test', () => {
  let request_1, response_1,
    request_2, response_2;
  let quiz_1: Quiz,
    quiz_2: Quiz;
  beforeAll(async () => {
    const path = `${__dirname}/mocks/questionnaire/`;
    request_1 = await fs.readFile(path + 'request_1.json', 'utf-8');
    response_1 = await fs.readFile(path + 'response_1.json', 'utf-8');
    request_2 = await fs.readFile(path + 'request_2.json', 'utf-8');
    response_2 = await fs.readFile(path + 'response_2.json', 'utf-8');
  });

  test('Create quiz_1', () => {
    quiz_1 = new Quiz('quiz_1', request_1);
    const quizSchema = JSON.parse(quiz_1.toString());
    const responseSchema = JSON.parse(response_1);
    expect(quizSchema).toEqual(responseSchema);
  });


  test('Create quiz_2', () => {
    quiz_2 = new Quiz('quiz_2', request_2);
    const quizSchema = JSON.parse(quiz_2.toString());
    const responseSchema = JSON.parse(response_2);
    expect(quizSchema).toEqual(responseSchema);
  });

  test('Check the number of paths in quiz_1', () => {
    quiz_1.check();
  });

  test('Create question with 2 answers', () => {
    const question = new Question(
      'What watch?',
      [
        new Answer('Such much', new Question('Good', null)),
        new Answer('Much but not such', new Question('Bad', null))
      ]
    );
    expect(question.answer(0)).toMatchObject({ text: 'Good' });
    expect(question.answer(1)).toMatchObject({ text: 'Bad' });
  });

});
