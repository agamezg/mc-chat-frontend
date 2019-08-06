import React, { Component } from 'react';
import './App.css';
import { connect, sendMsg } from './api';
import Header from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {chatHistory: []}
  }
  
  send() {
    console.log("hello");
    sendMsg("te quiero ana")
  }

  componentDidMount() {
    connect((msg) => {
      console.log("Nuevo mensaje")
      this.setState(prevState => ({
        chatHistory: [...this.state.chatHistory, msg]
      }))
      console.log(this.state);
    });
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ChatHistory chatHistory={this.state.chatHistory} />
        <button onClick={this.send}>Pegále boludo</button>
      </div>
    );
  }
}

export default App;
