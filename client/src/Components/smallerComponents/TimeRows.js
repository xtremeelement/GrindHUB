import React, { useEffect, useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";

function ApproveTime(req_id){
    axios.put(`/api/approve/${req_id}`).then(res => {

    })

};

function DenyTime(req_id){
    axios.put(`/api/deny/${req_id}`).then(res => {

    })

};



export default function TimeOffReq() {
  let [AllReqs, setAllReqs] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/timeOffReqs").then(res => {
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
          return (
            <TableRow key={request.user_id}>
              <TableCell align="left">{name}</TableCell>
              <TableCell align="right">{request.day_req}</TableCell>
              <TableCell align="right">{request.emp_reason}</TableCell>
              <TableCell align="right"><Button variant="outlined">Approve ✓</Button></TableCell>
              <TableCell align="right"><Button variant="outlined">Deny ❌</Button></TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}