// App.js
import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Login from "./Login"; // Adjust the path based on your file structure

const App = () => {
  return (
    <Login/>
    // <Routes>
    //   <Route
    //     path=":"
    //     element={<Login />}
    //   />
    //   {/* Add more routes as needed */}
    // </Routes>
  );
};

export default App;
