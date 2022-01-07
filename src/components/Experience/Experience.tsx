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
            <p className="experiences-description">
              {experienceList[selectedExperience]?.description}
            </p>
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
    description:
      `SOFTWARE ENGINEER - HANEKE DESIGN JUNE 2018 – PRESENT
      FRANKCRUM HR PORTAL REACT JS WEB APPLICATION, HANEKE DESIGN
      • This project was built with: React Js, React Hooks, React Router, Redux, Redux Form, HTML, sass and more.
      • I have been the lead developer on this large HR Portal Web App for over two years. This project includes the Employee and Employer side of HR and is used by over 30,000 users. I have been the primary and sole developer on this project for well over a year.
      • Throughout this project I have worked directly with the client (FrankCrum) and have been exposed to the entire software engineering process.
      • I have also had some design input throughout the project.
      JANUARY 2020 – PRESENT
      CURA FREIGHT REACT JS WEB APPLICATION, HANEKE DESIGN
      • This project was built with: React JS, React Hooks, GraphQL (Apollo Client).
      • Lead developer for the project, leading and guiding other developers to complete this
      application for our client.
      • Have been in constant contact with the client and internal design team to develop
      this application.
      OTHER PROJECTS & EXPERIENCE, HANEKE DESIGN
      • BayCare HealthNav Web Application Maintenance – React JS
      • Berkeley Prep Virtual Art Gallery – Lead Developer - Unity 3D & Unity Virtual Reality
      • Moffitt Cancer Center – Unity Augmented Reality Application
      • GitHub, Continuous integration tools (Circle CI), S3, Pivotal Tracker, Clubhouse, Jest &
      Enzyme & more.`,
  },
  {
    title: "Pan-American Lacrosse Association",
    description: `MEDIA/WEB DEVELOPER - PAN-AMERICAN LACROSSE ASSOCIATION SEPTEMBER 2018 – PRESENT
    • PANAMERICANLACROSSE.ORG – Designed and Developed the website for the Pan-American Lacrosse Association (React JS, Photoshop).
    • PALA.LACROSSE (INSTAGRAM) – Manage and Design logos and other media for various tournament and events (Photoshop)`,
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
