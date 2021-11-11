import React from 'react';
import Score from './Score';
import { compareScores } from '../../helpers/dataHelper';

const ScoreList = (props) => {
  const userList = props.list;

  return (
    <div>
      <ol className='score-grid'>
        {userList
          .slice()
          .sort(compareScores)
          .map((user, idx) => (
            <li key={user.id}>
              <Score user={user} idx={idx} />
            </li>
          ))}
      </ol>
    </div>
  );
};

export default ScoreList;
