import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, BrowserRouter, Navigate } from "react-router-dom";
import './App.css';
import Constants from "./utilities/Constants";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const url = Constants.API_URL_UPDATE_USER;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
