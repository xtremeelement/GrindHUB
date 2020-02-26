import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EmpList from "./smallerComponents/EmpList";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Adminside from "./smallerComponents/Adminside";
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import GroupIcon from '@material-ui/icons/Group';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  avatar: {
    backgroundColor: "#182231",
  }
});

//ability to track general employee info

export default function DenseTable() {
  const classes = useStyles();

  return (
    <div>
      <Adminside />
      <div style={{ width: "60%", margin: "10% auto" }}>
        <Button component={Link} to="/admin" style={{ color: "white" }}>
          -Back
        </Button>
        <TableContainer component={Paper}>
        <CardHeader style ={{marginBottom:"3%"}}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          <GroupIcon/>
          </Avatar>
        }

        title="Employee Shortlist"
        
      />
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell align="right">Pay Rate</TableCell>
                <TableCell align="right">Phone</TableCell>
                <TableCell align="right">E-Mail</TableCell>
              </TableRow>
            </TableHead>
            <EmpList />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
