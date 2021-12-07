import React from "react";

import { SectionWrapper } from "../../sharedComponents";
import { useHomeInfo } from "../../queries/HomeQueries";
import AnimatedHeader from "../../sharedComponents/AnimatedComponents/AnimatedHeader/AnimatedHeader";
import AnimatedTitle from "../../sharedComponents/AnimatedComponents/AnimatedTitle/AnimatedTitle";
import About from "../About/About";
import Experience from "../Experience/Experience";
import "./styles.scss";

const Home = () => {
  const { info, loading } = useHomeInfo();
  return (
    <div className="home">
      <SectionWrapper>
        <div className="home-bio">
          <div className="home-bio-text">
            <AnimatedHeader text="Lucas Claude" delay={0.5}/>
            <AnimatedTitle text="Software Engineer" delay={2.2}/>
            {/* <p>Currently a Software Engineer at Haneke Design</p>
            <p>
              Florida Southern College Bachelors of Science - Computer Science
            </p> */}
          </div>
        </div>
      </SectionWrapper>
      <About />
      <Experience />
    </div>
  );
};

export default Home;
