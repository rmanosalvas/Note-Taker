// Dependencies
const fs = require('fs');
const path = require('path');

// Link to DB
const db = require('../db/db.json');

module.exports = function(app) {
    app.get("/api/notes", (req, res) => {
        console.log('***************');
        res.sendFile(path.join(path.join(__dirname, "../notes"), "./db/db.json"));
        console.log(db)
        console.log('***************');
    });

    app.post("/api/notes", (req, res) => {
        // New note
        var newNote = req.body;
        // Load existing DB
        var existingNotes = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
        // Add ID to note
        var noteID = (existingNotes.length).toString();
        // Add ID to object
        newNote.id = noteID;
        // Add note to existing
        existingNotes.push(newNote);
        // Overwrite DB with the new file
        fs.writeFileSync("../db/db.json", JSON.stringify(existingNotes));
        // return the new note in the res
        res.json(newNote);
        console.log("New note " + newNote.title + " added to notes DB")
    });

    app.delete("/api/notes/:id", (req, res) => {
        // load existing DB
        var existingNotes = JSON.parse(fs.readFileSync("../db/db.json", "utf8"));
        console.log(existingNotes);
        // get the ID
        var noteID = req.params.id;
        // Splice value from notes list
        existingNotes.splice(noteID,1);
        // Overwrite the db with the new file
        fs.writeFileSync("./db/db.json", JSON.stringify(existingNotes));
        console.log(existingNotes);
        res.json(existingNotes);
    });

};