import { useMemo } from "react";

import useScrollReveal from "../hooks/useScrollReveal";

import { ReactComponent as LinkedIn } from "../assets/linkedin-icon.svg";
import { ReactComponent as GitHub } from "../assets/github-icon.svg";
import { useContext } from "react";
import { MainContext } from "../context/MainContext";

const LeftSidebar = () => {
  const {
    state: { theme },
  } = useContext(MainContext);

  const { scrollRef } = useScrollReveal({ delay: 2600 });

  const linkColor = useMemo(() => {
    return getComputedStyle(document.body).getPropertyValue(
      `--link-color-${theme}`
    );
  }, [theme]);

  return (
    <div className="sidebar sidebar-left" ref={scrollRef}>
      <div className="sidebar-links">
        {links?.map(({ ComponentIcon, link, type }, index) => (
          <a
            className="sidebar-link"
            href={link}
            key={index}
            target="_blank"
            rel="noreferrer"
          >
            <ComponentIcon fill={linkColor} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;

const links = [
  {
    type: "linkedIn",
    ComponentIcon: LinkedIn,
    link: "https://www.linkedin.com/in/lucasclaude/",
  },
  {
    type: "gitHub",
    ComponentIcon: GitHub,
    link: "https://github.com/LucasClaude",
  },
];
