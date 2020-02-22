import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Adminside from "./smallerComponents/Adminside";
import { Link } from "react-router-dom";

export default function CreateEmployee() {
  return (
    <div>
      <Adminside />
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          marginTop: "8%"
        }}
      >
        <Button component={Link} to="/admin" style={{ color: "white" }}>
          -Back
        </Button>
        <div style={{ backgroundColor: "white", padding: "25px" }}>
          <React.Fragment>
            <Typography
              style={{ textAlign: "center" }}
              variant="h6"
              gutterBottom
            >
              Employee Details
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="fname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="@"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="Pay"
                  label="Pay Rate"
                  fullWidth
                  autoComplete="$"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="password"
                  label="Temporary Password"
                  fullWidth
                  autoComplete="12345"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="phone"
                  label="Phone Number"
                  fullWidth
                  autoComplete="12345"
                />
              </Grid>

              <Grid style={{ textAlign: "center" }} item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox color="secondary" name="Admin" value="yes" />
                  }
                  label="Is this Employee an Administrator?"
                />
              </Grid>
            </Grid>
          </React.Fragment>
          <Button
            style={{ margin: "20px", marginLeft: "45%" }}
            variant="contained"
            color="primary"
            disableElevation
          >
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
