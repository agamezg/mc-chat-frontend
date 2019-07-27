import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect, sendMsg } from './api';

class App extends Component {
  
  constructor(props){
    super(props);
    connect()
  }

  send() {
    console.log("hello");
    sendMsg("hello")
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={this.send}>Pegále boludo</button>
        </header>
      </div>
    );
  }
}

export default App;
