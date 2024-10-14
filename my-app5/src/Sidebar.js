import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="icons">
        <img className="mihub_icon" src="./mihub.svg" alt="mihub_logo" />
        {/* <img className="home_icon" src="./home.png" alt="Home" /> */}
      </div>
    </div>
  );
};

export default Sidebar;
