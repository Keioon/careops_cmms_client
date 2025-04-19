import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate, BrowserRouter, Navigate } from "react-router-dom";
import Constants from "./utilities/Constants";
import Login from "./pages/login";
import SubmissionList from "./pages/submissionList";
import Layout from "./pages/layout";
import Register from "./pages/register";

function App() {
  const url = Constants.API_URL_UPDATE_USER;

  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/list" element={<SubmissionList />} />
        </Route>
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
