import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../Menu/Register";
import Login from "../Menu/Login";
import Navbar from "./Navbar";
import Home from "../Menu/Home";

export default function RoutingFiles() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
