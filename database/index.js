const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

//create schema
let repoSchema = mongoose.Schema({
  username:  String,
  url: String,
  forks:   Number
});

//create model
let Repo = mongoose.model('Repo', repoSchema);

let save = (data, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.insertMany([{username: 'test', url: 'test' , forks: 1},{username: 'test1', url: 'test1' , forks: 1}], (err) => callback(err))
}

module.exports.save = save;