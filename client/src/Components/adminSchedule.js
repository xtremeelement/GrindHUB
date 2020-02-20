import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function CreateSchedule() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <div style={{backgroundColor: "white", width: "60%", height: "300px", margin: "0 auto", marginTop:"10%", border:"solid 7px #3F51B5", borderRadius: "25px", padding: "100px"}}>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
      <TextField id="standard-name" label="Name" value= "name" />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Day of Shift"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardTimePicker
          margin="normal"
          id="time-picker"
          label="Hours Working"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
    <Button style={{margin: "20px", marginLeft: "45%"}} variant="contained" color="primary" disableElevation>
      Submit
    </Button>
    </div>
  );
 }
