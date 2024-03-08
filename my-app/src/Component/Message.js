import React from 'react';
import '../Styles/styles.css';

const Message = ({ message }) => {
  return (
    <div className="message">
      <div>{message.user}</div>
      <div>{message.timestamp}</div>
      <div>{message.content}</div>
    </div>
  );
};

export default Message;
