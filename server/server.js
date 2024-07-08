const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "syn2sign",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("MySQL connected...");
});

app.get("/students", (req, res) => {
  db.query("SELECT * FROM students", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.get("/students/:id", (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM students WHERE std_id = ?", [id], (err, results) => {
    if (err) {
      console.error("Error fetching data from MySQL:", err);
      res.status(500).send(err);
    } else {
      if (results.length === 0) {
        res.status(404).send("Creator not found");
      } else {
        res.json(results[0]);
      }
    }
  });
});

app.get("/projects/:project_id", (req, res) => {
  const { project_id } = req.params;

  db.query(
    "SELECT * FROM snp66 WHERE project_id = ?",
    [project_id],
    (err, results) => {
      if (err) {
        console.error("Error fetching students:", err);
        res.status(500).send("Error fetching students");
      } else {
        res.json(results);
      }
    }
  );
});

app.get("/Otherstudents/:project_id/:exclude_std_id", (req, res) => {
  const { project_id, exclude_std_id } = req.params;
  db.query(
    "SELECT * FROM students WHERE project_id = ? AND std_id != ?",
    [project_id, exclude_std_id],
    (err, results) => {
      if (err) {
        console.error("Error fetching students:", err);
        res.status(500).send("Error fetching students");
      } else {
        res.json(results);
      }
    }
  );
});


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
