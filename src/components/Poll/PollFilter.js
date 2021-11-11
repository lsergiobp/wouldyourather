import React from 'react';
import { useSelector } from 'react-redux';
import { getAllQuestions } from '../../features/shared';
import { useParams, Redirect } from 'react-router';
import Poll from './Poll';
import PollResult from './PollResult';

const PollFilter = () => {
  const questionList = useSelector(getAllQuestions);
  const { id } = useParams();
  let answered = false;

  let question = questionList.answered.find((q) => q.id === id);

  if (question) {
    answered = true;
  } else {
    question = questionList.unanswered.find((q) => q.id === id);
    answered = false;
  }

  return !question ? (
    <Redirect to='/404' />
  ) : (
    <div>
      {!answered ? (
        <Poll question={question} />
      ) : (
        <PollResult question={question} />
      )}
    </div>
  );
};

export default PollFilter;
