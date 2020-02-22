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
    textAlign: "center"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  formDecor: {
    display: "block",

    width: "60%",
    margin: "10% auto"
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
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <TextField
            id="standard-basic"
            label="Standard"
            style={{ margin: "0 auto", display: "block" }}
          />
          <br />
          <Button
            variant="contained"
            style={{ margin: "0 auto", display: "block" }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}
