import React, { useEffect, useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";

//the same function that creates an admin schedule, but instead for employees
export default function EmpList({ id }) {
  let [schedule, setSchedule] = useState([]);
  let [loading, setLoading] = useState(true);

  const convertTime = timeString => {
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;

    return timeString;
  };

  useEffect(() => {
    axios.get(`/api/employeeSchedule/${id}`).then(res => {
      console.log(res.data);
      setSchedule(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <TableBody>
        <TableRow>
          <TableCell align="left">Loading...</TableCell>
        </TableRow>
      </TableBody>
    );
  } else if (schedule.length < 1) {
    return (
      <TableBody>
        <TableRow>
          <TableCell align="left">No Published Schedule</TableCell>
        </TableRow>
      </TableBody>
    );
  } else {
    return (
      <TableBody>
        {schedule.map(day => {
          let dayWork = new Date(day.day_work).toDateString();
          let start = convertTime(day.start);
          let end = convertTime(day.end);
          return (
            <TableRow key={day.date}>
              <TableCell component="th" scope="row">
                {dayWork}
              </TableCell>
              <TableCell align="right">{start}</TableCell>
              <TableCell align="right">{end}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}
