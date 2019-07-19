const express = require("express");
const app = express();

const port = 3000;

// Express = 2 things
// 1. router
// 2. middleware that comprises a webframework

// req ---MIDDLEWARE---> res
// middleware function is ANY function that has access to the req, res, next Object

// req ---MIDDLEWARE---> res
// 1. request come in.
// 2. we need to validate the user, sometime.
// 3. we need to store some thing in the DB.
// 4. if thare is data from the user we need to parse it and store it
// 5. response

let validateUser = (req, res, next) => {
  // get info out of req object
  // do some stuf with the DB
  res.locals.validated = true;
  console.log("VALIDATED RAN!");
  next();
};

// this will run validateUser on ALL paths, all method
app.use(validateUser);
// this will run validateUser on /admin, all method.
app.use("/admin", validateUser);
// this will run validateUser on / , only on get method.
app.get("/", validateUser);
// btw this... look like 
// app.get("/", (req, res, next) => {
//   // get info out of req object
//   // do some stuf with the DB
//   res.locals.validated = true;
//   console.log("VALIDATED RAN!");
//   next();
// });

app.get("/", (req, res, next) => {
  res.send("<h1>Main page</h1>");
});

app.get("/admin", (req, res, next) => {
  res.send("<h1>Admin page</h1>");
});

app.listen(port);
