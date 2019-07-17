// NodeJS is language
// Express is node, a node module
const path = require("path");

// http is a native module
// const http = require("http");
// express is 3rd party module
const express = require("express");
// an "app" is the express function (createApplication inside the Express module)
// invoked and is an express application
const app = express();
const port = 3000;

// serve up static files! only 1 line... take that nodejs
app.use(express.static("public"));

// all is a method, and it takes 2 args:
// 1. route
// 2. callback to run if the route is requested
app.all("/", (req, res) => {
  // Express handles the basic headers (status code, main-type)! Awsome
  // read in node.html
  res.sendFile(path.join(__dirname + "/node.html"));
  // res.send(`<h1>This is the Home page</h1>`);
  // Express handles the end! Awsome!
});

app.all("*", (res, req) => {
    res.send("Error page 404");
});

app.listen(port, console.log("port runing in port http://localhost:" + port));
