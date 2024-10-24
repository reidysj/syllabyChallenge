import { Link, Route, Routes } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./Home";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
// <PrivateRoute path="/dashboard" element={<Dashboard />} />
export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={<PrivateRoute path="/dashboard" element={<Dashboard />} />}
      />
    </Routes>
  );
}
