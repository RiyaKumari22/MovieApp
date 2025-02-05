import React, { useState } from 'react';
import Movies from './Movies';
import './Home.css';
import Search from './Search';

function Home() {
  const [isChatbotVisible, setIsChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setIsChatbotVisible(!isChatbotVisible);
  };

  return (
    <>
      <div>
        <Search />
        <Movies />

        {/* Button to toggle chatbot visibility */}
        <button 
          id="chatbot-btn" 
          className="chatbot-btn"
          onClick={toggleChatbot}
        >
          Chat
        </button>

        {/* Chatbot iframe container */}
        {isChatbotVisible && (
          <div id="chatbot-container" className="chatbot-container">
            <iframe
              src="https://www.chatbase.co/chatbot-iframe/lkOnzr3d2Ybc_iGkFPyfs"
              width="100%"
              height="500px"
              frameBorder="0"
            ></iframe>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
