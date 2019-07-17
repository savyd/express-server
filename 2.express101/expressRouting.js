const express = require("express");
const app = express();

const port = 3000;

// app Object has a few methods:
// HTTP verbs! REST verbs!
// 1. get - DEFAULT for all browsers is get
// 2. post - CREATE
// 3. delete - DELETE
// 4. put - UPDATE

// Take 2 args:
// 1. path
// 2. callback to run if http request that match THIS verb
// is made to the path in #1
// app.all("/", (req, res) => res.send(`<h1>Hello World</h1>`));
app.get("/", (req, res) => res.send(`<h1>Method: GET</h1>`));
app.post("/", (req, res) => {});
app.delete("/", (req, res) => {});
app.put("/", (req, res) => {});

app.listen(port, console.log("app run on port http://localhost:" + port));
