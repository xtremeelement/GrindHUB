//importing all of the necessary elements from the material UI package
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import Schedule from "./ScheduleComponent";
import Paper from "@material-ui/core/Paper";
import {
  AccessTime,
  Event,
  Announcement,
  Email,
  FolderShared,
  ContactPhone,
  LocalAtm,
  Star
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import "./styles.css";
import { AutoComplete } from "material-ui";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(18),
      height: theme.spacing(18),
      margin: "auto",
      margin: "35px"
    }
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

export default function AdminDash() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button component={Link} to="/" style={{ color: "white" }}>
        -Back to Main
      </Button>
      <div className={classes.root}>
        <Paper elevation={3}>
          <IconButton
            component={Link}
            to="/admin/schedule"
            label="Create Schedule"
          >
            <AccessTime style={{ fill: "black" }} className={classes.girthy} />
          </IconButton>

          <h5 className={classes.papery}>Create Schedule</h5>
        </Paper>
        <Paper elevation={3}>
          <IconButton component={Link} to="/admin/timeoff" label="Time Off">
            <Event style={{ fill: "#b8112c" }} className={classes.girthy} />
          </IconButton>
          <h5 className={classes.papery}>Time Off Requests</h5>
        </Paper>
        <Paper elevation={3}>
          <IconButton
            component={Link}
            to="/admin/announcements"
            label="Announcements"
          >
            <Announcement
              style={{ fill: "#f0931a" }}
              className={classes.girthy}
            />
          </IconButton>
          <h5 className={classes.papery}>Create Annoucement</h5>
        </Paper>
        <Paper>
          <IconButton
            component={Link}
            to="/admin/newemployee"
            label="new employee"
          >
            <ContactPhone
              style={{ fill: "#4311b8" }}
              className={classes.girthy}
            />
          </IconButton>
          <h5 className={classes.papery}>Create Employee</h5>
        </Paper>
      </div>
    </div>
  );
}
