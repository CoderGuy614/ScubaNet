import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg-dark">
        <h1 className="text-white">HELLO FROM REACT APP</h1>
        <ul className="list-group">
          <li className="list-group-item text-left">
            <i className="fas fa-check mr-2"></i> Created CRUD for Users
          </li>
          <li className="list-group-item text-left">
            <i className="fas fa-check mr-2"></i> Create React APP
          </li>
          <li className="list-group-item text-left">
            <i className="fas fa-check mr-2"></i> Next: Fix Auth Routes /
            Functions
          </li>
          <li className="list-group-item text-left">
            <i className="fas fa-check mr-2"></i> Create Simple form for Post /
            Edit / Delete User
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
