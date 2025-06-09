import React from "react";
import "../Component.css";


const right_sidebar = () => {
  const userProfile = {
    name: "Alice",
    avatar: "/avatars/alice-large.jpg",
    status: "Hey there, I am using ChatApp",
  };

  const mediaImages = [
    "/media/image1.jpg",
    "/media/image2.jpg",
    "/media/image3.jpg",
    // add more image URLs
  ];

  return (
    <div className="right-sidebar">
      <div className="profile-section">
        <img
          src={userProfile.avatar}
          alt={userProfile.name}
          className="profile-image"
        />
        <h2 className="profile-name">{userProfile.name}</h2>
        <p className="profile-status">{userProfile.status}</p>
      </div>

      <div className="media-section">
        <h3 className="media-heading">Media</h3>
        <div className="media-grid">
          {mediaImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`media-${idx}`}
              className="media-image"
            />
          ))}
        </div>
      </div>

      <button className="logout-button">Logout</button>
    </div>
  );
};

export default right_sidebar;
