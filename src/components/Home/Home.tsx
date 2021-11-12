import React from "react";

import monitorGraphic from "../../assets/monitor-icons-w-table.svg";
import { useHomeInfo } from "../../queries/HomeQueries";
import AnimatedHeader from "../../sharedComponents/AnimatedComponents/AnimatedHeader/AnimatedHeader";
import "./styles.scss";

const Home = () => {
  const { info, loading } = useHomeInfo();
  return (
    <div className="home">
      <div className="home-bio">
        <div className="home-bio-text">
          <AnimatedHeader text="Lucas Claude"/>
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
          <div className="technologies">
            <div className="technologies-cards">React JS</div>
            <div className="technologies-cards">GraphQL - Apollo Client</div>
            <div className="technologies-cards">Redux</div>
            <div className="technologies-cards">{`Unity (C#)`}</div>
            <div className="technologies-cards">React Native</div>
            <div className="technologies-cards">Angular</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
