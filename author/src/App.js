import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AgeVerification from "./Components/AgeVerification/AgeVerification";

//pages Imports
import NotOldEnough from "./Pages/NotOldEnough/NotOldenough";
import Home from "./Pages/Home/Home";

//Components


function App() {
  return (
    <div className="App">
      <AgeVerification />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NotOldEnough" element={<NotOldEnough />} />
      </Routes>
    </div>
  );
}

export default App;
