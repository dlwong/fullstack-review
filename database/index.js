const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher'); //fetcher is our db

//create schema
let repoSchema = mongoose.Schema({
  username:  String,
  url: {type: String, unique: true},
  forks:   Number
});

//create model/table
let Repo = mongoose.model('Repo', repoSchema);

//document/record
// var user1 = new Repo({username: 'test', url: 'test' , forks: 1})

let mongoSave = (data, callback) => {
  Repo.insertMany(data, callback);
}

let mongoQuery = callback => {
    let query = Repo.find().sort({ forks: 'desc'}).limit(25)
        query.exec(function (err, docs) {
          callback(docs)
         });
}


module.exports.save = mongoSave;
module.exports.query = mongoQuery;