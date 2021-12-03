import { Routes, Route } from "react-router";

import Home from "../components/Home/Home";
import About from "../components/About/About";

const Screens = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Screens;
