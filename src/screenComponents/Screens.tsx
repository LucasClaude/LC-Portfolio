import { Routes, Route } from "react-router";

import Home from "../components/Home/Home";

const Screens = () => {
  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Screens;
