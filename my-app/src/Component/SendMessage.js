import React, { useState } from 'react';

function SendMessage({ selectedChat, chats, setChats }) {
  const [messageContent, setMessageContent] = useState('');

  const handleSendMessage = () => {
    if (messageContent.trim() !== '' && selectedChat !== null) {
      const updatedChats = chats.map(chat => {
        if (chat.id === selectedChat) {
          return {
            ...chat,
            messages: [...chat.messages, { id: Date.now(), user: 'Me', timestamp: new Date().toLocaleString(), content: messageContent }]
          };
        }
        return chat;
      });
      setChats(updatedChats);
      setMessageContent('');
    }
  };

  return (
    <div className="send-message-container">
      <input
        type="text"
        value={messageContent}
        onChange={(e) => setMessageContent(e.target.value)}
        placeholder="Type a message..."
        className="message-input"
      />
      <button onClick={handleSendMessage} className="send-button">Send</button>
    </div>
  );
}

export default SendMessage;
