import React, { useState, useEffect, useRef } from "react";
import "../styles/GeneralInfo.css";
import { FaEdit } from "react-icons/fa";
import { useForm } from "./useFormHook";
import profImg from "./assest/profImg.jpg";

const GeneralInfo = () => {
  const displayInfo = () => {
    return (
        <div className="main-info">
          <img src={profImg} />
          <div>
            <h3>Elzodxon Sharofaddinov</h3>
            <p> Frontend Development Team Lead</p>
          </div>
        </div>
    );
  };

  return <div className="header__general-info">{displayInfo()}</div>;
};

export default GeneralInfo;
