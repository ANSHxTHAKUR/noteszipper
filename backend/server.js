const express = require("express");
const notes = require("./data/notes");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("App is running");
});

app.get("/notes", (req, res) => {
  res.json(notes);
});

app.get("/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.send(note);
});

const port = parseInt(process.env.PORT) || 5000; // aisa karne se ye error nahi aata hai [Error: listen EACCES: permission denied 5000];
app.listen(port, console.log(`Server started on port ${port}`));
