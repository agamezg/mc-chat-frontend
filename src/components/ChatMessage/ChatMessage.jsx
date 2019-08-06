import React, { Component } from "react";
import "./ChatMessage.scss";

class ChatMessage extends Component {
    constructor(props) { 
        super(props);
        let temp = JSON.parse(this.props.message);
        this.state = {
            message: temp
        };
    }

    render() {
        return (
            <div className="ChatMessage">{this.state.message.body}</div>);
    }
}

export default ChatMessage