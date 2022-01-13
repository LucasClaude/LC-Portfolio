import clsx from "clsx";
import { useState } from "react";
import SectionWrapper from "../../sharedComponents/SectionWrapper/SectionWrapper";
import "./styles.scss";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(0);
  return (
    <SectionWrapper>
      <div className="experience" id="experience">
        <div className="experience-content">
          <h2>2. Experience.</h2>
          <div className="experiences">
            <div className="experiences-list">
              {experienceList?.map(({ title }, index) => (
                <button
                  key={index}
                  className={clsx("experiences-list-item", {
                    "experiences-list-item-active":
                      index === selectedExperience,
                  })}
                  onClick={() => setSelectedExperience(index)}
                >
                  {title}
                </button>
              ))}
            </div>
            <div className="experiences-description">
              {experienceList[selectedExperience]?.description}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;

const experienceList = [
  {
    title: "Haneke Design",
    description: (
      <>
        <h4>SOFTWARE ENGINEER - HANEKE DESIGN - JUNE 2018 - PRESENT</h4>
        <h5>FRANKCRUM HR PORTAL</h5>
        <ul>
          <li>
            This project was built with: React Js, React Hooks, React Router,
            Redux, Redux Form, HTML, sass and more.
          </li>
          <li>
            I have been the lead developer on this large HR Portal Web App for
            over two years. This project includes the Employee and Employer side
            of HR and is used by over 30,000 users. I have been the primary and
            sole developer on this project for well over a year.
          </li>
          <li>
            Throughout this project I have worked directly with the client
            (FrankCrum) and have been exposed to the entire software engineering
            process.
          </li>
          <li>I have also had some design input throughout the project.</li>
        </ul>
        <h5>CURA FREIGHT PORTAL</h5>
        <ul>
          <li>
            This project was built with: React JS, React Hooks, GraphQL (Apollo
            Client).
          </li>
          <li>
            Lead developer for the project, leading and guiding other developers
            to complete this application for our client.
          </li>
          <li>
            Have been in constant contact with the client and internal design
            team to develop this application.
          </li>
          <li>I have also had some design input throughout the project.</li>
        </ul>
        <h5>OTHER PROJECTS &amp; EXPERIENCE</h5>
        <ul>
          <li>BayCare HealthNav Web Application Maintenance - React JS</li>
          <li>
            Berkeley Prep Virtual Art Gallery - Lead Developer - Unity 3D &amp;
            Unity Virtual Reality
          </li>
          <li>Moffitt Cancer Center - Unity Augmented Reality Application</li>
          <li>
            GitHub, Continuous integration tools (Circle CI), S3, Pivotal
            Tracker, Clubhouse, Jest &amp; Enzyme &amp; more.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Pan-American Lacrosse Association",
    description: (
      <>
        <h4>
          MEDIA/WEB DEVELOPER - PAN-AMERICAN LACROSSE ASSOCIATION - SEPTEMBER 2018
          - PRESENT
        </h4>
        <p>
          panamericanlacrosse.org - Designed and Developed the website for the
          Pan-American Lacrosse Association (React JS, Vercel, Illustrator, Photoshop).
        </p>
      </>
    ),
  },
  {
    title: "Florida Southern College",
    description: `2014 – MAY 2018
    BACHELOR OF SCIENCE – COMPUTER SCIENCE, FLORIDA SOUTHERN COLLEGE EDUCATION & SKILLS
    • GitHub, Continuous integration tools (Circle CI), S3, Pivotal Tracker, Clubhouse, Jest, Enzyme, & more.
    • Graduated from Computer Science Program, Minor in Business Administration
    • Captain of the Lacrosse Team (as a Junior and Senior)
    • Bachelor of Science
    • 3.675 cumulative GPA, 3.85 major GPA
    • Professional experience with React JS, Redux, Angular JS, Typescript, React Native, Unity 2D, 3D, AR, VR
    • Other experience includes: C# (unity), C++, Java
    • Proficient with Microsoft Office and Photoshop
    • Experience with Unity, Android Studios, and XCode
    • D2 ADA Academic Achievement Award (2016, 2017, 2018)
    • SSC Commissioner’s Honor Roll (2015, 2016, 2017, 2018)
    COURSEWORK
    • Programming & Data Structures I • Discrete Structures
    • Organizational Architecture
    • Programming & Data Structures II • Mobile Applications
    • Game Design • Calculus I
    • Calculus II
    • Analysis of Algorithms
    • Web Development
    • Operating Systems
    • Web Application Architecture • Software Engineering`,
  },
];
