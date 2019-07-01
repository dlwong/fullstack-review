import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }

  componentDidMount(){
    axios.get('/repos', {
    })
    .then((response) => { //{repos}
      this.setState({repos: response.data}) //this.setState({repos,})
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  search (term) {
    console.log(`${term} was searched`);

    axios.post('/repos', {
      username: term
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));