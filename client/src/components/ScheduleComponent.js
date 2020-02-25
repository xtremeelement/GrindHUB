import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Sidebar from "./smallerComponents/Sidebar";
import EmpSchedule from "./smallerComponents/EmpSchedule";

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

export default function Schedule(props) {
  const classes = useStyles();

  return (
    <div>
      <Sidebar id={props.match.params.id} />
      <div className={classes.tableWidth}>
        <Button component={Link} to="/dashboard" style={{ color: "white" }}>
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
                <TableCell align="left">Day</TableCell>
                <TableCell align="right">Start Time</TableCell>
                <TableCell align="right">End Time</TableCell>
              </TableRow>
            </TableHead>
            <EmpSchedule id={props.match.params.id} />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
