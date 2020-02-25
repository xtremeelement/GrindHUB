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
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { Schedule } from "@material-ui/icons";
//test comment
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: "0 auto",
    marginBottom: "10px"
  },
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
  },
  avatar: {
    backgroundColor: "#172231"
  }
});

export default function ScheduleComp(props) {
  const classes = useStyles();

  return (
    <div>
      <Sidebar id={props.match.params.id} />
      <div className={classes.tableWidth}>
        <Button component={Link} to="/dashboard" style={{ color: "white" }}>
          -Back
        </Button>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <Schedule />
              </Avatar>
            }
            title="Upcoming Shifts"
          />
          <CardContent>
            <TableContainer component={Paper}>
              <Table
                className={classes.root}
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
