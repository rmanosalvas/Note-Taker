// Setting up our npm package and to set up our server
var path = require("path");
var fs = require("fs");
var express = require("express");
var app = express();

// Creating a global port and local port
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Pointing our server to a series of "route" files
// require("./routes/apiRoutes")(app);
require("./routes/routes")(app);

// Activating our server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });