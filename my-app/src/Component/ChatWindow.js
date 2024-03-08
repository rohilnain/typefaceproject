// ChatWindow component
import React from 'react';
import Message from './Message';

const ChatWindow = ({ messages }) => {
  return (
    <div className="chat-window">
      {messages.map(message => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default ChatWindow;
