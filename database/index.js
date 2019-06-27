const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher'); //fetcher is our db

//create schema
let repoSchema = mongoose.Schema({
  username:  String,
  url: String,
  forks:   Number
});

//create model
let Repo = mongoose.model('Repo', repoSchema);

var user1 = new Repo({username: 'test', url: 'test' , forks: 1}) //document
user1.save((err, data) => {
  if (err) return console.error(err);
  console.log(data)
})

user1.find({ username: 'test'},(err,result)=> {
  console.log(result)
})




let save = (data, callback) => {

  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  Repo.insertMany([{username: 'test', url: 'test' , forks: 1},{username: 'test1', url: 'test1' , forks: 1}], (err) => callback(err))

}

var db = mongoose.connection;

module.exports.save = save;