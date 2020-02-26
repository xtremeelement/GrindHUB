import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import axios from "axios";

import {
  AccessTime,
  Event,
  Announcement,
  Email,
  FolderShared,
  ContactPhone,
  Star,
  Home,
  Settings
} from "@material-ui/icons";
import { Link } from "react-router-dom";

// bg color #182231  side color #3F51B5

const drawerWidth = "15%";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#182231"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#182231"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  toolbar: theme.mixins.toolbar,
  buttonColor: {
    backgroundColor: "white",
    textcolor: "white"
  },
  spaceItems: {
    justifyContent: "space-between"
  },
  listmargin: {
    marginTop: "30%"
  },
  iconColor: {
    fill: "white"
  },
  menuButton: {
    fill: "white",
    fontSize: "40px"
  }
}));

//this is the sidebar component for the employee view

export default function Sidebar(props) {
  const classes = useStyles();
  let id = props.id;
  let [userName, setuserName] = useState("");

  const handleLogout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    axios.get(`/api/username/${id}`).then(res => {
      setuserName(res.data[0].first_name);
      console.log(res.data[0].first_name);
    });
  }, []);

  const linkHandler = text => {
    if (text === "Home") {
      return `/dashboard/${id}`;
    } else if (text === "My Schedule") {
      return `/schedule/${id}`;
    } else if (text === "My Documents") {
      return `/documents/${id}`;
    } else if (text === "My Info") {
      return `/contact/${id}`;
    } else if (text === "Benefits") {
      return `/documents/${id}`;
    } else if (text === "Request Time") {
      return `/timeoff/${id}`;
    } else if (text === "Announcements") {
      return `/announcements/${id}`;
    } else {
      return `/inbox/${id}`;
    }
  };
  const iconHandler = text => {
    if (text === "Home") {
      return (
        <IconButton component={Link} to={`/dashboard/${id}`}>
          <Home className={classes.iconColor} />
        </IconButton>
      );
    } else if (text === "My Schedule") {
      return (
        <IconButton component={Link} to={`/schedule/${id}`}>
          <AccessTime className={classes.iconColor} />
        </IconButton>
      );
    } else if (text === "My Documents") {
      return (
        <IconButton component={Link} to={`/documents/${id}`}>
          <FolderShared className={classes.iconColor} />
        </IconButton>
      );
    } else if (text === "My Info") {
      return (
        <IconButton component={Link} to={`/contact/${id}`}>
          <ContactPhone className={classes.iconColor} />
        </IconButton>
      );
    } else if (text === "Benefits") {
      return (
        <IconButton component={Link} to={`/documents/${id}`}>
          <Star className={classes.iconColor} />
        </IconButton>
      );
    } else if (text === "Request Time") {
      return (
        <IconButton component={Link} to={`/timeoff/${id}`}>
          <Event className={classes.iconColor} />
        </IconButton>
      );
    } else if (text === "Announcements") {
      return (
        <IconButton component={Link} to={`/announcements/${id}`}>
          <Announcement className={classes.iconColor} />
        </IconButton>
      );
    } else {
      return (
        <IconButton component={Link} to="/">
          <Email className={classes.iconColor} />
        </IconButton>
      );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar className={classes.spaceItems}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="primary"
            aria-label="menu"
            component={Link}
            to={`/dashboard/${id}`}
          >
            <Settings className={classes.menuButton} />
          </IconButton>

          <Typography variant="h4" className={classes.title}>
            GrindHub
          </Typography>

          <Button
            variant="contained"
            component={Link}
            to="/"
            className={classes.buttonColor}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <h4 style={{ color: "white" }}>Welcome {userName}!</h4>
        <Divider />

        <List className={classes.listmargin}>
          {[
            "Home",
            "My Schedule",
            "Request Time",
            "My Info",
            "My Documents",
            "Announcements",
            // "Benefits",
            "Inbox"
          ].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{iconHandler(text)}</ListItemIcon>
              <Link
                style={{ textDecoration: "none" }}
                to={() => linkHandler(text)}
              >
                <ListItemText style={{ color: "white" }} primary={text} />
              </Link>
            </ListItem>
          ))}
        </List>

        <Divider />
      </Drawer>
    </div>
  );
}
