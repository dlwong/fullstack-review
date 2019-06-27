const express = require('express');
let app = express();
let port = 1128;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

var Model = require('../helpers/github.js');

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  Model.save(req.body, (err) => {
    if (err) res.send('not okay')
    res.send('okay')
  })

});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});





