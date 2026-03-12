import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SkillSelection from "./components/SkillSelection";
import Matches from "./components/Matches";
import NavigationArchitecture from "./components/NavigationArchitecture";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/skills" element={<SkillSelection />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/nav" element={<NavigationArchitecture />} />
      </Routes>
    </Router>
  );
}

export default App;

