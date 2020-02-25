import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Sidebar from "./smallerComponents/Sidebar";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PrevRequests from "./smallerComponents/PrevRequests";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    padding: "10%",
    justifyContent: "center",
    borderRadius: "5px"
    
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  formDecor: {
    display: "block",
    width: "50%",
    margin: "25px auto"
  }
}));

export default function TimeOff(props) {
  const classes = useStyles();
  const [formData, setFormData] = useState([]);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-02-20T08:00:00")
  );
  const [reasonReq, setReason] = useState("");
  const [prevRequests, setPrevRequests] = useState([]);

  const handleDateChange = date => {
    setSelectedDate(date);
    setFormData({ ...formData, date });
  };

  const handleReasonChange = reason => {
    setReason(reason);
    setFormData({ ...formData, reason });
  };

  const submitRequest = () => {
    let data = [];
    let day_req = new Date(formData.date).toISOString().substring(0, 10);
    let emp_reason = formData.reason;
    data = [
      {
        day_req,
        emp_reason
      }
    ];
    axios.post(`/api/requestday/${props.match.params.id}`, data).then(res => {
      setReason("Request Submitted...");
      setFormData([]);
      setSelectedDate(new Date("2020-02-20T08:00:00"));
      axios.get(`/api/requesteddays/${props.match.params.id}`).then(res => {
        setPrevRequests(res.data);
      });
    });
  };

  useEffect(() => {
    axios.get(`/api/requesteddays/${props.match.params.id}`).then(res => {
      setPrevRequests(res.data);
    });
  }, []);

  return (
    <div>
      <Sidebar id={props.match.params.id} />
      <div className={classes.formDecor}>
        <Button component={Link} to="/dashboard" style={{ color: "white" }}>
          -Back
        </Button>
        <form className={classes.container} noValidate>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date requested"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
              <TextField
                id="standard-basic"
                label="Reason For Request"
                style={{ margin: "0 auto", marginTop: "18px", width: "120%" }}
                value={reasonReq}
                onChange={event => handleReasonChange(event.target.value)}
              />
            </Grid>
          </MuiPickersUtilsProvider>

          <Button
            variant="contained"
            style={{
              margin: "3% auto",
              display: "block",
              marginTop: "10%",
              color: "white",
              backgroundColor: "#182231"
            }}
            onClick={submitRequest}
          >
            Submit
          </Button>
        </form>
        <div style={{ marginTop: "15px" }}>
          <h4 style={{ textAlign: "left", color: "white" }}>
            Previous Requests
          </h4>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Date Requested</TableCell>
                  <TableCell align="right">Reason</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <PrevRequests requests={prevRequests} />
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}
