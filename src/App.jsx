import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginOtpPage from "./Pages/LoginOtpPage";
import Dashboard from "./Pages/dashboard";
import TaskScreen from "./Pages/TaskScreen";
import OtpVerificationPage from "./Pages/OtpVerificationPage";
import './index.css';
import Analytics from "./Pages/Analytics";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginOtpPage />} />
      <Route path="/verify-otp" element={<OtpVerificationPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<TaskScreen />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
}

export default App;
