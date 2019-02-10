import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NewUserForm from './NewUserForm';
import MainForm from './AdventureGame';
import { Container } from 'semantic-ui-react'

class App extends Component {
  constructor(props){
    super(props);
    this.showUserForm = this.showUserForm.bind(this);
    this.state = {
            users: [], 
            characters:[],
            showForm: false
    };
  }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));

    fetch('/characters')
      .then(res => res.json())
 //     .then(characters => this.setState({characters}));
  }
  showUserForm(){
    this.setState({showForm: !this.state.showForm})
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

        <Container textAlign='center'>
          {this.state.showForm ? 
            null : <button onClick={this.showUserForm}>Get Started</button>
          }
          {this.state.showForm ? 
            <MainForm/> : null
          }
        </Container>
        
        <p>hi {String(this.state.showForm)}</p>

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
