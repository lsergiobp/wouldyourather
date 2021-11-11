import React, { useEffect } from 'react';
import {
  Divider,
  TextField,
  Paper,
  Button,
  Autocomplete,
  Avatar,
} from '@mui/material';
import { initialData, getAllUsers } from '../../features/shared';
import { login } from '../../features/authUser';
import { getUsers, getQuestions } from '../../data/service';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [user, setUser] = React.useState(null);
  const history = useHistory();
  const dispatch = useDispatch();
  const userList = useSelector(getAllUsers);

  useEffect(() => {
    const getInitialData = async () => {
      let users = await getUsers();
      let questions = await getQuestions();
      let dataToDispatch = {
        users: users,
        questions: questions,
      };
      dispatch(initialData(dataToDispatch));
    };

    getInitialData();
  }, [dispatch]);

  const handleLogin = () => {
    dispatch(login(user));
    history.push('/home');
  };

  const handleUser = (user) => {
    setUser(user);
  };

  return (
    <div className='login-div'>
      <Paper elevation={3} className='login-paper'>
        <div className='login-header-div'>Welcome! Select a user to login.</div>
        <Divider orientation='horizontal' flexItem />
        <div className='login-fields'>
          <Autocomplete
            value={user}
            onChange={(e, user) => handleUser(user)}
            disablePortal
            id='login-user-combo'
            options={userList}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => (
              <div className='login-option' {...props}>
                <Avatar src={option.avatarURL} />
                <div className='login-option-name'>{option.name}</div>
              </div>
            )}
            renderInput={(params) => (
              <TextField {...params} label='Select User' />
            )}
          />
          <Button
            fullWidth
            variant='contained'
            disabled={user === null}
            onClick={handleLogin}
            className='login-button'
          >
            Login
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Login;
