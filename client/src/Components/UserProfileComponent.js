import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    marginTop: "150px",
    width: "960px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function UserProfile() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button component={Link} to="/" style={{ color: "white" }}>
        -Back
      </Button>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <img src="https://pbs.twimg.com/profile_images/601916716571058176/LEHlLQ_o_400x400.jpg" />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <h1>First Name: {}</h1>
            <h1>Last Name: {}</h1>
            <h2>Pay: {}</h2>
            <h2>Phone: {} </h2>
            <h2>Email: {} </h2>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
