const request = require('request');
const config = require('../config.js');


let getReposByUsername = (username, callback) => {

  let options = {
    url: `https://api.github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  request.get(options,(error, response, body) => {
    if (!error && response.statusCode == 200) {
      var info = JSON.parse(body);
      var repoURL = info.map(x => ({username:x.owner.login, url:x.html_url,forks:x.forks_count}));
      callback(repoURL);
    }
  });
};

module.exports.getReposByUsername = getReposByUsername;