import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      paddingLeft: '70px',
    },
  },

  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>

          <Typography className={classes.title} variant='h6' noWrap>
            <h3 className='menuTitle'>Tech Shake</h3>
          </Typography>
          <div className="menu">
            <NavLink className='menuItem' to='/'>Home</NavLink>
            <NavLink className='menuItem' to='/services'>Services</NavLink>
            <NavLink className='menuItem' to='/contact'>Contact us</NavLink>
            <NavLink className='menuItem' to='/about'>About us</NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
