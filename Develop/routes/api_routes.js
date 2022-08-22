const fs = require("fs");
const path = require("path");
const router = require("express").Router();
const database = require("../db/db.json");

router.get("/api/notes", function (req, res) {
  res.json(notes);
});

router.post("/api/notes", function (req, res) {
  let newNote = req.body;
  notes.push(newNote);
  updateDb();
  return console.log("Added new note: " + newNote.title);
});

router.delete("/api/notes/:id", function (req, res) {
  notes.splice(req.params.id, 1);
  updateDb();
  console.log("Deleted note with id " + req.params.id);
});

module.exports = router;
