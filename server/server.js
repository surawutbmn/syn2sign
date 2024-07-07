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

app.post("/addCreators", (req, res) => {
  const { name } = req.body;
  const query = "INSERT INTO creators (name) VALUES (?)";
  db.query(query, [name], (err, result) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.send({ message: "User added successfully!", id: result.insertId });
  });
});

app.get("/creators", (req, res) => {
  db.query("SELECT * FROM creators", (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(results);
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
