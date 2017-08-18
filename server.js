var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var path = require("path");

// Require History Schema
var Article = require("./models/Article");

// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)

//TODO: check path
if (process.env.MONGODB_URI || process.env.NODE_ENV === 'production') mongoose.connect(process.env.MONGODB_URI);
else mongoose.connect("mongodb://localhost/addmern");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------
//entry route
app.get("/", function(req, res) {
  console.log('should be showing index page ... 1')
  res.sendFile(__dirname + "/public/index.html");
});

// route to show saved articles 
app.get("/api/saved", function(req, res) {
  Article.find({}, (err, docs) => {
    if (err) throw err; 
    res.json(docs);
  })
});

//route to save new articles 
app.post("/api/saved", function(req, res) {
  console.log(req.body);
  var entry = new Article (req.body);
  entry.save((err, doc) => {
    if (err) throw err; 
    console.log(`created new doc ${doc}`)
    res.json(doc);
  })
});

//route to delete an article
app.delete("/api/saved/:id", function(req, res){
  console.log(`trying to delete article with id ${id}`)
  Article.findByIdAndRemove(req.params.id, (err, whatevs) => {
    if (err) throw err; 
    res.end();
  })
})

// -------------------------------------------------
app.get('*', function (request, response){
  console.log('should be showing index page ... 2')
  response.sendFile(__dirname + "/public/index.html")
})

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});



// -------------------------------------------------



//For react-router