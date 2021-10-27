import express, { Router } from 'express';
import { Quiz } from './quiz';

export const router: Router = express.Router();

const quizes: Array<Quiz> = [];

// ask questions
router.get('/:quizName', async (req, res) => {
  const { quizName } = req.params;
  const quiz: Quiz | undefined = quizes.find(
    (quiz: Quiz) => quiz.getId() == quizName
  );
  if (!quiz) return res.status(400).send(`Cannot find quiz ${quizName}`);
  console.log(req.query);
  return res.send({ quizName });
});

// generate questions
router.post('/:quizName', async (req, res) => {
  const { quizName } = req.params;
  quizes.push(new Quiz(quizName, req.body));
  return res.send(`Quiz ${quizName} succesfully added`);
});


