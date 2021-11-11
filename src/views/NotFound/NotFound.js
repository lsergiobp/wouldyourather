import React from 'react';
import { Paper, Divider, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthUser } from '../../features/authUser';
import './NotFound.css';

const NotFound = () => {
  const authUser = useSelector(getAuthUser);
  const history = useHistory();

  const goBack = () => {
    if (!authUser) {
      history.push('/');
    } else {
      history.push('/home');
    }
  };

  return (
    <div className='notfound-main-div'>
      <Paper elevation={3} className='notfound-paper'>
        <div className='not-found'>404!</div>
        <Divider orientation='horizontal' flexItem />
        <div className='notfound-broke'>You broke it!!</div>
        <Button
          className='question-button'
          fullWidth
          variant='contained'
          onClick={goBack}
        >
          Go to {authUser ? 'Home' : 'Login'}
        </Button>
      </Paper>
    </div>
  );
};

export default NotFound;
