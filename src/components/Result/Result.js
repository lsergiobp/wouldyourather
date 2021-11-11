import React from 'react';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { getAuthUser } from '../../features/authUser';
import './Result.css';
import ProgressBar from '../ProgressBar/ProgressBar';

const Result = (props) => {
  const { question } = props;
  const optOneVotes = question.optionOne.votes.length;
  const optTwoVotes = question.optionTwo.votes.length;
  const totalVotes = optOneVotes + optTwoVotes;
  const optOnePercentage = (optOneVotes / totalVotes) * 100;
  const optTwoPercentage = (optTwoVotes / totalVotes) * 100;
  const authUser = useSelector(getAuthUser);

  return (
    <div className='result-main-div'>
      <Box
        component='span'
        sx={{
          p: 2,
          border: question.optionOne.votes.includes(authUser.id)
            ? '1px solid rgb(140, 217, 175)'
            : '1px solid rgb(208,208,208)',
          marginBottom: '15%',
          backgroundColor: question.optionOne.votes.includes(authUser.id)
            ? 'rgb(140, 217, 175, 0.25)'
            : 'rgb(208,208,208, 0.25)',
        }}
      >
        <div className='result-main-vote'>
          <div>Would you rather {question.optionOne.text}?</div>
          <div>
            <ProgressBar value={optOnePercentage} />
          </div>
          <div className='result-votes-count'>
            {optOneVotes} out of {totalVotes} votes
          </div>
        </div>
      </Box>

      <Box
        component='span'
        sx={{
          p: 2,
          border: question.optionTwo.votes.includes(authUser.id)
            ? '1px solid rgb(140, 217, 175)'
            : '1px solid rgb(208,208,208)',
          marginBottom: '15%',
          backgroundColor: question.optionTwo.votes.includes(authUser.id)
            ? 'rgb(140, 217, 175, 0.25)'
            : 'rgb(208,208,208, 0.25)',
        }}
      >
        <div className='result-main-vote'>
          <div>Would you rather {question.optionTwo.text}?</div>
          <div className='result-votes-count'>
            <ProgressBar value={optTwoPercentage} />
            {optTwoVotes} out of {totalVotes} votes
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Result;
