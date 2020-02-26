import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    height: "auto",
    textAlign: "center"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#182231",
  },
  container: {
    maxHeight: 440,
    borderRadius: "5px",
    textAlign: "center",
    margin: "15px"
  }
}));

export default function NewsAlerts() {
  const classes = useStyles();
 

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
          <NotificationsIcon/>
          </Avatar>
        }

        title="Recent Announcements"
        
      />
     
      <CardContent>
      <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              Management meeting at 5:00PM in room 304     (Feb 29, 2020)
        
          
            </TableRow>
          </TableHead>
          <TableBody>
                  {/* {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
              );
            })} */}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
        <Typography variant="body2" color="textSecondary" component="p">
        To post a new announcement, please submit a request to HR via email. 
        </Typography>
      </CardContent>

    </Card>
  );
}
