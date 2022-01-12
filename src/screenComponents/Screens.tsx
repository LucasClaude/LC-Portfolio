import { Routes, Route } from "react-router";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

const Screens = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
};

export default Screens;
