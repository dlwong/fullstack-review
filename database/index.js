const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher'); //fetcher is our db

//create schema
let repoSchema = mongoose.Schema({
  username:  String,
  url: String,
  forks:   Number
});

//create model/table
let Repo = mongoose.model('Repo', repoSchema);

//document/record
// var user1 = new Repo({username: 'test', url: 'test' , forks: 1})


//   user1.save((err, data) => {
//     if (err) return console.error(err);
//     console.log(data)
//   })


let mongoSave = (data, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB

  Repo.insertMany(data, callback) ;

}

var db = mongoose.connection;

module.exports.save = mongoSave;