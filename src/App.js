import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home className="home" />} />
        <Route path="/about" element={<About className="about"/>} />
        <Route path="/skill" element={<Skill className="skill"/>} />
        <Route path="/project" element={<Project className="project"/>} />
      </Routes>
    </>
  );
}

export default App;
