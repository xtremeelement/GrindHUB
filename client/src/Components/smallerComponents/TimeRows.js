import React, { useEffect, useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

export default function TimeOffReq() {
  let [AllReqs, setAllReqs] = useState([]);
  let [loading, setLoading] = useState(true);
  let [requestChanged, setRequestChanged] = useState(0);

  useEffect(() => {
    axios.get("/api/admin/daysOff").then(res => {
      setAllReqs(res.data);
      setLoading(false);
    });
  }, [requestChanged]);

  function ApproveTime(req_id) {
    console.log(req_id);
    axios.put(`/api/admin/approve/${req_id}`).then(res => {
      setRequestChanged(requestChanged + 1);
      window.location.reload();
    });
  }

  function DenyTime(req_id) {
    axios.put(`/api/admin/deny/${req_id}`).then(res => {
      setRequestChanged(requestChanged + 1);
      window.location.reload();
    });
  }

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
          if (request.approved == null) {
            return (
              <TableRow key={request.user_id}>
                <TableCell align="left">{name}</TableCell>
                <TableCell align="right">{date}</TableCell>
                <TableCell align="right">{request.emp_reason}</TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      ApproveTime(request.req_id);
                    }}
                  >
                    Approve ✓
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button
                    variant="outlined"
                    onClick={() => {
                      DenyTime(request.req_id);
                    }}
                  >
                    Deny ❌
                  </Button>
                </TableCell>
              </TableRow>
            );
          }
        })}
      </TableBody>
    );
  }
}
