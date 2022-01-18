import monitorGraphic from "../../assets/monitor-icons-w-table.svg";
import SectionWrapper from "../../sharedComponents/SectionWrapper/SectionWrapper";
import "./styles.scss";

const About = () => {
  return (
    <SectionWrapper delay={2200}>
      <div className="about-me">
        <img
          className="about-me-graphic"
          src={monitorGraphic}
          alt="monitor-graphic"
        />
        <div
          className="about-me-content"
          id="about"
        >
          <div className="about-me-content-info">
            <h2>1. About Me.</h2>
            <h3>
              I'm Software Engineer focused on creating quality software and
              great user interfaces.
            </h3>
            <h4>
              I enjoy problem solving and thinking in many different ways to
              come up with an ideal solution. Having experience in both
              development and design allows me to think of great ideas to
              enhance the user experience of my applications.
            </h4>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
