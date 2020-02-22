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
import Sidebar from "./smallerComponents/Sidebar";
import "./styles.css";

import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: theme.spacing(18),
      height: theme.spacing(18),
      margin: "35px auto",
      backgroundColor: "white"
    }
  },

  girthy: {
    width: "2em",
    height: "2em",
    color: "#9F7CE1"
  },

  papery: {
    marginTop: "10px",
    fontSize: "16px",
    fontFamily: "Roboto"
  },
  container: {
    width: "60%",
    height: "auto",
    margin: "0 auto",
    marginTop: "150px"
  }
}));

export default function DashComponent() {
  const classes = useStyles();

  return (
    <div>
      <Sidebar />
      <div className={classes.container}>
        <div className={classes.root}>
          <Paper elevation={10}>
            <IconButton component={Link} to="/schedule" label="Schedule">
              <AccessTime
                style={{ fill: "black" }}
                className={classes.girthy}
              />
            </IconButton>

            <h3 className={classes.papery}>Schedule</h3>
          </Paper>
          <Paper elevation={3}>
            <IconButton component={Link} to="/documents" label="documents">
              <FolderShared
                style={{ fill: "black" }}
                className={classes.girthy}
              />
            </IconButton>
            <h3 className={classes.papery}>Documents</h3>
          </Paper>
          <Paper elevation={3}>
            <IconButton component={Link} to="/pay" label="pay">
              <LocalAtm style={{ fill: "black" }} className={classes.girthy} />
            </IconButton>
            <h3 className={classes.papery}>Pay</h3>
          </Paper>
          <Paper elevation={3}>
            <IconButton component={Link} to="/contact/4" label="contact">
              <ContactPhone
                style={{ fill: "black" }}
                className={classes.girthy}
              />
            </IconButton>
            <h3 className={classes.papery}>Contact Info</h3>
          </Paper>
        </div>
        <div className={classes.root}>
          <Paper elevation={3}>
            <IconButton component={Link} to="/benefits" label="contact">
              <Star style={{ fill: "black" }} className={classes.girthy} />
            </IconButton>
            <h3 className={classes.papery}>Benefits</h3>
          </Paper>
          <Paper elevation={3}>
            <IconButton component={Link} to="/timeoff" label="Time Off">
              <Event style={{ fill: "black" }} className={classes.girthy} />
            </IconButton>
            <h3 className={classes.papery}>Time Off</h3>
          </Paper>
          <Paper elevation={3}>
            <IconButton component={Link} to="/inbox" label="Inbox">
              <Email style={{ fill: "black" }} className={classes.girthy} />
            </IconButton>
            <h3 className={classes.papery}>Inbox</h3>
          </Paper>
          <Paper elevation={3}>
            <IconButton
              component={Link}
              to="/announcements"
              label="Announcements"
            >
              <Announcement
                style={{ fill: "black" }}
                className={classes.girthy}
              />
            </IconButton>
            <h3 className={classes.papery}>Announcements</h3>
          </Paper>
        </div>
      </div>
    </div>
  );
}
