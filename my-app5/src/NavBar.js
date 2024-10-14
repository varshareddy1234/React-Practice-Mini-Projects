import React from "react";
import InfoIconTooltip from "./tooltip.js";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">Mi-hub</div>
      <div className="navbar-right">
        <InfoIconTooltip titlefortooltip="Information about the Mihub" />
        <span className="navbar-lang">USA/CAN | English</span>
        <div className="navbar-user">
          <img src=".\user.jpg" alt="User" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
