import React, { Component } from "react";
import "./ChatHistory.scss";
import ChatMessage from "../ChatMessage";

class ChatHistory extends Component {

    render() {
        const messages = this.props.chatHistory.map(msg => (
            <ChatMessage message={msg.data}/>
        ));

        return (
            <div className="ChatHistory">
                <h2>Historial del chat</h2>
                {messages}
            </div>
        );
    }
}

export default ChatHistory;