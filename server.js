var express = require("express");
var exphbs = require("express-handlebars");
// var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


var PORT = 3000;

//Initialize Express
var app = express();

var routes = require("./routes");

//Morgan Logger
// app.use(logger("dev"));
// Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect Handlebars to Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes);


//Connection to MongoDB
// mongoose.connect("mongodb://localhost/formula1Scraper", { useNewUrlParser: true });
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/formula1Scraper";
                        //mongodb://ds227243.mlab.com:27243/heroku_tsmczwtx;
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// mongoose.Promise = Promise;
// mongoose.connect(MONGODB_URI);



app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
});

