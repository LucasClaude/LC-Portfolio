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
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  },
  {
    title: "Pan-American Lacrosse Association",
    description: "description 2",
  },
  {
    title: "Florida Southern College",
    description: "description 3",
  },
];
