const path = require("path");

const express = require("express");
const helmet = require("helmet");
const app = express();

const port = 3000;

app.use(helmet());
// serve up static file
app.use(express.static("public"));
// parse json and urlencoded data into req.body
app.use(express.json());
app.use(express.urlencoded());

// app.set() takes 2 args:
// 1. key
// 2. value
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// 1. Express as we know it happens. This File.
// 2. We define a view engine
// - EJS
// - Mustance
// - Handelbars
// - Jade/Pug
// 3. Inside one of our routes, we have a res.render
// 4. We pass that res.render to use 2 things
// - the file we want to use
// - the data we want to send
// 5. express uses the node module for our specified view engine and parse the file
// - that means, it takes the HTML/CSS/JS and combines it whit wathever "node" thare is in file
// 6. the final result of this process is a compiled product of the things the browser can read
// - HTML/CSS/JS

app.get("/", (req, res, next) => {
  res.render("index");
});

app.listen(port);
