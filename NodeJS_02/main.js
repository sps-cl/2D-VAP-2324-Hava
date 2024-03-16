const path = require('path');
const express = require('express');
const mysql2 = require('mysql2');

var con = mysql2.createConnection(
    {
        host: "10.0.1.9",
        port: "3306",
        user: "root",
        password: "root",
        database: "nodejs_02"
    }
);

con.connect((e) => {
    if(e) throw e;
    else {
        console.log("Connected to the database");
    }
});

let app = express();
app.use(express.static(__dirname));
app.use(express.urlencoded({extended: true}));
app.get("/", (req, res) => {
    res.send(path.join(__dirname, "index.html"));
});
app.post("/add-user", (req, res) => {
    con.query(`INSERT INTO users (name, surname) VALUES ("${req.body.name}", "${req.body.surname}");`, (e) => {
        if(e) res.send(e.sqlMessage);
        else res.redirect("/get-users");
    })
});
app.get("/get-users", (req, res) => {
    con.query("SELECT * FROM users;", (e, r) => {
        res.send(r);
    })
});
app.listen(5500);