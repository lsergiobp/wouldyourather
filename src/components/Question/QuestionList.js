import React from 'react';
import Question from './Question';

const QuestionList = (props) => {
  const questionList = props.list;
  return (
    <div>
      <ol className='questions-grid'>
        {questionList.map((question) => (
          <li key={question.id}>
            <Question question={question} />
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QuestionList;
