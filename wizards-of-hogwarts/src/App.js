import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {users: [], characters:[]}
  
  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));

    fetch('/characters')
      .then(res => res.json())
      .then(characters => this.setState({characters}));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <h1>Users</h1>
        {this.state.users.map
          (user => <div key={user.id}>{user.name}</div>)
        }

        <h1>Characters</h1>
        {this.state.characters.map
          (char => <div key={char.id}>{char.name}</div>)
        }
      </div>
    );
  }
}

export default App;
