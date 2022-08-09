import React, { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';
import {getPlacesData} from "./api";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";

export default function App() {
    
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}
