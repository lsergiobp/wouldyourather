import * as database from './database';
import { toList } from '../helpers/dataHelper';

export const getQuestions = async () => {
  const questions = await database._getQuestions();
  const questionList = toList(questions);
  return questionList;
};

export const getUsers = async () => {
  const users = await database._getUsers();
  const userList = toList(users);
  return userList;
};

export const saveAnswer = async (answerInfo) => {
  database._saveQuestionAnswer(answerInfo).catch((err) => console.error(err));
};

export const saveQuestion = async (question) => {
  const formattedQuestion = await database._saveQuestion(question);
  return formattedQuestion;
};
