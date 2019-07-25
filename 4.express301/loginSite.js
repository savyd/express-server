"use stric";
const path = require("path");

const express = require("express");
const app = express();
const port = 3000;

const cookieParser = require("cookie-parser")
const helmet = require("helmet");
app.use(helmet());

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use((req, res, next) => {
    if(req.query.msg === "fail"){
        res.locals.msg = "Sorry, username and password is invalid"
    } else {
        res.locals.msg = ""
    }

    // send me on to the next piece of middlware!
    next();
})

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.get("/", (req, res, next) => {
    // the req object has a query property in express
    // req.query is an object, whit a property of even key in the query string
    // the query string is whare you put insecure data
    console.log(req.query);
    res.render("login")
});


app.get("/welcome", (req, res, next) => {
    // req.cookies object will have a property for every named cookies
    // that has ben set. 
    res.render("welcome",{
        username: req.cookies.username
    });
});
app.get("/logout", (req, res, next) => {
    // res.clearCookie takes 1 arg:
    // 1. Cookie to clear (by name)
    res.clearCookie("username");
    res.redirect("/");
})


app.post("/process_login", (req, res, next) => {
    // res.body is made by urlencoded, witch parse the http masage for sent data!
    const username = req.body.username;
    const password = req.body.password;
    // chack the db see if user credentials is valid
    // if they are valid ...
        // - save username in cookie/session
        // - is send page to the welcome page
    if(password === "x"){
        // res.cookie takes 2 args:
        // 1. name of the cookie
        // 2. value to set it to
        res.cookie("username", username);
        // res.redirect takes 1 arg:
        // 1. whare to send the browser
        res.redirect("/welcome");
    } else {
        // The "?" is a special character in a URl
        res.redirect("/?msg=fail")
    }
    // res.json(req.body);
})

app.listen(port);