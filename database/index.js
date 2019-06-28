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
  // This function should save a repo or repos to
  // the MongoDB

  Repo.insertMany(data, callback) ;

}

let mongoQuery = (callback) => {
  // This function should save a repo or repos to
  // the MongoDB

  // Repo.find({}, (err, data) => {
  //   callback(data);
  // });

  var query = Repo.find({}).sort({ forks: 'desc'}).limit(15)
query.exec(function (err, docs) {
  callback(docs)
});

}

//var db = mongoose.connection;

module.exports.save = mongoSave;
module.exports.query = mongoQuery;