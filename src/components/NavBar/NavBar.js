import React from 'react';
import { AppBar, Toolbar, CssBaseline, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: '10%',
    display: 'flex',
  },
  logo: {
    flexGrow: '1',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '20px',
    marginLeft: '20px',
    '&:hover': {
      color: 'yellow',
      borderBottom: '1px solid white',
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar>
        <Typography variant='h4' className={classes.logo}>
          Would You Rather
        </Typography>
        <div className={classes.navlinks}>
          <Link to='/Home' className={classes.link}>
            Home
          </Link>
          <Link to='/new' className={classes.link}>
            New Question
          </Link>
          <Link to='/leaderboard' className={classes.link}>
            Leaderboard
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
