import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Pages/Login/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="App">
        <LoginPage />
      </div> */}
      <Routes>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
