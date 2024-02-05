import React, { useEffect, useState } from "react";
import { Bs1Circle } from "react-icons/bs";
import { Bs2Circle } from "react-icons/bs";
import { IoMdAlert } from "react-icons/io";
import { personalInfo } from "../../Api/UserRegister.js";
import { useNavigate } from "react-router-dom";

function PersonalData() {
  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const [initialvalues, setInitialvalues] = useState({
    gender: "",
    fullname: "",
    date: "",
    address: "",
    addresslength: "",
    textdetails: "",
    employment: "",
    savings: "",
  });
  const handleChange = (e) => {
    setInitialvalues({ ...initialvalues, [e.target.name]: e.target.value });
  };
  const containerStyle = {
    backgroundColor: show ? "blue" : "gray",
  };

  const handleSubmitForm1 = (e) => {
    setShow((prev) => !prev);
  };

  const handleSubmitForm2 = async (e) => {
    e.preventDefault();
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      const userId = storedUser ? storedUser._id : null;

      if (!userId) {
        console.error("User ID not found in local storage.");
        return;
      }

      const requestPayload = {
        ...initialvalues,
        userId: userId,
      };

      const response = await personalInfo(requestPayload);
      console.log(response.data, "Log the entire response object");

      navigate(`/user/${userId}`);
    } catch (error) {
      console.error("Error submitting form:", error);

      alert("An error occurred while submitting the form. Please try again.");
    }
  };

  return (
    <div className="flex justify-center p-10 bg-white">
      <div>
        <div className="flex flex-row justify-center gap-5 pb-5 ">
          <Bs1Circle
            style={{ backgroundColor: show ? "blue" : "white" }}
            className="rounded-1 radious text-black"
          />
          <Bs2Circle
            style={{ backgroundColor: !show ? "blue" : "white" }}
            className="text-black"
          />
        </div>
        {show ? (
          <div>
            <form>
              <div>
                <div className="text-center pb-9">
                  <strong className="text-black text-3xl">
                    Personal information
                  </strong>
                  <p className="text-gray-600">
                    Please answer questions as accurately as possible.
                  </p>
                </div>
                <div>
                  <div className="text-black">
                    <div className="flex gap-5">
                      <select
                        id="gender"
                        value={initialvalues.gender}
                        name="gender"
                        onChange={handleChange}
                        className="rounded-lg border p-4 border-gray-600 text-gray-500 bg-white "
                      >
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                      </select>
                      <input
                        type="text"
                        name="fullname"
                        value={initialvalues.fullname}
                        onChange={handleChange}
                        placeholder="Full Name as per your passport"
                        className="rounded-lg border p-4 border-gray-600 text-gray-500 bg-white "
                      />
                    </div>
                    <div className="flex flex-col gap-5 pt-5">
                      <input
                        onChange={handleChange}
                        value={initialvalues.date}
                        className="rounded-lg border p-4 border-gray-600 text-gray-500 bg-white "
                        type="date"
                        name="date"
                        placeholder="Date of birth"
                      />
                      <input
                        onChange={handleChange}
                        value={initialvalues.address}
                        className="rounded-lg border p-4 border-gray-600 text-gray-500 bg-white "
                        type="text"
                        name="address"
                        placeholder="Current address"
                      />
                      <input
                        onChange={handleChange}
                        type="text"
                        name="addresslength"
                        value={initialvalues.addresslength}
                        className="rounded-lg border p-4 border-gray-600 text-gray-500 bg-white "
                        placeholder="How long have you lived at this address?"
                      />
                      <textarea
                        onChange={handleChange}
                        value={initialvalues.textdetails}
                        name="textdetails"
                        className="rounded-lg border p-4 border-gray-600 text-gray-500 bg-white"
                        placeholder="Tell us a bit about yourself (what are you like as a person, do you have any hobbies, etc.)"
                      ></textarea>
                    </div>
                    <div className="flex flex-row text-gray-600 mt-5">
                      <IoMdAlert />
                      <p className="text-center whitespace-pre-line pl-3">
                        All information can be edited once you have created your
                        account.
                      </p>
                    </div>
                    <button
                      onClick={handleSubmitForm1}
                      className="rounded-lg p-4 cursor-pointer text-white bg-blue-500 w-full mt-5"
                    >
                      Save and continue
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div className="text-center pb-9">
              <strong className="text-black text-3xl">
                Financial information
              </strong>
              <p className="text-gray-600">
                All your information is stored securely.
              </p>
            </div>
            <form onSubmit={handleSubmitForm2}>
              <div className="flex flex-col gap-5">
                <select
                  onChange={handleChange}
                  value={initialvalues.employment}
                  placeholder="What is your current employment status?"
                  id="employment"
                  name="employment"
                  className="rounded-lg border p-4 border-gray-600 text-gray-500 bg-white "
                >
                  <option value="">
                    What is your current employment status?
                  </option>
                  <option value="working">working</option>
                  <option value="Not working">Not working</option>
                </select>
                <input
                  onChange={handleChange}
                  type="text"
                  name="savings"
                  value={initialvalues.savings}
                  className="rounded-lg border p-4 border-gray-600 text-gray-500 bg-white "
                  placeholder="Additional savings/investments"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg p-4 cursor-pointer text-white bg-blue-500 w-full mt-5"
              >
                Save and continue
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default PersonalData;
