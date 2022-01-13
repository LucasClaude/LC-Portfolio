import { Routes, Route } from "react-router";

import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

const Screens = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} /> */}
      </Routes>
    </div>
  );
};

export default Screens;
