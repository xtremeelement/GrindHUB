import React, { useEffect, useState } from "react";
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
import Adminside from "./smallerComponents/Adminside";
import axios from "axios";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { Schedule, DoneAll } from "@material-ui/icons";
//test comment
const useStyles = makeStyles({
  table: {
    minWidth: "30%"
  },
  header: {
    textAlign: "center",
    fontFamily: "Roboto"
  }
});

export default function AdminTimeOff() {
  const classes = useStyles();
  let [reqData, setreqData] = useState([]);
  let [loading, setLoading] = useState(true);

  const reRender = () => {
    axios.get("/api/admin/daysOff").then(res => {
      setreqData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    axios.get("/api/admin/daysOff").then(res => {
      setreqData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <Adminside />
      <div style={{ width: "60%", margin: "10% auto" }}>
    
        <Button component={Link} to="/admin" style={{ color: "white" }}>
          -Back
        </Button>
        <TableContainer component={Paper}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe" style={{backgroundColor: "#172231"}}>
            <Schedule />
          </Avatar>
        }
        title="Pending Time Off Requests"
      />
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell align="right">Date Requested</TableCell>
                <TableCell align="right">Reason</TableCell>
                <TableCell align="right">
                  Approve{" "}
                  <span role="img" aria-label="check">
                    ✓
                  </span>
                </TableCell>
                <TableCell align="right">
                  Deny{" "}
                  <span role="img" aria-label="x">
                    ❌
                  </span>
                </TableCell>
              </TableRow>
            </TableHead>
            <TimeOffReq rerender={reRender} AllReqs={reqData} />
          </Table>
          <br />
          <br />
          <CardHeader
        avatar={
          <Avatar aria-label="request" style={{backgroundColor: "#172231"}}>
            <DoneAll />
          </Avatar>
        }
        title="Previous Time Off Requests"
      />
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead >
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell align="right">Date Requested</TableCell>
                <TableCell align="right">Reason</TableCell>
                <TableCell align="right">Approved?</TableCell>
                <TableCell align="right">Denied?</TableCell>
              </TableRow>
            </TableHead>
            <PrevReqs AllReqs={reqData} loading={loading} />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
