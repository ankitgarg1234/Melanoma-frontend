import React, { useState } from "react";
import Chatbot from "./Chatbot";
import "./Bot.css";

const Bot = () => {
  const [isOpen, setIsOpen] = useState(false);
   const [messages, setMessages] = useState([]);
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="app">
      {!isOpen && (
        <img
          className="chatbot-toggle"
          onClick={toggleChatbot}
          alt=""
          src="../../../chatbot.png"
        />
      )}
      {isOpen && <Chatbot toggle={toggleChatbot} />}
    </div>
  );
};

export default Bot;
// <button className="chatbot-toggle" onClick={toggleChatbot}>
//   {isOpen ? "Close Chatbot" : "Open Chatbot"}
// </button>;