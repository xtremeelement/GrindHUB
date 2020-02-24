import "date-fns";
import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import EmpHours from "./smallerComponents/EmpHours";
import { makeStyles } from "@material-ui/core/styles";
import Adminside from "./smallerComponents/Adminside";

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

export default function CreateSchedule(props) {
  const classes = useStyles();
  // The first commit of Material-UI
  let [formData, setFormData] = useState([]);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-02-20T21:11:54")
  );
  const [startTime, setStartTime] = useState(new Date("2020-02-20T11:00:00"));
  const [endTime, setEndTime] = useState(new Date("2020-02-20T14:00:00"));

  const handleDateChange = date => {
    setSelectedDate(date);
    setFormData({ ...formData, date });
  };

  const handleStartChange = start => {
    setStartTime(start);
    setFormData({ ...formData, start });
  };

  const handleEndChange = end => {
    setEndTime(end);
    setFormData({ ...formData, end });
  };

  const convertTime12to24 = time12h => {
    const [time, modifier] = time12h.split(" ");

    let [hours, minutes, seconds] = time.split(":");

    if (hours === "12") {
      hours = "00";
    }

    if (modifier === "PM") {
      hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}:${seconds}`;
  };

  function submitSchedule() {
    let data = [];
    let starttime = new Date(formData.start).toLocaleTimeString();
    let start = convertTime12to24(starttime);
    let endtime = new Date(formData.end).toLocaleTimeString();
    let end = convertTime12to24(endtime);
    let day_work = new Date(formData.date).toISOString().substring(0, 10);
    data = [
      {
        start,
        end,
        day_work
      }
    ];

    axios
      .post(`/api/admin/submitSchedule/${props.match.params.id}`, data)
      .then(res => {
        console.log(res);
        window.location.reload();
      });
    setFormData([]);
  }

  return (
    <div>
      <Adminside />
      <div style={{ width: "60%", margin: "10% auto" }}>
        <Button
          component={Link}
          to="/admin/schedule"
          style={{ color: "white" }}
        >
          -Back
        </Button>
        <div style={{ backgroundColor: "white" }}>
          <form>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="space-around">
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Day of Shift"
                  format="MM/dd/yyyy"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="Start Time"
                  value={startTime}
                  onChange={handleStartChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  label="End Time"
                  value={endTime}
                  onChange={handleEndChange}
                  KeyboardButtonProps={{
                    "aria-label": "change time"
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
            <Button
              style={{ marginLeft: "45%" }}
              variant="contained"
              color="primary"
              disableElevation
              onClick={submitSchedule}
            >
              Submit
            </Button>
          </form>
        </div>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right">Day Working</TableCell>
                <TableCell align="right">Start Time</TableCell>
                <TableCell align="right">End Time</TableCell>
                <TableCell align="right">Tardy?</TableCell>
                <TableCell align="right">Absent?</TableCell>
              </TableRow>
            </TableHead>
            <EmpHours userid={props.match.params.id} />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
