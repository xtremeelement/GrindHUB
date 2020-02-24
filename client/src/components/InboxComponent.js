import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Sidebar from "./smallerComponents/Sidebar";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,

    backgroundColor: "#24344D",
    padding: theme.spacing(3)
  },
  typography: {
    color: "#CFD9E5"
  }
}));

export default function InboxComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography className={classes.typography} paragraph>
          Esteemed Employeee,
          <br></br>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
          elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet.
          Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis
          convallis tellus id interdum velit laoreet id donec ultrices. Odio
          morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis
          viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet
          proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt.
          Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu
          dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi
          tincidunt. Lorem donec massa sapien faucibus et molestie ac.
          <br></br>
          -Boss
        </Typography>
      </main>
    </div>
  );
}
