import React, { useEffect } from 'react';
import { Grid, TextField, Paper, Button, Autocomplete } from '@mui/material';
import { initialData, getAllUsers } from '../features/shared';
import { getUsers } from '../data/api';
import { useDispatch, useSelector } from 'react-redux';
import './Login.css';

const Login = () => {
  const dispatch = useDispatch();
  const userList = useSelector(getAllUsers);

  useEffect(() => {
    const getInitialData = async () => {
      let users = await getUsers();
      dispatch(initialData(users));
    };

    getInitialData();
  }, [dispatch]);

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
            <Button fullWidth> Login </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
