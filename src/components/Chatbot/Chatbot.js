import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import "./Chatbot.css";

const Chatbot = ({toggle}) => {

  const [messages, setMessages] = useState(() => {
    // Load messages from local storage on component mount
    const storedMessages = localStorage.getItem("chatMessages");
    return storedMessages ? JSON.parse(storedMessages) : [];
  });
  const [input, setInput] = useState("");
  
  const socket = io("http://localhost:4000"); // Update with your backend URL
  const messagesEndRef = useRef(null);
  useEffect(() => {
    // Event listener to receive messages from the server
   
    socket.on("res_message", (message) => {
      console.log(message);
      setMessages((prevMessages) => [...prevMessages, message]);
    });
    scrollToBottom();

    // Clean up function to close socket connection
    // return () => {
    //   socket.disconnect();
    // };
  }, [socket]);
  
  useEffect(() => {
    // Save messages to local storage whenever messages state changes
    localStorage.setItem("chatMessages", JSON.stringify(messages));
  }, [messages]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const sendMessage = () => {
    if (input.trim() !== "") {
      // Emit message to server
      socket.emit("message", input);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: input, sender: "user" },
      ]);
      setInput("");
    }
  };

  return (
    <div className="chatbot">
      <div className="header">
        <div className="top">Chatbot</div>
        <div onClick={sendMessage} className="cross">
          <img
            onClick={toggle}
             className="cross_image"
            src="../../../cross.png"
            alt="Example_Image"
          />
        </div>
      </div>

      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="input">
        <input
          className="input-box"
          type="text"
          value={input}
          placeholder="Write your message here"
          onChange={(e) => setInput(e.target.value)}
        />

        <div onClick={sendMessage} className="image-container">
          <img className="send" src="../../../send_1.png" alt="Example Image" />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
//  <button onClick={sendMessage}>Send</button>