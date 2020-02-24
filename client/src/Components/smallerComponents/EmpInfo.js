import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useEffect, useState } from "react";
import axios from "axios";

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

  //this function builds out the employee profile

export default function EmpInfo({empID}) {
    const classes = useStyles();
    let [AllInfo, setAllInfo] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/employeeInfo/${empID}`).then(res => {
            console.log(res.data[0])
            setAllInfo(res.data[0]);
            console.log(AllInfo)
            setLoading(false);
        });
    }, []);

    if(loading){
        return(
            <div>
                <h4>Loading Profile...</h4>
            </div>
        )
    }else{
        return (
            <Paper className={classes.paper}>
                <h1>First Name: {AllInfo.first_name}</h1>
                <h1>Last Name: {AllInfo.last_name}</h1>
                <h1>Pay: {AllInfo.pay_rate}</h1>
                <h1>Phone: {AllInfo.phone_number} </h1>
                <h1>Email: {AllInfo.email} </h1>
            </Paper>
        );
    }
    
}



