import React, { useEffect } from 'react';
import { Grid, TextField, Paper, Button, Autocomplete } from '@mui/material';
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
      <Paper className='login-paper'>
        <Grid
          container
          spacing={5}
          direction={'column'}
          justify={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <Autocomplete
              value={user}
              onChange={(e, user) => handleUser(user)}
              disablePortal
              id='login-user-combo'
              options={userList}
              getOptionLabel={(option) => option.name}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label='Select User' />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant='contained'
              disabled={user === null}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
