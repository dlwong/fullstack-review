var githubHelper = require('../helpers/github.js');
var db = require('../database/index.js');

const express = require('express');
let app = express();
let port = 1128;

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());


app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


app.post('/repos', function (req, res) {
   githubHelper.getReposByUsername(req.body.username, apiResponse => {
      db.save(apiResponse, (err, info) => {
        if (err) console.log(err)
        res.send('server done')
      })
  })
});


app.get('/repos', function (req, res) {
  db.query(data => res.send(data));
});





