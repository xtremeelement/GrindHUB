import React, { useEffect, useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default function EmpList() {
  let [AllEmps, setAllEmps] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("/api/findAllEmps").then(res => {
      setAllEmps(res.data);
      setLoading(false);
    });
  }, []);

  //this table shows a list of employees and their relevant information

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
        {AllEmps.map(employee => {
          let name = employee.first_name + " " + employee.last_name;
          return (
            <TableRow key={employee.userID}>
              <TableCell align="left">
                <Button
                  component={Link}
                  to={`/admin/createSchedule/${employee.userID}`}
                >
                  {name}
                </Button>
              </TableCell>
              <TableCell align="right">{employee.pay_rate}</TableCell>
              <TableCell align="right">{employee.phone_number}</TableCell>
              <TableCell align="right">{employee.email}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    );
  }
}
