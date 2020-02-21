//importing all of the necessary elements from the material UI package
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  AccessTime,
  Event,
  Announcement,
  ContactPhone
} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import "./styles.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
   
    "& > *": {
      width: theme.spacing(18),
      height: theme.spacing(18),
      margin: "auto",
      backgroundColor: "#b3b3cc"
    }
  },

  girthy: {
    width: "2em",
    height: "2em",
    color: "#9F7CE1"
  },

  papery: {
    marginTop: "10px",
    fontSize: "20px",
    fontFamily: "Roboto"
  },
  container: {
    width: "60%",
    height: "auto",
    margin: "0 auto",
    marginTop: "150px",
    backgroundColor: "#182231"
  }
}));

export default function AdminDash() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Button component={Link} to="/" style={{ color: "white", fontFamily: "Roboto" }}>
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

          <h5 className={classes.papery}>Manage Employees</h5>
        </Paper>
        <Paper elevation={3}>
          <IconButton component={Link} to="/admin/timeoff" label="Time Off">
            <Event style={{ fill: "black" }} className={classes.girthy} />
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
              style={{ fill: "black" }}
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
              style={{ fill: "black" }}
              className={classes.girthy}
            />
          </IconButton>
          <h5 className={classes.papery}>Create Employee</h5>
        </Paper>
      </div>
    </div>
  );
}
