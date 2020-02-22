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
          return (
            <TableRow key={schedule.schedule_id}>
              {/* <TableCell align="left">
                <Button
                  component={Link}
                  to={`/admin/createSchedule/${schedule.schedule_id}`}
                >
                  {name}
                </Button>
              </TableCell> */}
              <TableCell align="right">{schedule.day_work}</TableCell>
              <TableCell align="right">{schedule.start}</TableCell>
              <TableCell align="right">{schedule.end}</TableCell>
              <TableCell align="right">{schedule.tardy}</TableCell>
              <TableCell align="right">{schedule.present}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}
