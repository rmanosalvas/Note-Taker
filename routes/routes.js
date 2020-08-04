const fs = require("fs");
const path = require("path");

module.exports = function (app) {

    fs.readFile("db/db.json", "utf8", function (err, data) {

        if (err) {
            throw err;
        }

        var notes = JSON.parse(data);

        app.get("/api/notes",function (req, res) {
            res.JSON(notes)
          });

        app.post("")










        // Routes
        // Notes page is accessed when /notes is the url ending
        app.get("/notes", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/notes.html"));
        });

        // If no matching route is found default to home
        app.get("*", function (req, res) {
            res.sendFile(path.join(__dirname, "../public/index.html"));
        });


    });
};