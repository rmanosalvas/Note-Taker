// Bringing in the package to create the correct file path for HTML
var path = require("path");

// Routing

module.exports = function (app) {




    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};