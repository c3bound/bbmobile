//
// hello-mongoose: MongoDB with Mongoose on Node.js example on Heroku.
// Mongoose is a object/data mapping utility for the MongoDB database.
//

// by Ben Wen with thanks to Aaron Heckmann

//
// Copyright 2015 ObjectLabs Corp.  
// ObjectLabs operates MongoLab.com a MongoDb-as-a-Service offering
//
// MIT Licensed
//

// Permission is hereby granted, free of charge, to any person
// obtaining a copy of this software and associated documentation files
// (the "Software"), to deal in the Software without restriction,
// including without limitation the rights to use, copy, modify, merge,
// publish, distribute, sublicense, and/or sell copies of the Software,
// and to permit persons to whom the Software is furnished to do so,
// subject to the following conditions:  

// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software. 

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
// NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
// BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
// CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE. 

//
// Preamble

var mongodb = require("mongodb");

var MONGODB_URI = "mongodb://216.150.149.11:27017", // Make sure to replace that URI with the one provided by MongoLab
    BlackBoxBeta,
    AlertStreamNasdaq;

mongodb.MongoClient.connect(MONGODB_URI, function (err, database) {
  if (err) throw err;
  db = database;
  users = db.collection("AlertStreamNasdaq");
  var server = app.listen(process.env.PORT || 3000);
  console.log("Express server started on port %s", server.address().port);
});

users.find().toArray(function (err, results) {
  // Do something
});