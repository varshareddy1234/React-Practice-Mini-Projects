import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  // State to hold the list of all submitted data (table data)
  const [tableData, setTableData] = useState([]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setTableData([...tableData, formData]); // Add form data to table
    setFormData({
      username: "",
      usernumber: "",
      useremail: "",
      userdep: "",
      usersub: "",
    }); // Reset form
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Employee Details</h3>
        <div className="form-wrapper">
          <form className="form" onSubmit={handlesubmit}>
            <div>
              <label>
                Employee Name :
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Employee id :
                <input
                  type="number"
                  name="usernumber"
                  value={formData.usernumber}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Employee Email :
                <input
                  type="text"
                  name="useremail"
                  value={formData.useremail}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Employee Department :
                <input
                  type="text"
                  name="userdep"
                  value={formData.userdep}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>
              <label>
                Employee Subject :
                <input
                  type="text"
                  name="usersub"
                  value={formData.usersub}
                  onChange={handleChange}
                />
              </label>
            </div>
            <input type="reset" id="reset" />
            <input type="submit" id="submit" />
          </form>
        </div>
        <h3>Table Data</h3>
        <div className="table-wrapper">
          <table border="1">
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Employee id</th>
                <th>Employee Email</th>
                <th>Employee Department</th>
                <th>Employee Subject</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.username}</td>
                  <td>{data.usernumber}</td>
                  <td>{data.useremail}</td>
                  <td>{data.userdep}</td>
                  <td>{data.usersub}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
