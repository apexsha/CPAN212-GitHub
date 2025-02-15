/* Project setup: For the server
1 - new project folder
2 - open an integrated terminal
3 - run these commands:
    npm init -y
    npm i express nodemon
    (optional) -> go into package.json and add "type": "module" to enable import from 
*/
 
// [Please enable only ONE of these] 
import express from "express"; // if you are using type: module
//const express = require("express"); // if using common JS (Default)
import logger from "../../week04/middleware/logger.js";
import auth from "../../week04/middleware/auth.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true })); // for html forms
app.use(express.json()); //extracts application/json data, old method was bodypaser
// app.use(logger); // this is application wide, so it runs everywhere

// routes
app.get("/", (req, res) => {
  res.send("Welcome to our server");
});

// data
app.get("/data", (req, res) => {

  const data = {
    fname: "Apeksha",
    lname: "Hiregoudar"
  }
  res.send(data);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  //process with DB in future
  res.send("I stole ur data")
})


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use("", (req, res) => {
  res.status(404).send("Page not found");
});
