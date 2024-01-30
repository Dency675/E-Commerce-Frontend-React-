import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./Pages/Registation/RegistrationPage";
import RegistrationHandler from "./Pages/Registation/RegistrationHandler";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/registration" element={<RegistrationHandler />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
