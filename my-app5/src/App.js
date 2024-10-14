import "./App.css";
import Records from "./records.json";
import NavBar from "./NavBar.js";
import Sidebar from "./Sidebar.js";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={`app ${theme}`}>
      <NavBar />
      <Sidebar />
      <h1>Copart</h1>
      <h2>Welcome to Mi-hub Navigation Portal</h2>
      <h3>
        (This portal helps you to navigate to all Dashboards and Reports of
        Sub-Sections)
      </h3>
      <button onClick={toggleTheme}>
        Switch to <br />
        {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <div className="content">
        {Records &&
          Records.map((record) => {
            return (
              <div className="kpi" key={record.id}>
                <h2>{record.title}</h2>
                <ul>
                  {record.content.map((data) => {
                    return (
                      <span key="{record.id}">
                        <li>
                          <a href="/about.html" target="_blank">
                            {data.a}
                          </a>
                        </li>
                      </span>
                    );
                  })}
                  {record.content.map((data) => {
                    return (
                      <span key="{record.id}">
                        <li>
                          <a href="/about.html" target="_blank">
                            {data.b}
                          </a>
                        </li>
                      </span>
                    );
                  })}
                  {record.content.map((data) => {
                    return (
                      <span key="{record.id}">
                        <li>
                          <a href="/about.html" target="_blank">
                            {data.c}
                          </a>
                        </li>
                      </span>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
