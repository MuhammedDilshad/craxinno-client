import React, { useEffect } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import PersonalData from "../../Components/PersonalData/PersonalData";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      navigate("/");
    }
  }, []);
  return (
    <div className="h-screen bg-white">
      <NavBar />
      <PersonalData />
    </div>
  );
}

export default Home;
