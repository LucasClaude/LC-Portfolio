import React from "react";

import monitorGraphic from "../../assets/monitor-icons-w-table.svg";
import { useHomeInfo } from "../../queries/HomeQueries";
import AnimatedCards from "../../sharedComponents/AnimatedComponents/AnimatedCards/AnimatedCards";
import AnimatedHeader from "../../sharedComponents/AnimatedComponents/AnimatedHeader/AnimatedHeader";
import { skills } from "./Skills";
import "./styles.scss";

const Home = () => {
  const { info, loading } = useHomeInfo();
  return (
    <div className="home">
      <div className="home-bio">
        <div className="home-bio-text">
          <AnimatedHeader text="Lucas Claude" />
          <h3>Software Engineer</h3>
          {/* <p>Currently a Software Engineer at Haneke Design</p>
          <p>
            Florida Southern College Bachelors of Science - Computer Science
          </p> */}
        </div>
        <img
          className="home-bio-graphic"
          src={monitorGraphic}
          alt="monitor-graphic"
        />
      </div>
      <div className="secondary-content">
        <div className="container">
          <h2>Technologies &amp; Tools</h2>
          <AnimatedCards cards={skills}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
