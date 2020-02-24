//importing all of the necessary elements from the material UI package
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Adminside from "./smallerComponents/Adminside";
import "./styles.css";
import SchedSnap from "./smallerComponents/SchedSnap";
import RequestsSnap from "./smallerComponents/RequestsSnap";
import Grid from "@material-ui/core/Grid";
import DashNewsCard from "./smallerComponents/DashNewsCard";
import NewAdminDashTable from "./smallerComponents/NewAdminDashTable";

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

  container: {
    width: "70%",
    height: "auto",
    margin: "0 auto",
    marginTop: "3%",
    marginLeft: "20%"
  }
}));

export default function DashComponent(props) {
  const classes = useStyles();

  return (
    <div>
      <Adminside id={props.match.params.id} />

      <Grid container className={classes.container} spacing={10} direction="row">
     
        <Grid item xs={8}>
          <SchedSnap id={props.match.params.id} />
        </Grid>
        {/* <Grid item md={6}>
          <DashNewsCard />
        </Grid> */}
         <Grid item md={4}>
          <DashNewsCard/>
          
        </Grid>
        
        {/* <Grid item md={12}>
          <RequestsSnap id={props.match.params.id} />
        </Grid> */}
      </Grid>
      <Grid container style={{marginTop:"-10%"}} className={classes.container} spacing={10} direction="row">
     
        <Grid item xs={8}>
          <RequestsSnap id={props.match.params.id} />
        </Grid>
        
        </Grid>
        {/* <Grid item md={6}>
          <DashNewsCard />
        </Grid> */}
     
    </div>
  );
}