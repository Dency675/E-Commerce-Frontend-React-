import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationPage from "./Pages/Registation/RegistrationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>Naranga mittayi vaangi thanna code theraam</Routes>
    </BrowserRouter>
  );
}

export default App;
