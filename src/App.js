import React from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import SkillSelection from "./components/SkillSelection";
import Matches from "./components/Matches";
import NavigationArchitecture from "./components/NavigationArchitecture";

function App() {
  return (
    <div>
      <NavigationArchitecture/>
      <Login/>
      <Signup />
      <SkillSelection />
      <Matches />
    </div>
  );
}

export default App;

