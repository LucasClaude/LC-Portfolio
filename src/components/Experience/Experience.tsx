import clsx from "clsx";
import { Fragment, useState } from "react";
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
            {renderExperience(experienceList[selectedExperience])}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;

interface ExperienceSection {
  header?: string;
  listItems?: string[];
}

type ExperienceTypes = {
  title?: string;
  header?: string;
  text?: string;
  sections?: ExperienceSection[];
};

const renderExperience = ({
  header,
  text,
  sections,
}: ExperienceTypes) => {
  return (
    <div className="experiences-description">
      <h4>{header}</h4>
      {text && <p>{text}</p>}
      {console.log(sections)}
      {sections?.map((section, index) => (
        <Fragment key={index}>
          <h5>{section?.header}</h5>
          {section?.listItems && (
            <ul>
              {section?.listItems?.map((listItem, listIndex) => (
                <li key={listIndex}>{listItem}</li>
              ))}
            </ul>
          )}
        </Fragment>
      ))}
    </div>
  );
};

const experienceList = [
  {
    title: "Haneke Design",
    header: "SOFTWARE ENGINEER - HANEKE DESIGN - JUNE 2018 - PRESENT",
    sections: [
      {
        header: "FRANKCRUM HR PORTAL",
        listItems: [
          `This project was built with: React Js, React Hooks, React Router,
          Redux, Redux Form, HTML, sass and more.`,
          `I have been the lead developer on this large HR Portal Web App for
          over two years. This project includes the Employee and Employer side
          of HR and is used by over 30,000 users. I have been the primary and
          sole developer on this project for well over a year.`,
          `Throughout this project I have worked directly with the client
          (FrankCrum) and have been exposed to the entire software engineering
          process.`,
          `I have also had some design input throughout the project.`,
        ],
      },
      {
        header: "CURA FREIGHT PORTAL",
        listItems: [
          `This project was built with: React JS, React Hooks, GraphQL (Apollo
            Client).`,
          `Lead developer for the project, leading and guiding other developers
            to complete this application for our client.`,
          `Have been in constant contact with the client and internal design
            team to develop this application.`,
          `I have also had some design input throughout the project.`,
        ],
      },
      {
        header: "OTHER PROJECTS & EXPERIENCE",
        listItems: [
          `BayCare HealthNav Web Application Maintenance - React JS`,
          `Berkeley Prep Virtual Art Gallery - Lead Developer - Unity 3D &
            Unity Virtual Reality`,
          `Moffitt Cancer Center - Unity Augmented Reality Application`,
          `GitHub, Continuous integration tools (Circle CI), S3, Pivotal
            Tracker, Clubhouse, Jest & Enzyme & more.`,
        ],
      },
    ],
  },
  {
    title: "Pan-American Lacrosse Association",
    header: "WEB/MEDIA DEVELOPER - PAN-AMERICAN LACROSSE ASSOCIATION - SEPTEMBER 2018 - PRESENT",
    text: `panamericanlacrosse.org - Designed and Developed the website for the
    Pan-American Lacrosse Association (React JS, Vercel, Illustrator, Photoshop).`,
  },
  {
    title: "Florida Southern College",
    header:
      "BACHELOR OF SCIENCE – COMPUTER SCIENCE, FLORIDA SOUTHERN COLLEGE",
    sections: [
      {
        listItems: [
          `Programming & Data Structures I`,
          `Discrete Structures`,
          `Organizational Architecture`,
          `Programming & Data Structures II`,
          `Mobile Applications`,
          `Game Design`,
          `Calculus I`,
          `Calculus II`,
          `Analysis of Algorithms`,
          `Web Development`,
          `Operating Systems`,
          `Web Application Architecture`,
          `Software Engineering`,
          `3.7 cumulative GPA, 3.9 major GPA`,
          `Captain of the Lacrosse Team (as a Junior and Senior)`,
        ],
      },
    ],
  },
];
