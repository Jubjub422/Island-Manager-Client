import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

export const IslandManager = () => {
  return (
    
    <Routes>
      <Route path="/" element={<div>sup</div>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
   
  );
};
