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

router.get("/employeeSchedule/:empID", (req, res) => {
  const user = req.params.empID;
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
  pool.query(
    "SELECT * FROM Employee WHERE user_id=?",
    user,
    (error, result) => {
      if (error) throw error;
      res.send(results);
    }
  );
});

router.get("/admin/daysOff", (req, res) => {
  pool.query("SELECT * FROM daysOff", (err, result) => {
    if (err) throw err;
    res.send(results);
  });
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

router.put("/admin/approve/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200);
});

router.put("/admin/deny/:id", (req, res) => {
  console.log(req.params.id);
  res.status(200);
});
module.exports = router;
