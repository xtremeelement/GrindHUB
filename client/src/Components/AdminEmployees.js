import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";
import axios from "axios";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function AllEmployees() {
  const classes = useStyles();
  let [AllEmps, setAllEmps] = useState([]);

  useEffect(() => {
    axios
      .get("/api/findAllEmps")
      .then(res => {
        console.log(res.data);
        setAllEmps(res.data);
        console.log(AllEmps);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <ListItem button>
        <ListItemText primary="Chelsea Otakan" />
      </ListItem>
    </List>
  );
}
