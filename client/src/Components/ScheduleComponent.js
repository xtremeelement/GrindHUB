import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  tableWidth: {
    width: "60%",
    margin: "10% auto",
    marginBottom: "10px"
  },
  buttonMargin: {
    marginBottom: "25px"
  }
});

function createData(day, date, start, end) {
  return { day, date, start, end };
}

const rows = [
  createData("Monday", "3/12/2020", "8:00AM", "3:30PM"),
  createData("Tuesday", "3/13/2020", "9:00AM", "5:30PM"),
  createData("Wednesday", "3/14/2020", "10:00AM", "5:30PM"),
  createData("Thursday", "3/15/2020", "11:00AM", "7:30PM"),
  createData("Friday", "3/16/2020", "Off", "Off"),
  createData("Saturday", "3/17/2020", "Off", "Off"),
  createData("Sunday", "3/18/2020", "3:00PM", "10:00PM")
];

export default function Schedule() {
  const classes = useStyles();

  return (
    <div className={classes.tableWidth}>
      <Button component={Link} to="/" style={{ color: "white" }}>
        -Back
      </Button>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Day</TableCell>
              <TableCell align="right">Start Time</TableCell>
              <TableCell align="right">End Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.date}>
                <TableCell component="th" scope="row">
                  {row.day}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.start}</TableCell>
                <TableCell align="right">{row.end}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
