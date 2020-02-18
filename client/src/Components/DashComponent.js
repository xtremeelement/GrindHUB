//importing all of the necessary elements from the material UI package
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} />
      <Paper elevation={3}/>
      <Paper elevation={3} />
      <Paper elevation={3} />
    </div>
  
  );
}

//we will probably need minimum two rows of 4 paper elements

//here are some possible material icons we could use

//