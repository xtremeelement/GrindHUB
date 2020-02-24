//importing all of the necessary elements from the material UI package
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Sidebar from "./smallerComponents/Sidebar";
import "./styles.css";
import SchedSnap from "./smallerComponents/SchedSnap";
import RequestsSnap from "./smallerComponents/RequestsSnap";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: theme.spacing(18),
      height: theme.spacing(18),
      margin: "35px auto",
      backgroundColor: "white"
    },
    width: "90%"
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
    width: "70%",
    height: "auto",
    margin: "0 auto",
    marginTop: "125px",
    marginLeft: "20%"
  }
}));

export default function DashComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <Sidebar id={props.match.params.id} />

      <Grid container className={classes.container} spacing={2} direction="row">
        <Grid item md={6}>
          <SchedSnap id={props.match.params.id} />
        </Grid>
        <Grid item md={6}>
          <RequestsSnap id={props.match.params.id} />
        </Grid>
        <Grid item md={12}>
          <RequestsSnap id={props.match.params.id} />
        </Grid>
      </Grid>
    </div>
  );
}
