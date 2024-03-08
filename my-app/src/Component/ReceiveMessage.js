import  { useEffect } from 'react';

const ReceiveMessage = ({ chats, selectedChat, setChats }) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!selectedChat) return;

      const updatedChats = chats.map(chat => {
        if (chat.id === selectedChat) {
          // Simulating a received message
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
    }, 5000); // Simulate receiving messages every 5 seconds

    return () => clearInterval(intervalId); // Cleanup function to clear interval on unmount
  }, [chats, selectedChat, setChats]);

  return null; // Since this component is responsible for side effects only, it doesn't render anything
};

export default ReceiveMessage;
