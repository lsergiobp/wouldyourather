import { formatQuestion } from '../data/database';

export const toList = (obj) => {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};

export const getQuestionPreview = (question) => {
  const optionOne = question.optionOne.text;

  return `...${optionOne}...`;
};

export const compareScores = (userA, userB) => {
  const answeredQuestionsByA = Object.keys(userA.answers).length;
  const createdQuestionsByA = userA.questions.length;
  const scoreA = answeredQuestionsByA + createdQuestionsByA;

  const answeredQuestionsByB = Object.keys(userB.answers).length;
  const createdQuestionsByB = userB.questions.length;
  const scoreB = answeredQuestionsByB + createdQuestionsByB;

  return scoreB - scoreA;
};

export const formatQuestionList = (questions, users, user) => {
  let questionList = {
    answered: [],
    unanswered: [],
  };

  let answeredQuestions = getAnsweredQuestions(questions, user).map(
    (question) => {
      return Object.assign({}, question, { askedBy: null });
    }
  );

  let unansweredQuestions = getUnansweredQuestions(questions, user).map(
    (question) => {
      return Object.assign({}, question, { askedBy: null });
    }
  );

  questionList.answered = answeredQuestions.map((question) => {
    question.askedBy = users.find((user) => user.id === question.author);
    return question;
  });

  questionList.unanswered = unansweredQuestions.map((question) => {
    question.askedBy = users.find((user) => user.id === question.author);
    return question;
  });

  return questionList;
};

const getAnsweredQuestions = (questions, user) => {
  return questions.filter((question) => {
    return (
      Object.keys(user.answers) &&
      Object.keys(user.answers).find((id) => id === question.id)
    );
  });
};

const getUnansweredQuestions = (questions, user) => {
  return questions.filter((question) => {
    return (
      !Object.keys(user.answers) ||
      !Object.keys(user.answers).find((id) => id === question.id)
    );
  });
};

export const emptyQuestion = () => {
  const args = {
    optionOneText: '',
    optionTwoText: '',
    author: '',
  };

  let emptyQuestion = formatQuestion(args);
  emptyQuestion.askedBy = { name: '', avatarURL: '' };
  return emptyQuestion;
};
