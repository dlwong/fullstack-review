const request = require('request');
const config = require('../config.js');

let getReposByUsername = (username) => {
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

  function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      var repoURL = info.map(x => {
          return {url:x.url,forks:x.forks_count}
      })
      console.log(repoURL);
      //console.log(info.stargazers_count + " Stars");
      //console.log(info.forks_count + " Forks");
    }
  }

  request.get(options,callback);

}

getReposByUsername('dlwong')

module.exports.getReposByUsername = getReposByUsername;