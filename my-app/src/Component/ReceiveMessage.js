import  { useEffect } from 'react';

const ReceiveMessage = ({ chats, selectedChat, setChats }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!selectedChat) return;

      const updatedChats = chats.map(chat => {
        if (chat.id === selectedChat) {
          return {
            ...chat,
            messages: [
              ...chat.messages,
              { id: Date.now(), user: 'Friend', timestamp: new Date().toLocaleString(), content: 'This is a received message.' }
            ]
          };
        }
        return chat;
      });

      setChats(updatedChats);
    }, 5000);

    return () => clearInterval(intervalId); 
  }, [chats, selectedChat, setChats]);

  return null; 
};

export default ReceiveMessage;
 