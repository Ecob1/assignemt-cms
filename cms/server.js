// Get dependencies
var express = require("express");
var path = require("path");
var http = require("http");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// import the routing file to handle the default (index) route
var index = require("./server/routes/app");

// ... ADD CODE TO IMPORT YOUR ROUTING FILES HERE ...
const messageRoutes = require("./server/routes/messages");
const contactRoutes = require("./server/routes/contacts");
const documentRoutes = require("./server/routes/documents");

var app = express(); // create an instance of express

// Tell express to use the following parsers for POST data
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use(logger("dev")); // Tell express to use the Morgan logger

// Add support for CORS // There's a "cors" package for that...
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Tell express to use the specified director as the
// root directory for your web site
// console.log(__dirname);
app.use(express.static(path.join(__dirname, "dist/cms/browser")));

// Tell express to map the default route ('/') to the index route
app.use("/", index);
app.use("/contacts", contactRoutes);
app.use("/documents", documentRoutes);
app.use("/messages", messageRoutes);

// ... ADD YOUR CODE TO MAP YOUR URL'S TO ROUTING FILES HERE ...

// Tell express to map all other non-defined routes back to the index page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/cms/browser/index.html"));
});

// Define the port address and tell express to use this port
const port = process.env.PORT || "3000";
app.set("port", port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, function () {
  console.log("API running on: http://localhost:" + port + "/");
});

// establish a connection to the mongo database
// var db = mongoose
//   .connect(
//     "mongodb+srv://Ecob1576:Guero0304@cluster0.chgwpy6.mongodb.net/cms",
//     { useNewUrlParser: true }
//     // (err, res) => {
//     //   if (err) {
//     //     console.log("Connection failed: " + err);
//     //   } else {
//     //     console.log("Connected to database!");
//     //   }
//     // }
//   )
//   .then((res) => {
//     //if succeded do this block of code
//     console.log("Connected to database!");;
//   })
//   .catch((err) => {
//     console.log("Connection failed: " + err);
//     //catch error
//   });
//   var data = mongoose.db.collection('messages').find("id:1");
//   console.log(data);
mongoose
  .connect(
    "mongodb+srv://Ecob1576:Guero0304@cluster0.chgwpy6.mongodb.net/cms",
    function(err, db){
      if (err) console.log("Connection failed: " + err);
      console.log("Connected to database");
      var data = db.collection('messages').find({id:"1"});

data.forEach(element => {
  element.sender = "Jeff";
 
    console.log(element);
});
      // db.close();
    });