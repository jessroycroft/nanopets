const express = require('express');
const app = express();
const path = require('path');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/nanopets');

const pets = require('./pet/controller');

app.get('/api/nanopets', pets.listPets);

// This serves all files placed in the /public
// directory (where gulp will build all React code)
app.use(express.static('public'));

// Also serve everything from our assets directory (static
// assets that you want to manually include)
app.use(express.static('assets'));

// Include your own logic here (so it has precedence over the wildcard
// route below)

app.get('/api/nanopets:id', pets.playPet);

// This route serves your index.html file (which
// initializes React)
app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname,'index.html'));
});

// Start your server, and listen on port 8080.
app.listen(8080, function() {
  console.log("App is now listening on port 8080!");
})
