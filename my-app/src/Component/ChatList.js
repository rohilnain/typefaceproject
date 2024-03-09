import React from 'react';
import '../Styles/styles.css';

const ChatList = ({ chats, onSelectChat, onDeleteChat }) => {
  return (
    <div>
      <div className="chat-list-title">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpl4g5EDxHpiW7Sa1-yJ8XDA2DTEkMbNhBnQ&usqp=CAU" alt="App Logo" className="app-logo" />
        <h1>ConnectOne App</h1>
      </div>

      <div className="chat-list">
        {chats.map(chat => (
          <div key={chat.id}>
            <span onClick={() => onSelectChat(chat.id)}>{chat.name}</span>
            <button onClick={() => onDeleteChat(chat.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
