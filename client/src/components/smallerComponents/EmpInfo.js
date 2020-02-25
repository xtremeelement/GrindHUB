import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { Schedule } from "@material-ui/icons";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


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
    const [AllInfo, setAllInfo] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/api/employeeInfo/${empID}`).then(res => {
           setAllInfo(res.data[0]);
            
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
            <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <Schedule />
                </Avatar>
              }
              title="Your Profile"
            />
            <CardContent>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                  </TableHead>
                  <TableBody>
                    {AllInfo.map(data => {
                      return (
                          <div>
                        <TableRow align="right">Name: {data.first_name}</TableRow>
                        <TableRow align="right">Last Name: {data.last_name} </TableRow>
                        <TableRow align="right">Pay: {data.pay_rate} </TableRow>
                        <TableRow align="right">Phone: {data.phone_number} </TableRow>
                        <TableRow align="right">Email: {data.email} </TableRow>
                        </div>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
              <br />
              <Typography variant="body2" color="textSecondary" component="p">
               To update any information, please contact your leadship team.
              </Typography>
            </CardContent>
          </Card> 
            
    
        );
    }
    
}



