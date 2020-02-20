import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import WorkIcon from "@material-ui/icons/Work";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 960,
    backgroundColor: theme.palette.background.paper,
    margin: "auto",
    marginTop: 100,
    borderRadius: "25px"
  },
  header: {
    fontSize: "50px",
    color: "#FFFFFF",
    textAlign: "center",
    fontFamily: "Roboto"
  }
}));

export default function Documents() {
  const classes = useStyles();

  return (
    <div style={{ width: "60%", margin: "0 auto" }}>
      <h1 className={classes.header}>User Documents and Forms</h1>
      <Button component={Link} to="/" style={{ color: "white" }}>
        -Back
      </Button>
      <List className={classes.root}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <a
            href="https://www.irs.gov/pub/irs-pdf/fw2.pdf"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button>
              {" "}
              <ListItemText primary="W-2" />
            </Button>
          </a>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <a
            href="https://19of32x2yl33s8o4xza0gf14-wpengine.netdna-ssl.com/wp-content/uploads/Exhibit-A-SAMPLE-CONTRACT.pdf"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button>
              <ListItemText primary="Contract" secondary="Updated 2019" />
            </Button>
          </a>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <a
            href="https://www.schwab.com/public/file/P-619651/BDL50374-04-NC_PPA_401k_Basic_Plan_Doc_Final_Web.pdf"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button>
              {" "}
              <ListItemText primary="401K Info" />
            </Button>
          </a>
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <a
            href="https://parksjobs.disneycareers.com/benefits?gclid=CjwKCAiA1rPyBRAREiwA1UIy8ComOHUgZl5RwdnIzq04JTAda_M9o_VhicG_is4RQlBDuPPeRk6MehoCfCsQAvD_BwE"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Button>
              {" "}
              <ListItemText primary="Benefits" />
            </Button>
          </a>
        </ListItem>
      </List>
    </div>
  );
}
