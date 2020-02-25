// import React, { useState, useEffect } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
// import CardContent from "@material-ui/core/CardContent";
// import Avatar from "@material-ui/core/Avatar";
// import Typography from "@material-ui/core/Typography";
// import { Schedule } from "@material-ui/icons";
// import axios from "axios";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableContainer from "@material-ui/core/TableContainer";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles(theme => ({
//   root: {
//     maxWidth: "100%",
//     margin: "0 auto",
//     marginBottom: "10px"
//   },
//   media: {
//     height: 0,
//     paddingTop: "56.25%" // 16:9
//   },
//   expand: {
//     transform: "rotate(0deg)",
//     marginLeft: "auto",
//     transition: theme.transitions.create("transform", {
//       duration: theme.transitions.duration.shortest
//     })
//   },
//   expandOpen: {
//     transform: "rotate(180deg)"
//   },
//   avatar: {
//     backgroundColor: "#172231"
//   },
//   table: {
//     width: "100%"
//   }
// }));

// //the same function that creates an admin schedule, but instead for employees
// export default function EmpList({ id }) {
//   const classes = useStyles();
//   let [schedule, setSchedule] = useState([]);
//   let [loading, setLoading] = useState(true);

//   const convertTime = timeString => {
//     var H = +timeString.substr(0, 2);
//     var h = H % 12 || 12;
//     var ampm = H < 12 || H === 24 ? "AM" : "PM";
//     timeString = h + timeString.substr(2, 3) + ampm;

//     return timeString;
//   };

//   useEffect(() => {
//     axios.get(`/api/employeeSchedule/${id}`).then(res => {
//       console.log(res.data);
//       setSchedule(res.data);
//       setLoading(false);
//     });
//   }, []);

//   // if (loading) {
//   //   return (
//   //     <Card className={classes.root}>
//   //     <CardHeader
//   //       avatar={
//   //         <Avatar aria-label="recipe" className={classes.avatar}>
//   //           <Schedule />
//   //         </Avatar>
//   //       }
//   //       title="Upcoming Shifts"
//   //     />
//   //     <CardContent>
//   //     <TableContainer component={Paper}>
//   //     <TableBody>
//   //       <TableRow>
//   //         <TableCell align="left">Loading...</TableCell>
//   //       </TableRow>
//   //     </TableBody>
//   //   {/* )};
//   //   else if (schedule.length < 1) {
//   //   return (
//   //     <TableBody>
//   //       <TableRow>
//   //         <TableCell align="left">No Published Schedule</TableCell>
//   //       </TableRow>
//   //     </TableBody>
//   //   );
//   // } else {
//   //   return (
//   //     <TableBody>
//   //       {schedule.map(day => {
//   //         let dayWork = new Date(day.day_work).toDateString();
//   //         let start = convertTime(day.start);
//   //         let end = convertTime(day.end);
//   //         return (
//   //           <TableRow key={day.date}>
//   //             <TableCell component="th" scope="row">
//   //               {dayWork}
//   //             </TableCell>
//   //             <TableCell align="right">{start}</TableCell>
//   //             <TableCell align="right">{end}</TableCell>
//   //           </TableRow>
//   //               );
//   //         }) 
//   //             })}
//   //     </TableBody>
//   //     </TableContainer>
//   //          <Typography variant="body2" color="textSecondary" component="p">
//   //          If there is a discrepancy with your schedule, please speak with your
//   //          leadership team.
//   //        </Typography>
//   //      </CardContent>
//   //     </Card>
//   //   )};
//   // }
//   // } */}
  

