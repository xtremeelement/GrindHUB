import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import EmpInfo from "../components/smallerComponents/EmpInfo";



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    marginTop: "150px",
    width: "60%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "Roboto"
  }
}));

export default function UserProfile(props) {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      <Button component={Link} to="/" style={{ color: "white" }}>
        -Back
      </Button>
      <Grid container spacing={3}>
        <Grid item xs>         
           <h1 style={{textAlign: "center", fontFamily: "Roboto", color: "white"}}>Your Profile</h1>        
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
         <EmpInfo empID={props.match.params.empID}/>
        </Grid>
      </Grid>
    </div>
  );
}
