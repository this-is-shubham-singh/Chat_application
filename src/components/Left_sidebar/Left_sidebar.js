import React, { useState } from "react";
import "../Component.css";

const Left_sidebar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const users = [
    {
      id: 1,
      name: "Alice",
      lastMessage: "Hey! How are you?",
      avatar: "/avatars/alice.jpg",
    },
    {
      id: 2,
      name: "Bob",
      lastMessage: "Let's catch up later.",
      avatar: "/avatars/bob.jpg",
    },
    // Add more users as needed
  ];

  return (
    <div className="left-sidebar">
      <div className="left-header">
        <h2 className="chatapp-title">ChatApp</h2>
        <div
          className="three-dots"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          &#8942;
          {showDropdown && (
            <div className="dropdown-menu">
              <button className="dropdown-item">Edit Profile</button>
              <button className="dropdown-item">Logout</button>
            </div>
          )}
        </div>
      </div>

      <input
        type="search"
        className="search-bar"
        placeholder="Search"
        aria-label="Search users"
      />

      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-item">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <div className="user-info">
              <p className="user-name">{user.name}</p>
              <p className="user-last-message">{user.lastMessage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Left_sidebar;
