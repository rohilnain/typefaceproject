import React, { useState } from 'react';
import ChatList from './Component/ChatList';
import ChatWindow from './Component/ChatWindow';
import ReceiveMessage from './Component/ReceiveMessage';
import SendMessage from './Component/SendMessage';
import './App.css';

function App() {
  const [chats, setChats] = useState([
    { id: 1, name: 'Chat 1', messages: [] },
    { id: 2, name: 'Chat 2', messages: [] },
    { id: 3, name: 'Chat 3', messages: [] }
  ]);
  const [selectedChat, setSelectedChat] = useState(null);

  const handleSelectChat = (chatId) => {
    setSelectedChat(chatId);
  };

  const handleDeleteChat = (chatId) => {
    setChats(chats.filter(chat => chat.id !== chatId));
    setSelectedChat(null);
  };

  return (
    <div className="app">
      <div className="sidebar">
        <ChatList
          chats={chats}
          onSelectChat={handleSelectChat}
          onDeleteChat={handleDeleteChat}
        />
      </div>
      <div className="main-content">
        <ReceiveMessage chats={chats} selectedChat={selectedChat} setChats={setChats} />
        {selectedChat && (
          <>
            <h2>{chats.find(chat => chat.id === selectedChat).name}</h2>
            <div className="chat-window-container">
              <ChatWindow messages={chats.find(chat => chat.id === selectedChat).messages} />
            </div>
            <SendMessage selectedChat={selectedChat} chats={chats} setChats={setChats} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
