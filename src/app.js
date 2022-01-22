const express = require("express");
const app = express();

//! Middldeware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(require("./routes/user.route"));
app.set(require("./databases/mongodb"));

module.exports = app;
