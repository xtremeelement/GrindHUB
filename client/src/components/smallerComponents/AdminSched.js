import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { Schedule } from "@material-ui/icons";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    margin: "0 auto",
    marginBottom: "10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: "#172231"
  },
  table: {
    width: "100%"
  }
}));
//exporting the component where admins can view shifts of the day

export default function AdminSched({ id }) {
  const classes = useStyles();
  const [schedData, setSchedData] = useState([]);

  const convertTime = timeString => {
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;

    return timeString;
  };

  useEffect(() => {
    axios.get(`/api/admin/emptoday`).then(res => {
      setSchedData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <Card className={classes.root}>
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
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Employee</TableCell>
                <TableCell align="right">Shift Start</TableCell>
                <TableCell align="right">Shift End</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* mapping out the info for the table using entries from the database */}
              {schedData.map(schedule => {
                let name = schedule.first_name + " " + schedule.last_name;
                let start = convertTime(schedule.start);
                let end = convertTime(schedule.end);
                return (
                  <TableRow>
                    <TableCell>{name}</TableCell>
                    <TableCell align="right">{start}</TableCell>
                    <TableCell align="right">{end}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
      </CardContent>
    </Card>
  );
}
