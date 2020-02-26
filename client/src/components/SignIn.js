import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      GrindHub {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    backgroundImage: "url(https://i.imgur.com/lPJE0Xg.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "dark"
        ? theme.palette.grey[900]
        : theme.palette.grey[50],
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#959BE9"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  admin: {
    width: "20%",
    position: "absolute",
    bottom: "10px",
    textDecoration: "none",
    color: "white"
  }
}));

export default function SignInSide(props) {
  const classes = useStyles();
  const [userID, setuserID] = useState("");
  const [passField, setpassField] = useState("");
  const [userData, setuserData] = useState([]);
  let history = useHistory();
  function userAuth() {
    localStorage.clear();
    axios.post("/api/userauth", userData).then(res => {
      if (res.data.message) {
        localStorage.setItem("userAuth", "true");
        redirect();
      } else {
        setuserID("Invalid Credentials");
      }
    });
  }

  function redirect() {
    props.history.push(`/dashboard/${userID}`);
  }

  function adminAuth() {
    localStorage.clear();
    axios.post("/api/adminauth", userData).then(res => {
      console.log(res.data);
      if (res.data.message) {
        localStorage.setItem("adminAuth", "true");
      } else if (res.data.invalid) {
        setuserID("User not an admin");
      } else {
        setuserID("Invalid Credentials");
      }
      history.push(`/admin`);
    });
  }

  const handleChange = id => {
    setuserID(id);
    setuserData({ ...userData, id });
  };

  const handlePass = pass => {
    setpassField(pass);
    setuserData({ ...userData, pass });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <div className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Employee ID"
              name="email"
              autoComplete="email"
              autoFocus
              value={userID}
              onChange={event => handleChange(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={event => handlePass(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={userAuth}
            >
              Sign In + Grind Those Gears
            </Button>
            <Grid container>
              <Grid item xs>
                Forgot password?
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
          <br />
          <br />

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.admin}
            onClick={adminAuth}
          >
            Admin Login
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}
