import styled from "styled-components";
import SectionWrapper from "../../sharedComponents/SectionWrapper/SectionWrapper";
import "./styles.scss";

import panAmerican from "./projectImages/panAmerican3.png";
import darkMode from "./projectImages/DarkMode.png";
import portfolio from "./projectImages/portfolio.png";
import { AnimatedButton } from "../../sharedComponents/AnimatedComponents/AnimatedButton/AnimatedButton";

type BackgroundType = {
  title: string;
  background: string;
};

const Projects = () => {
  return (
    <SectionWrapper>
      <div className="projects" id="projects">
        <div className="projects-content">
          <h2>3. Projects.</h2>
          <div className="project-list">
            {projectList?.map(
              ({ image, description, title, renderHTML }, index) => (
                <div className="project-list-item">
                  {image && (
                    <Background background={`url(${image})`} title={title} />
                  )}
                  {renderHTML && (
                    <div className="project-list-renderedHTML">
                      {renderHTML}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;

const Background = styled.div<BackgroundType>`
  &:before {
    width: 100%;
    height: 100%;
    content: "";
    position: absolute;
    background-image: ${(props) => props.background};
    opacity: 0.4;
    background-size: cover;
    background-position: top center;
    z-index: 0;
  }
`;

const projectList = [
  {
    title: "Pan-American Lacrosse Association",
    url: "https://panamaricanlacrosse.org",
    image: panAmerican,
    description:
      "Built and maintained using React JS, hooks, SCSS, vercel, and more",
    renderHTML: (
      <>
        <h3>panamericanlacrosse.org</h3>
        <p>
          Built and maintained using React JS, hooks, SCSS, vercel, and more.
          Click the link below to view the code.
        </p>
        <AnimatedButton
          text="Go to site"
          link="https://www.panamericanlacrosse.org/"
        />
      </>
    ),
  },
  {
    title: "Portfolio",
    url: "https://github.com/LucasClaude/LC-Portfolio",
    image: portfolio,
    renderHTML: (
      <>
        <h3>My Porfolio</h3>
        <p>
          Check out the code to the current site you're looking at below. I used
          React, typescript, custom hooks, animations, and more.
        </p>
        <AnimatedButton
          text="Go to GitHub"
          link="https://github.com/LucasClaude/LC-Portfolio"
        />
      </>
    ),
  },
  {
    title: "Dark Mode Toggle",
    url: "https://gist.github.com/LucasClaude/bad14d907ca5a003d858095979038f1c",
    image: darkMode,
    renderHTML: (
      <>
        <h3>Dark/Light Mode Toggle</h3>
        <p>
          Custom made svg's using adobe illustrator. Check out my Gist in the
          link below for the code (also included in this project).
        </p>
        <AnimatedButton
          text="Go to Gist"
          link="https://gist.github.com/LucasClaude/bad14d907ca5a003d858095979038f1c"
        />
      </>
    ),
  },
];
