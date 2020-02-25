import React, { useEffect, useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";

//this shows previously requested days off

export default function TimeOffReq() {
  let [AllReqs, setAllReqs] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/admin/daysOff").then(res => {
      setAllReqs(res.data);
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
  } else {
    return (
      <TableBody>
        {AllReqs.map(request => {
          let name = request.first_name + " " + request.last_name;
          let date = new Date(request.day_req);
          date = date.toDateString();
          if (request.approved === 1) {
            return (
              <TableRow key={request.user_id}>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="right">{date}</TableCell>
                <TableCell align="right">{request.emp_reason}</TableCell>
                <TableCell align="right">Approved</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            );
          } else if (request.approved === 0) {
            return (
              <TableRow key={request.user_id}>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="right">{date}</TableCell>
                <TableCell align="right">{request.emp_reason}</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Denied</TableCell>
              </TableRow>
            );
          } else {
            return (
              <TableRow key={request.user_id}>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="right">{date}</TableCell>
                <TableCell align="right">{request.emp_reason}</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Pending Review</TableCell>
              </TableRow>
            );
          }
        })}
      </TableBody>
    );
  }
}
