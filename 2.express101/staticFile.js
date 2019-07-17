const express = require("express");
const app = express();

const port = 3000;

// app comes whit a use method
// use takes 1 arg (right now):
// 1. the middleware you want to run
app.use(express.static("public"));

app.listen(port, console.log("app run on port: " + port));
