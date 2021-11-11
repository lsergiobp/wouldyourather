import React from 'react';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  IconButton,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthUser, logout } from '../../features/authUser';

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
  selected: {
    fontWeigth: 'bold',
    color: 'yellow',
    borderBottom: '1px solid',
  },
  buttonsDiv: {
    display: 'flex',
    width: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100px',
  },
}));

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const authUser = useSelector(getAuthUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    dispatch(logout());
    history.push('/');
  };

  return (
    <AppBar position='static'>
      <CssBaseline />
      <Toolbar>
        <Typography variant='h4' className={classes.logo}>
          Would You Rather
        </Typography>
        {authUser && (
          <div className={classes.buttonsDiv}>
            <div className={classes.navlinks}>
              <NavLink
                to='/Home'
                className={classes.link}
                activeClassName={classes.selected}
              >
                Home
              </NavLink>
              <NavLink
                to='/new'
                className={classes.link}
                activeClassName={classes.selected}
              >
                New Question
              </NavLink>
              <NavLink
                to='/leaderboard'
                className={classes.link}
                activeClassName={classes.selected}
              >
                Leaderboard
              </NavLink>
            </div>
            <div>
              <IconButton onClick={handleClick}>
                <Avatar src={authUser.avatarURL} />
              </IconButton>
              <Menu
                id='basic-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <div className={classes.name}>{authUser.name}</div>
                <Divider orientation='horizontal' flexItem />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
