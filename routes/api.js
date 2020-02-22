const express = require("express");
const mysql = require("mysql");
const router = express.Router();

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "GrindhubDB"
});

router.get("/findAllEmps", (req, res) => {
  pool.query("SELECT * FROM Employee", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get("/employeeSchedule/:id", (req, res) => {
  const user = req.params.id;
  pool.query(
    "SELECT * FROM Schedule WHERE UserID =?",
    user,
    (error, results) => {
      if (error) throw error;
      res.send(results);
    }
  );
});

router.get("/admin/emphours/:userid", (req, res) => {
  const user = req.params.userid;
  pool.query("SELECT * FROM Schedule WHERE UserID=?", user, (err, result) => {
    if (err) console.log(err);
    res.send(result);
  });
});

router.get("/employeeInfo/:empID", (req, res) => {
  const user = req.params.empID;
  pool.query("SELECT * FROM Employee WHERE userId=?", user, (error, result) => {
    if (error) throw error;
    res.send(result);
  });
});

router.get("/admin/daysOff", (req, res) => {
  pool.query(
    "SELECT * FROM days_off INNER JOIN Employee on days_off.user_id = Employee.userID",
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

router.put("/employeeInfo/", (req, res) => {
  const user = req.body.UserID;
  const number = req.body.phone_number;
  pool.query(
    "UPDATE Employee SET phone_number =? WHERE Userid=?",
    [number, user],
    (err, result) => {
      if (err) throw err;
      res.status(200);
    }
  );
});

router.post("/admin/newEmp", (req, res) => {
  const {
    first_name,
    last_name,
    password,
    isAdmin,
    pay_rate,
    phone_number,
    email
  } = req.body;
  pool.query(
    "INSERT INTO Employee (first_name, last_name, password, isAdmin, pay_rate, phone_number, email) values (?,?,?,?,?,?,?)",
    [first_name, last_name, password, isAdmin, pay_rate, phone_number, email],
    (err, result) => {
      if (err) throw err;
      res.status(200);
    }
  );
});

router.put("/admin/approve/:req_id", (req, res) => {
  console.log(req.params.req_id);
  pool.query(
    "UPDATE days_off SET approved=1 WHERE req_id=?",
    req.params.req_id,
    (err, result) => {
      if (err) console.log(err);
      res.end();
    }
  );
});

router.put("/admin/deny/:req_id", (req, res) => {
  pool.query(
    "UPDATE days_off SET approved=0 WHERE req_id=?",
    req.params.req_id,
    (err, result) => {
      if (err) console.log(err);
      res.end();
    }
  );
});

router.post("/admin/submitSchedule/:id", (req, res) => {
  let id = req.params.id;
  console.log(req.body[0]);
  pool.query(
    "insert into Schedule(userID, day_work, start,end) values(?,?,?,?)",
    [req.params.id, req.body[0].day_work, req.body[0].start, req.body[0].end],
    (err, result) => {
      if (err) console.log(err);
      res.end();
    }
  );
});
module.exports = router;
