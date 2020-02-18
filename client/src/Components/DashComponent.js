//importing all of the necessary elements from the material UI package
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {AccessTime, Event, Announcement, Email, FolderShared, ContactPhone, LocalAtm, Star} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
  
    },
  },
 
}));

export default function DashComponent() {
  const classes = useStyles();

  return (
    <div>
    <div className={classes.root}>
      <Paper elevation={3} >
      <IconButton><AccessTime/></IconButton>
      <h3>Schedule</h3>
      </Paper>
      <Paper elevation={3}>
      <IconButton><FolderShared/></IconButton>
      <h3>Documents</h3>
      </Paper>
      <Paper elevation={3}>
      <IconButton><LocalAtm/></IconButton>
      <h3>Pay</h3>
      </Paper>
      <Paper elevation={3}>
      <IconButton><ContactPhone/></IconButton>
      <h3>Contact Info</h3>
      </Paper>
      
    </div>
    <div className= {classes.root}>
    <Paper elevation={3} >
      <IconButton><Star/></IconButton>
      <h3>Benefits</h3>
      </Paper>
    <Paper elevation={3} >
      <IconButton><Event/></IconButton>
      <h3>Time Off</h3>
      </Paper>
    <Paper elevation={3}>
    <IconButton><Email/></IconButton>
      <h3>Inbox</h3>
      </Paper>
    <Paper elevation={3} >
    <IconButton><Announcement/></IconButton>
      <h4>Announcements</h4>
      </Paper>
    </div>
    </div>
  
  );
}

//we will probably need minimum two rows of 4 paper elements

//here are some possible material IconButtons we could use

//