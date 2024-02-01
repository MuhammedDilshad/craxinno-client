import { useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import SignUp from "./Pages/SignUp/SignUp.jsx";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     console.log("Token:", token);

  //     const decodedUser = jwt_decode(token);
  //     console.log("Decoded User:", decodedUser);

  //   } else {
  //     console.log("No token found");
  //   }
  // }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
