import React from 'react';
import Portfolio from '../Images/portfolio.gif';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      textdecoration: 'none'
    },
  },
}))

export default function Home() {
  const classes = useStyles()
  return (
    <div className="homePage">

      <div>
        <h2>Grow your business with <strong className="brand" > <br />Tech Shake</strong>.</h2>
        <p>We are the team of Talented Developers making websites and<br /> mobile applications.</p>
        <NavLink to='/services' className='link'>
        <Button className={classes.root} variant="contained" color="primary" >
            Get Started
            
        </Button>
        </NavLink>
      </div>
      <div>
        <img src={Portfolio} height='350px' width='400px' alt=''/>
      </div>
    </div>
  )
}