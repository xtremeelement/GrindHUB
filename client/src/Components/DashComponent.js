//importing all of the necessary elements from the material UI package
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {AccessTime, Event, Announcement, Email, FolderShared, ContactPhone, LocalAtm, Star} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import './styles.css';
import { AutoComplete } from 'material-ui';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(2),
      width: theme.spacing(18),
      height: theme.spacing(18),
      margin: "auto",
      margin: "35px",
     
    },
  },

  girthy: {
    width: "3em",
    height: "3em",
    color: "#9F7CE1"
  },

  papery: {
    marginTop: "-15px",
    fontSize: "20px"
  },
  container: {
    width: "960px",
    height: "auto",
    margin: "auto",
    marginTop: "150px",
    backgroundColor: "#24344D",
    paddingLeft: "100px",
    borderRadius: "25px"
    
  }
 
}));

export default function DashComponent() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
    <div className={classes.root}>
      <Paper elevation={3} >
      <IconButton><AccessTime style={{fill: "black"}} className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Schedule</h3>
      </Paper>
      <Paper elevation={3}>
      <IconButton><FolderShared style={{fill: "#f1d592"}} className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Documents</h3>
      </Paper>
      <Paper elevation={3}>
      <IconButton><LocalAtm style={{fill: "#099c52"}} className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Pay</h3>
      </Paper>
      <Paper elevation={3}>
      <IconButton><ContactPhone style={{fill: "#4311b8"}} className={classes.girthy}/></IconButton>
      <h3 className={classes.papery} >Contact Info</h3>
      </Paper>
      
    </div>
    <div className= {classes.root}>
    <Paper elevation={3} >
      <IconButton><Star style={{fill: "#fad934"}} className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Benefits</h3>
      </Paper>
    <Paper elevation={3} >
      <IconButton><Event style={{fill: "#b8112c"}} className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Time Off</h3>
      </Paper>
    <Paper elevation={3}>
    <IconButton><Email style={{fill: "#b3dee3"}} className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Inbox</h3>
      </Paper>
    <Paper elevation={3} >
    <IconButton><Announcement style={{fill: "#f0931a"}} className={classes.girthy}/></IconButton>
      <h3 className={classes.papery}>Announcements</h3>
      </Paper>
    </div>
    </div>
  
  );
}

