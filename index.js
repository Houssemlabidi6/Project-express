const express = require("express");
const app = express();
const currentDates = require("./middelware/script");

const port = 4001;

app.use(currentDates);
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/home.html", (req, res) => {
  res.sendFile(__dirname + "/public/home.html");
});

app.get("/contact.html", (req, res) => {
  res.sendFile(__dirname + "/public/contact.html");
});

app.get("/services.html", (req, res) => {
  res.sendFile(__dirname + "/public/services.html");
});

//pour les autres routes
app.get("*", (req, res) => {
  res.send("error");
});

//route of CSS
app.get("/public/styles.css", (req, res) => {
  res.sendFile(__dirname + "/public/styles.css");
});

app.listen(port, () => {
  console.log(`server run on ${port}`);
});
