import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Adminside from "./smallerComponents/Adminside";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    margin: "0 auto",
    marginBottom: "10px"
  },
  table: {
    minWidth: 650
  },
  tableWidth: {
    width: "60%",
    margin: "2% auto",
    marginBottom: "10px"
  },
  buttonMargin: {
    marginBottom: "25px"
  },
  avatar: {
    backgroundColor: "#172231"
  }
});

export default function CreateNews() {
  const classes = useStyles();

  return (
    <div>
      <Adminside />
      <div className={classes.tableWidth}>
        <Button component={Link} to="/dashboard" style={{ color: "white" }}>
          -Back
        </Button>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                <NotificationsIcon />
              </Avatar>
            }
            title="Create Announcement"
          />
          <CardContent>
            <div
              className="News"
              style={{
                backgroundColor: "white",
                width: "60%",
                margin: "0 auto",
                textAlign: "center"
              }}
            >
              <form
                style={{ borderRadius: "5px" }}
                method="post"
                action="/api/NewPost"
              >
                <div style={{ margin: "20px" }}>
                  <label
                    style={{
                      margin: "20px",
                      fontFamily: "Roboto",
                      fontSize: "20px"
                    }}
                    for="fname"
                  >
                    Title:
                  </label>
                  <input
                    style={{ margin: "20px" }}
                    type="text"
                    id="title"
                    name="title"
                  />
                </div>

                <textarea
                  name="message"
                  style={{
                    width: "80%",
                    height: "70%",
                    fontSize: "20px",
                    fontFamily: "Roboto",
                    borderRadius: "5%"
                  }}
                >
                  Your announcement here...
                </textarea>
                <div>
                  <Button
                    style={{
                      margin: "20px",
                      backgroundColor: "#182231",
                      color: "white"
                    }}
                    variant="contained"
                    disableElevation
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
