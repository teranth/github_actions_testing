const express = require("express");
const app = express();

app.get("/test", (_req, res) => {
  res.status(200).send("Hello, World!")
})

// Endpoint to show a funny joke
app.get("/joke", (_req, res) => {
    res.status(200).send("What do you call a bear with no teeth? A gummy bear!")
})

// Endpoint to show a joke of the day based on the time of day
app.get("/joke-of-the-day", (_req, res) => {
    const jokes = [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "Why don't skeletons fight each other? They don't have the guts!",
        "What do you call fake spaghetti? An impasta!",
        "Why did the bicycle fall over? Because it was two-tired!"
    ];

    const hour = new Date().getHours();
    const jokeIndex = hour % jokes.length;
    res.status(200).send(jokes[jokeIndex]);
})

module.exports = app;
