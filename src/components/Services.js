import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import websites from '../Images/web.jpeg';
import mobile from '../Images/mobile.jpg';
import webshops from '../Images/webshops.webp';
import digital from '../Images/digital.jpeg';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'centre',
    textAlign: 'centre',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className='services'>Our Services</h1>
      <NavLink to='/contactProject'className='sName'>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={3}>
              <h3>Website Development</h3>
              <img src={websites} alt='' height='200px' width='200px' />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper} elevation={3}>
              <h3>Mobile Application Development</h3>
              <img src={mobile} alt='' height='200px' width='200px' />
            </Paper>

          </Grid><Grid item xs={4}>
            <Paper className={classes.paper} elevation={3}>
              <h3>webshops</h3>
              <img src={webshops} alt='' height='200px' width='200px' />
            </Paper>
          </Grid>

          <Grid item xs={4}>
            <Paper className={classes.paper} elevations={3}>
              <h3>Digital Marketing</h3>
              <img src={digital} alt='' height='200px' width='200px' />
            </Paper>
          </Grid>
        </Grid>
      </NavLink>
    </div>
 );
}
