import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
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

export default function SchedSnap({ id }) {
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
    axios.get(`/api/schedsnap/${id}`).then(res => {
      setSchedData(res.data);
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
                <TableCell>Day</TableCell>
                <TableCell align="right">Start Time</TableCell>
                <TableCell align="right">End Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {schedData.map(schedule => {
                let date = new Date(schedule.day_work).toDateString();
                let start = convertTime(schedule.start);
                let end = convertTime(schedule.end);
                return (
                  <TableRow>
                    <TableCell>{date}</TableCell>
                    <TableCell align="right">{start}</TableCell>
                    <TableCell align="right">{start}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <br />
        <Typography variant="body2" color="textSecondary" component="p">
          If there is a discrepancy with your schedule, please speak with your
          leadership team.
        </Typography>
      </CardContent>
    </Card>
  );
}
