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
import PersonIcon from "@material-ui/icons/Person";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: "auto",
    marginTop: "5%",
    textAlign: "center",
    width: "60%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    fontFamily: "Roboto"
  },
  table: {
    width: "100%"
  }
}));

//this function builds out the employee profile

export default function EmpInfo({ empID }) {
  const classes = useStyles();
  const [AllInfo, setAllInfo] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/employeeInfo/${empID}`).then(res => {
      setAllInfo(res.data);

      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div>
        <h4>Loading Profile...</h4>
      </div>
    );
  } else {
    return (
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              style={{ backgroundColor: "#182231" }}
              aria-label="recipe"
              className={classes.avatar}
            >
              <PersonIcon />
            </Avatar>
          }
          title="Your Profile"
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              {AllInfo.map(data => {
                return (
                  <TableBody>
                    <TableRow align="center">
                      <TableCell align="right">First Name:</TableCell>
                      <TableCell align="left">{data.first_name}</TableCell>
                    </TableRow>
                    <TableRow align="center">
                      <TableCell align="right">Last Name:</TableCell>
                      <TableCell align="left">{data.last_name}</TableCell>
                    </TableRow>
                    <TableRow align="center">
                      <TableCell align="right">Pay Rate:</TableCell>
                      <TableCell align="left">${data.pay_rate}</TableCell>
                    </TableRow>
                    <TableRow align="center">
                      <TableCell align="right">Phone Number:</TableCell>
                      <TableCell align="left">{data.phone_number}</TableCell>
                    </TableRow>
                    <TableRow align="center">
                      <TableCell align="right">Email:</TableCell>
                      <TableCell align="left">{data.email}</TableCell>
                    </TableRow>
                  </TableBody>
                );
              })}
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
