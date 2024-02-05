import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getUserData } from "../../Api/UserRegister.js";

function UserDataDisplay() {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserData(userId);
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleShowForm = () => {
    setShowForm(true);
  };

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white  flex justify-center">
      {!showForm ? (
        <Link to="#" onClick={handleShowForm}>
          Show Form
        </Link>
      ) : (
        <div>
          <div className="pb-5 text-3xl">
            <h1>User Form</h1>
          </div>

          <div className="text-white flex flex-col gap-3">
            <strong>Full Name:{userData.fullname}</strong>
            <strong>Gender:{userData.gender}</strong>
            <strong>Address:{userData.address}</strong>
            <strong>
              How Long You Have Been Here:{userData.addresslength}
            </strong>
            <strong>Employment:{userData.employment}</strong>
            <strong>Savings:{userData.savings}</strong>
            <strong>Details:{userData.textdetails}</strong>
            <strong>Date :{userData.date}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserDataDisplay;
