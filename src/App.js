import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/home";
import Payment from "./components/payment";


const App = () => {
 
  return (
    <>
      <Routes>
        <Route path="" element={<Home/>}>
        </Route>
        <Route path="/payment" element={<Payment/>}/>

      </Routes>

    </>
  );
};

export default App;
