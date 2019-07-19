const express = require("express");
const helmet = require("helmet");
const app = express();

const port = 3000;

app.use(helmet());
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

// 1. static
// 2. json
// 3. urlencoded
const data = {
  title: 'ajax',
  desc: 'localhost:3000/ajax'
}

app.post("/ajax", (req, res) => {
  console.log(req.body.name);
  res.json(data);
});

app.listen(port);
