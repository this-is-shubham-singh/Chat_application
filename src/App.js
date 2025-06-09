import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Chat from "./pages/chat/Chat";
import Profile_update from "./pages/profile_update/Profile_update";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="profile" element={<Profile_update />} />
      </Routes>
    </div>
  );
};

export default App;
