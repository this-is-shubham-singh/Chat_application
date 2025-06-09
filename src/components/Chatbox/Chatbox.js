import React from "react";
import "../Component.css";

const Chatbox = () => {
  const messages = [
    {
      id: 1,
      type: "user", // "user" or "me"
      text: "Hello! How are you?",
      time: "10:00 AM",
      avatar: "/avatars/alice.jpg",
    },
    {
      id: 2,
      type: "me",
      text: "I’m good, thanks! What about you?",
      time: "10:02 AM",
      avatar: "/avatars/me.jpg",
    },
    // add more messages here
  ];

  const chattingWith = {
    name: "Alice",
    avatar: "/avatars/alice.jpg",
  };

  return (
    <div className="center-chat">
      {/* Top Header */}
      <div className="center-header">
        <img
          src={chattingWith.avatar}
          alt={chattingWith.name}
          className="chatting-avatar"
        />
        <h2 className="chatting-name">{chattingWith.name}</h2>
      </div>

      {/* Chat Messages */}
      <div className="chat-box">
        {messages.map((msg) =>
          msg.type === "user" ? (
            <div key={msg.id} className="message user-message">
              <img src={msg.avatar} alt="User" className="message-avatar" />
              <div>
                <p className="message-text">{msg.text}</p>
                <p className="message-time">{msg.time}</p>
              </div>
            </div>
          ) : (
            <div key={msg.id} className="message me-message">
              <div>
                <p className="message-text">{msg.text}</p>
                <p className="message-time">{msg.time}</p>
              </div>
              <img src={msg.avatar} alt="Me" className="message-avatar" />
            </div>
          )
        )}
      </div>

      {/* Footer */}
      <div className="chat-footer">
        <input
          type="text"
          placeholder="Type a message..."
          className="chat-input"
        />
        <button className="icon-button" aria-label="Attach image">
          📷
        </button>
        <button className="icon-button" aria-label="Send message">
          ➤
        </button>
      </div>
    </div>
  );
};

export default Chatbox;
