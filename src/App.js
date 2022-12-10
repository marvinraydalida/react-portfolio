import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home className="home" />} />
        <Route path="/about" element={<About className="about"/>} />
      </Routes>
    </>
  );
}

export default App;
