//importing all of the necessary elements from the material UI package
import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Adminside from "./smallerComponents/Adminside";
import AdminSched from "./smallerComponents/AdminSched";
import Grid from "@material-ui/core/Grid";
import DashNewsCard from "./smallerComponents/DashNewsCard";
import AdminTodo from "./smallerComponents/AdminTodo";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      width: theme.spacing(18),
      height: theme.spacing(18),
      margin: "35px auto",
      backgroundColor: "white"
    },
    width: "90%"
  },

  container: {
    width: "70%",
    height: "auto",
    margin: "0 auto",
    marginTop: "3%",
    marginLeft: "20%"
  }
}));

//the admin dashboard

export default function DashComponent(props) {
  const classes = useStyles();

  useEffect(() => {
    if (!localStorage.getItem("adminAuth")) {
      localStorage.clear();
      props.history.push("/");
    }
  });
  return (
    <div>
      <Adminside id={props.match.params.id} />

      <Grid
        container
        className={classes.container}
        spacing={10}
        direction="row"
      >
        <Grid item xs={8}>
          <AdminSched id={props.match.params.id} />
        </Grid>
        <Grid item md={4}>
          <DashNewsCard />
        </Grid>
      </Grid>
      <Grid
        container
        style={{ marginTop: "-5%" }}
        className={classes.container}
        spacing={10}
        direction="row"
      >
        <Grid item xs={8}>
          <AdminTodo />
        </Grid>
      </Grid>
    </div>
  );
}
