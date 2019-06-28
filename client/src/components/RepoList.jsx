import React from 'react';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
      <ul>
        {props.repos.map(repo => {
          return <li key={repo._id}>name:{repo.username+', url:'+repo.url+', forks: '+repo.forks}</li>
        })}
      </ul>
    There are {props.repos.length} repos.
  </div>
)

export default RepoList;