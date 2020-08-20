import React from 'react';
import Portfolio1 from '../Images/portfolio1.gif';
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

export default function About() {
  const classes = useStyles()
  return (
    <div className="aboutPage">

      <div>
        <h3><strong className='brand'>Tech Shake</strong> is a web design and development agency based in Karachi, Pakistan. Working with both local and international projects, we have over 5 years of experience and 100+ finished projects under our belt.
          <br />
          <br />
        Our talented professionals specialize in Websites,Webshops,Mobile applications and Digital Marketing. Every solution we offer is always based on our customer’s needs. The end result is comparable to a tailor-made suit that fits you perfectly – it’s comfortable, exudes professionalism and catches the eye.
        </h3>
        <NavLink to='/contact' className='link'>
          <Button className={classes.root} variant="contained" color="primary">
            Contact Us
        </Button>
        </NavLink>
      </div>
      <div>
        <img src={Portfolio1} height='350px' width='400px' alt='' />
      </div>
    </div>
  )
}