import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import portfolio3 from '../Images/portfolio3.gif';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  Message: {
    width: "52ch"
  }
}));

 export default function ContactProject() {
  const classes = useStyles();
  return (
    <div className='contactPage'>
      <img src={portfolio3} height="350px" width="400px" alt=''/>
      <div>
        <h1><b>Got a fantastic project for us?</b></h1>
        <p>Fill in the form and let’s do it! FREE consultation and an initial offer! We always reply as quickly as possible (it’s a promise)</p>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField type='text' id="outlined-basic" label="Name and Last Name" variant="outlined" required/>
          <TextField type='text' id="outlined-basic" label="E-mail address" variant="outlined" required/>
          <TextField type='number' id="outlined-basic" label="Phone Number" variant="outlined" required/>
          <TextField type='text' id="outlined-basic" label="Company Address" variant="outlined" required/>
          <TextField type='comment' id="outlined-basic" className={classes.Message} label="Your Message" variant="outlined" required/>
          <br />
          <Button variant="contained" color="primary" type='submit'>
       
            Send Message
            
        </Button>
        </form>
      </div>
    </div>
  );
}