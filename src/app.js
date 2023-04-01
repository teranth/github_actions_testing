const express = require("express");
const app = express();

app.get("/test", (_req, res) => {
  res.status(200).send("Hello, World!")
})

// Endpoint to show a funny joke
app.get("/joke", (_req, res) => {
    res.status(200).send("What do you call a bear with no teeth? A gummy bear!")
})

module.exports = app;
