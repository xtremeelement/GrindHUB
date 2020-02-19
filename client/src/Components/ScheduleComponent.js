import React, { useState } from "react";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import Button from "@material-ui/core/Button";

const Schedule = () => {
  const [date, changeDate] = useState(new Date());

  // prettier-ignore
  return (
    <MuiPickersUtilsProvider>
      <div>
      <DatePicker
        autoOk
        orientation="landscape"
        variant="static"
        openTo="date"
        value={date}
        onChange={changeDate}
      />
      </div>
      </MuiPickersUtilsProvider>

  );
};

export default Schedule;
  