import { SectionWrapper } from "../../sharedComponents";
import AnimatedHeader from "../../sharedComponents/AnimatedComponents/AnimatedHeader/AnimatedHeader";
import AnimatedTitle from "../../sharedComponents/AnimatedComponents/AnimatedTitle/AnimatedTitle";

import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

import "./styles.scss";


const Home = () => {

  return (
    <div className="home">
      <SectionWrapper>
        <div className="home-bio">
          <div className="home-bio-text">
            <AnimatedHeader text="Lucas Claude" delay={0.5}/>
            <AnimatedTitle text="Software Engineer" delay={2.2}/>
          </div>
        </div>
      </SectionWrapper>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
