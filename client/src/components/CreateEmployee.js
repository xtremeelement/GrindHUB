import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Adminside from "./smallerComponents/Adminside";
import { Link } from "react-router-dom";
import axios from "axios";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Avatar from '@material-ui/core/Avatar';

//adds a new employee
export default function CreateEmployee() {
  const [lName, setLName] = useState("");
  const [fName, setFName] = useState("");
  const [emails, setEmail] = useState("");
  const [pay, setPay] = useState("");
  const [passwords, setPassword] = useState("");
  const [phone, setPhone] = useState();
  const [formData, setFormData] = useState([]);

  const handleFName = first_name => {
    setFormData({ ...formData, first_name });
    setFName(first_name);
    console.log(formData);
  };
  const handleLName = last_name => {
    setFormData({ ...formData, last_name });
    setLName(last_name);
    console.log(formData);
  };
  const handleEmail = email => {
    setFormData({ ...formData, email });
    setEmail(email);
    console.log(formData);
  };
  const handlePay = pay_rate => {
    setFormData({ ...formData, pay_rate });
    setPay(pay_rate);
    console.log(formData);
  };
  const handlePassword = password => {
    setFormData({ ...formData, password });
    setPassword(password);
    console.log(formData);
  };
  const handlePhone = phone_number => {
    setFormData({ ...formData, phone_number: +phone_number });
    setPhone(phone_number);
    console.log(formData);
  };
  const handleAdmin = isAdmin => {
    setFormData({ ...formData, isAdmin });
  };

  const handleSubmit = () => {
    console.log(formData);
    setPhone("");
    setFName("");
    setLName("");
    setEmail("");
    setPay("");
    setPassword("");
    axios.post("/api/admin/newEmp", formData).then(res => {
      console.log(res);
    });
  };

  return (
    <div>
      <Adminside />
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          marginTop: "8%",
          
        }}
      >
        <Button component={Link} to="/admin" style={{ color: "white" }}>
          -Back
        </Button>
        <div style={{ backgroundColor: "white", padding: "25px", borderRadius:"5px" }}>
          <React.Fragment>
            <Typography
              style={{ textAlign: "center", marginBottom: "3%" }}
              variant="h6"
              gutterBottom
            >
              <Avatar style={{backgroundColor: "#182231"}}><PersonAddIcon/></Avatar>

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
                  value={fName}
                  onChange={e => handleFName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="lname"
                  value={lName}
                  onChange={e => handleLName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="@"
                  value={emails}
                  onChange={e => handleEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="Pay"
                  label="Pay Rate"
                  fullWidth
                  autoComplete="$"
                  value={pay}
                  onChange={e => handlePay(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="password"
                  label="Temporary Password"
                  fullWidth
                  autoComplete="12345"
                  value={passwords}
                  onChange={e => handlePassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="phone"
                  label="Phone Number"
                  fullWidth
                  autoComplete="12345"
                  value={phone}
                  onChange={e => handlePhone(e.target.value)}
                />
              </Grid>

              <Grid style={{ textAlign: "center" }} item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox color="secondary" name="Admin" value="true" />
                  }
                  label="Is this Employee an Administrator?"
                  onChange={e => handleAdmin(e.target.value)}
                />
              </Grid>
            </Grid>
          </React.Fragment>
          <Button
            style={{ margin: "20px", marginLeft: "45%", backgroundColor: "#182231", color:"white" }}
            variant="contained"
            disableElevation
            onClick={handleSubmit}
          >
            Create Employee
          </Button>
        </div>
      </div>
    </div>
  );
}
