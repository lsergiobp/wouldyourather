import React from 'react';
import { Grid, TextField, Paper, Button, Autocomplete } from '@mui/material';
import './Login.css';

const Login = () => {
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
              //options={}
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
