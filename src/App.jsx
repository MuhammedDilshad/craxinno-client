import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import UserDataDisplay from "./Pages/UserDataDisplay/UserDataDisplay.jsx";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user/:userId" element={<UserDataDisplay />} />
      </Routes>
    </div>
  );
}

export default App;
