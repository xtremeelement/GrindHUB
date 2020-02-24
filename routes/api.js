const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const Nexmo = require("nexmo");

let pool;

if (process.env.JAWSDB_URL) {
  pool = mysql.createPool(process.env.JAWSDB_URL);
} else {
  pool = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    password: "root",
    database: "GrindhubDB"
  });
}

const nexmo = new Nexmo(
  {
    apiKey: "7560d810",
    apiSecret: "ecKcWSvQ44JwBlls"
  },
  { debug: true }
);

router.get("/findAllEmps", (req, res) => {
  pool.query("SELECT * FROM Employee", (error, results) => {
    if (error) throw error;
    res.send(results);
  });
});

router.get("/employeeSchedule/:id", (req, res) => {
  const user = req.params.id;
  pool.query(
    "SELECT * FROM Schedule WHERE UserID =? order by day_work desc limit 7",
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
      res.end();
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
      pool.query(
        "SELECT day_req from days_off where req_id=? ",
        req.params.req_id,
        (error, data) => {
          if (error) console.log(error);
          nexmo.message.sendSms(
            "13024868348",
            "14074939784",
            "Your request was approved",
            { type: "unicode" },
            (errors, responseData) => {
              if (errors) {
                console.log(errors);
              } else {
                console.log("text sent");
              }
            }
          );
        }
      );
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
      pool.query(
        "SELECT day_req from days_off where req_id=? ",
        req.params.req_id,
        (error, data) => {
          if (error) console.log(error);
          nexmo.message.sendSms(
            "13024868348",
            "14074939784",
            "Your request was denied",
            { type: "unicode" },
            (errors, responseData) => {
              if (errors) {
                console.log(errors);
              } else {
                console.log("text sent");
              }
            }
          );
        }
      );
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

router.post("/requestday/:id", (req, res) => {
  console.log(req.body);
  let id = req.params.id;
  let day_req = req.body[0].day_req;
  let emp_reason = req.body[0].emp_reason;
  pool.query(
    "INSERT INTO days_off(user_id,day_req, emp_reason) VALUES(?,?,?)",
    [id, day_req, emp_reason],
    (err, result) => {
      if (err) console.log(err);
      res.end();
    }
  );
});

router.get("/requesteddays/:id", (req, res) => {
  let id = req.params.id;
  pool.query(
    "SELECT * FROM days_off WHERE user_id=? ORDER BY day_req DESC",
    id,
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

router.get("/previousrequests/:id", (req, res) => {
  let id = req.params.id;
  pool.query(
    "SELECT * FROM days_off WHERE user_id=? ORDER BY day_req ASC LIMIT 2 ",
    id,
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

router.get("/schedsnap/:id", (req, res) => {
  let id = req.params.id;
  pool.query(
    "select * from Schedule where day_work between now() and DATE_ADD(now(), interval 7 day) and userID = ? limit 3",
    id,
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
    }
  );
});

router.get("/admin/emptoday", (req, res) => {
  pool.query(
    "select * from Schedule inner join Employee where Schedule.UserID = Employee.userID order by day_work asc limit 4 ",
    (err, result) => {
      if (err) console.log(err);
      res.send(result);
      console.log(result);
    }
  );
});
module.exports = router;
