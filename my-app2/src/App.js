import "./App.css";
import Records from "./records.json";
import { useState } from "react";
import "./NavBar.css";

function App() {
  const [activeSection, setActiveSection] = useState("");
  const handleactivesection = (section) => {
    setActiveSection(section === activeSection ? "" : section);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>My Website</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a onClick={() => handleactivesection("home")} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={() => handleactivesection("about")} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={() => handleactivesection("kpi")} href="#kpi">
              KPI's
            </a>
          </li>
        </ul>
      </nav>
      <h2 style={{ textAlign: "center" }}>
        Welcome to Copart India Center(CIC)!!!
      </h2>
      {activeSection === "home" && (
        <section id="home" style={{ textAlign: "center" }}>
          <h2>Home Section</h2>
          <p>Welcome to the home section</p>
        </section>
      )}
      {activeSection === "about" && (
        <section
          onClick={() => handleactivesection("about")}
          id="about"
          style={{ textAlign: "center" }}
        >
          <h2>About Mihub</h2>
          <p>
            MiHub is a reporting suite developed by Copart, primarily integrated
            with their claims management system, ClaimHub. MiHub provides
            Copart's customers, such as insurers, with real-time insights into
            their total loss claims at both the case and macro levels. It
            enables seamless tracking of claims, offering transparency
            throughout the process, with features like claim history, document
            storage, and time-stamped activity logs. This tool is part of
            Copart's broader digital strategy to improve efficiency and reduce
            administration time for customers by offering integrated solutions​
          </p>
        </section>
      )}
      {activeSection === "kpi" && (
        <section onClick={() => handleactivesection("kpi")} id="kpi">
          <div className="main">
            {Records &&
              Records.map((record) => {
                return (
                  <div className="kpi" key={record.id}>
                    {record.id}
                    <br />
                    {record.title}
                    <br />
                    {record.version}
                    <br />
                    {record.content}
                    <br />
                    <div className="values">
                      <span className="left">Yesterday</span>
                      <span className="middle">Today</span>
                      <span className="right">Tomorrow</span>
                      <br />
                      {record.num.map((data) => {
                        return (
                          <span className="left" key="{record.id}">
                            {data.yesterday}
                          </span>
                        );
                      })}
                      {record.num.map((data) => {
                        return (
                          <span className="middle" key="{record.id}">
                            {data.today}
                          </span>
                        );
                      })}
                      {record.num.map((data) => {
                        return (
                          <span className="right" key="{record.id}">
                            {data.tomorrow}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
