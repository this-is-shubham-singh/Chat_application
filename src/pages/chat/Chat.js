import React from "react";
import "./Chat.css";
import { useState } from "react";
import Left_sidebar from "../../components/Left_sidebar/Left_sidebar";
import Right_sidebar from "../../components/right_sidebar/Right_sidebar";
import Chatbox from "../../components/Chatbox/Chatbox";

const Chat = () => {
  const [showDropdown, setShowDropdown] = useState(false);


   const users = [
    {
      id: 1,
      name: "Alice Johnson",
      lastMessage: "Hey! How are you?",
      avatar:
        "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      name: "Bob Smith",
      lastMessage: "Let's meet tomorrow.",
      avatar:
        "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 3,
      name: "Carol Lee",
      lastMessage: "Sent the documents.",
      avatar:
        "https://randomuser.me/api/portraits/women/22.jpg",
    },
  ];

  // Dummy messages for center chat
  const messages = [
    {
      id: 1,
      sender: "user",
      text: "Hi, how are you?",
      time: "10:00 AM",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 2,
      sender: "me",
      text: "I'm good, thanks! And you?",
      time: "10:01 AM",
      avatar: "https://randomuser.me/api/portraits/men/99.jpg",
    },
    {
      id: 3,
      sender: "user",
      text: "Doing well. Are we still on for today?",
      time: "10:03 AM",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ];

  // Dummy media images for right sidebar
  const mediaImages = [
    "https://placekitten.com/100/100",
    "https://placekitten.com/101/101",
    "https://placekitten.com/102/102",
    "https://placekitten.com/103/103",
    "https://placekitten.com/104/104",
    "https://placekitten.com/105/105",
  ];
  return (
    <div className="app-container">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <div className="left-header">
          <div className="chatapp-title">ChatApp</div>
          <div
            className="three-dots"
            onClick={() => setShowDropdown(!showDropdown)}
            aria-label="menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setShowDropdown(!showDropdown);
            }}
          >
            &#8942;
            {showDropdown && (
              <div className="dropdown-menu">
                <button
                  className="dropdown-item"
                  onClick={() => alert("Edit Profile")}
                >
                  Edit Profile
                </button>
                <button
                  className="dropdown-item"
                  onClick={() => alert("Logout")}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
        <input
          className="search-bar"
          type="search"
          placeholder="Search"
          aria-label="Search users"
        />
        <div className="users-list">
          {users.map((user) => (
            <div key={user.id} className="user-item">
              <img src={user.avatar} alt={user.name} className="user-avatar" />
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-last-message">{user.lastMessage}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Center Chat */}
      <div className="center-chat">
        <div className="center-header">
          <img
            className="chatting-avatar"
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Chat User"
          />
          <div className="chatting-name">Alice Johnson</div>
        </div>

        <div className="chat-box" aria-live="polite" aria-relevant="additions">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${
                msg.sender === "me" ? "me-message" : "user-message"
              }`}
            >
              <img
                src={msg.avatar}
                alt={msg.sender === "me" ? "Me" : "User"}
                className="message-avatar"
              />
              <div>
                <div className="message-text">{msg.text}</div>
                <div className="message-time">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>

        <form className="chat-footer" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="chat-input"
            placeholder="Type your message..."
            aria-label="Type your message"
          />
          <button
            type="button"
            className="icon-button"
            aria-label="Attach image"
          >
            📎
          </button>
          <button
            type="submit"
            className="icon-button"
            aria-label="Send message"
          >
            ➤
          </button>
        </form>
      </div>

      {/* Right Sidebar */}
      <div className="right-sidebar">
        <div className="profile-section">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="User Profile"
            className="profile-image"
          />
          <div className="profile-name">Alice Johnson</div>
          <div className="profile-status">Hey there, I am using ChatApp</div>
        </div>

        <div className="media-section">
          <div className="media-heading">Media</div>
          <div className="media-grid">
            {mediaImages.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Media ${idx + 1}`}
                className="media-image"
              />
            ))}
          </div>
        </div>

        <button
          className="logout-button"
          onClick={() => alert("Logout clicked")}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Chat;
