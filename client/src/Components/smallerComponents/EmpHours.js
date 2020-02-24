import React, { useEffect, useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";

export default function EmpHours({ userid }) {
  let [AllHours, setAllHours] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/admin/emphours/${userid}`).then(res => {
      setAllHours(res.data);
      setLoading(false);
    });
  }, []);

  const convertTime = timeString => {
    var H = +timeString.substr(0, 2);
    var h = H % 12 || 12;
    var ampm = H < 12 || H === 24 ? "AM" : "PM";
    timeString = h + timeString.substr(2, 3) + ampm;

    //this function generates a table that populates with the employee's shifts

    return timeString;
  };

  if (loading) {
    return (
      <TableBody>
        <TableRow>
          <TableCell align="left">Loading</TableCell>
        </TableRow>
      </TableBody>
    );
  } else if (AllHours.length < 1) {
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
        {AllHours.map(schedule => {
          let date = new Date(schedule.day_work).toDateString();
          let start = convertTime(schedule.start);
          let end = convertTime(schedule.end);
          return (
            <TableRow key={schedule.schedule_id}>
              <TableCell align="right">{date}</TableCell>
              <TableCell align="right">{start}</TableCell>
              <TableCell align="right">{end}</TableCell>
              <TableCell align="right">{schedule.tardy}</TableCell>
              <TableCell align="right">{schedule.present}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}
