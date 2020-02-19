const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require("mysql");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

var pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "root",
  database: "GrindhubDB"
});

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/api/findAllEmps", (req, res) => {
  pool.query("SELECT * FROM Employee", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get("/api/employeeSchedule/:empID", (req, res) => {
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

app.get("/api/employeeInfo/:empID", (req, res) => {
  const user = req.params.empID;
  pool.query("SELECT * FROM Employee WHERE UserID=?", user, (error, result) => {
    if (error) throw error;
    res.send(results);
  });
});

app.get("api/admin/daysOff", (req, res) => {
  pool.query("SELECT * FROM daysOff", (err, result) => {
    if (err) throw err;
    res.send(results);
  });
});

app.put("/api/employeeInfo/", (req, res) => {
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

app.post("/api/admin/newEmp", (req, res) => {
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

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
