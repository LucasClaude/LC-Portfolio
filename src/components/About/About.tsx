import "./styles.scss";

const About = () => {
  return (
    <div className="about-me" id="about">
      <div className="about-me-content">
        <h2>1. About Me.</h2>
        <p>
          Hi! My Name is Lucas Claude and I am a Software Engineer that also has
          a passion for design. From when I started my Computer Science degree
          at Florida Southern College in 2014, I really found a likeing to web
          and mobile development. C
        </p>
        <p>
          Currently I am working at Haneke Design in Tampa, FL where I head up
          and lead several of our large clients projects.
        </p>
        <p>
          Here are some of the technologies that I have most recently worked
          with:
          <ul>
            <li>React JS</li>
            <li>Typescript</li>
            <li>{`Unity (c#)`}</li>
            <li>Angular</li>
            <li>Node.js</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default About;
