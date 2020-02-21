import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    textAlign: "center"
  },
  buttonColor: {
    backgroundColor: "white",
    textcolor: "white"
  }
}));

export default function AppHeader() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h4" className={classes.title}>
            GrindHub 
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/admin"
            className={classes.buttonColor}
          >
            Admin
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
