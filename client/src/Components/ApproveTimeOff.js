import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import TimeOffReq from "./smallerComponents/TimeRows";
import PrevReqs from "./smallerComponents/PrevReqs";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  header: {
    textAlign: "center",
    fontFamily: "Roboto"
  }
});

export default function AdminTimeOff() {
  const classes = useStyles();

  return (
    <div style={{ width: "60%", margin: "10% auto" }}>
      <h1 className={classes.header} style={{ color: "white" }}>
        Employee Time-Off Requests
      </h1>
      <Button component={Link} to="/admin" style={{ color: "white" }}>
        -Back
      </Button>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <h4>Requested Time Off</h4>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell align="right">Date Requested</TableCell>
              <TableCell align="right">Reason</TableCell>
              <TableCell align="right">Approve ✓</TableCell>
              <TableCell align="right">Deny ❌</TableCell>
            </TableRow>
          </TableHead>
          <TimeOffReq />
        </Table>
        <br />
        <br />
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <h4>Previous Requests</h4>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell align="right">Date Requested</TableCell>
              <TableCell align="right">Reason</TableCell>
              <TableCell align="right">Approved?</TableCell>
              <TableCell align="right">Denied?</TableCell>
            </TableRow>
          </TableHead>
          <PrevReqs />
        </Table>
      </TableContainer>
    </div>
  );
}
