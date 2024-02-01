import React from "react";
import { BsQuestionCircle } from "react-icons/bs";
import Maskgroup from "../../imgs/Maskgroup.png";
import Vectors from "../../imgs/Vector-1.png";
import Vector from "../../imgs/Vector.png";

function NavBar() {
  return (
    <div className="flex justify-between bg-white px-9 py-5 border-b border-orange-900">
      <div className="flex">
        <div className="flex">
          <img src={Vector} alt="" />
          <img className=" pt-2" src={Vectors} alt="" />
        </div>
        <div className=" pl-2">
          <img src={Maskgroup} alt="" />
        </div>
      </div>
      <div className="text-black text-xl">
        <BsQuestionCircle />
      </div>
    </div>
  );
}

export default NavBar;
