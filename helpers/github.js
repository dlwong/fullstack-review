const request = require('request');
const config = require('../config.js');


let getReposByUsername = (username, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com/users/'+username+'/repos',
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options,function diff(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      var repoURL = info.map(x => {
          return {username:x.owner.login, url:x.url,forks:x.forks_count}
      })
      callback(repoURL);
    }
  });

};

//getReposByUsername('dlwong', function(apiResponse){console.log(apiResponse)})

module.exports.getReposByUsername = getReposByUsername;