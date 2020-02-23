import React from "react";
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
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "white",
    padding: "10%",
    justifyContent: "center"

  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  formDecor: {
    display: "block",
    width: "50%",
    margin: "10% auto",

  }
}));

export default function TimeOff() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div>
      <Sidebar />
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
                label="Select Day Off"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
                 <TextField
            id="standard-basic"
            label="Reason For Absence"
            style={{ margin: "0 auto", marginTop: "18px", width: "120%"}}
          />
            </Grid>
          </MuiPickersUtilsProvider>
       
          <Button
            variant="contained"
            style={{ margin: "0 auto", margin: "3%", display: "block", marginTop: "10%"}}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
