import React from 'react';
import { Paper } from '@mui/material';
import { useSelector } from 'react-redux';
import { getAllUsers } from '../../features/shared';
import ScoreList from '../../components/Score/ScoreList';
import './Leaderboard.css';

const Leaderboard = () => {
  const userList = useSelector(getAllUsers);

  return (
    <div className='leaderboard-main-div'>
      <Paper elevation={3} className='leaderboard-paper'>
        <ScoreList list={userList} />
      </Paper>
    </div>
  );
};

export default Leaderboard;
