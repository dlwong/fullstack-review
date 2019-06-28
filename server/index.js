const express = require('express');
let app = express();
let port = 1128;

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

var githubHelper = require('../helpers/github.js');


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  githubHelper.getReposByUsername(req.body.username, function(apiResponse){console.log(apiResponse)})
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});





