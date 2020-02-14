import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    },
  }));

export default function LoginContainer() {
    const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: '#24344d', height: '100vh' }} />
        <TextField
          label="Username"
          id="filled-margin-dense"
          defaultValue="Username"
          className={classes.textField}
          helperText=""
          margin="dense"
          variant="filled"
        />
         <TextField
          label="Password"
          id="filled-margin-dense"
          defaultValue="Password"
          className={classes.textField}
          helperText="Case Sensitive"
          margin="dense"
          variant="filled"
        />
        <Button variant="contained" color="primary" disableElevation>
  Log In
</Button>
      </Container>
    </React.Fragment>
  );
}

