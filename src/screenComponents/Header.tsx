import clsx from "clsx";
import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import LCLogo from "../assets/LC-Logo-Color.svg";
import useScrollDirection from "../hooks/useScrollDirection";
import { DarkModeToggle } from "./DarkModeToggle/DarkModeToggle";
import { MobielMenuIcon } from "./SVG";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection({ thresholdPixels: 0 });

  useEffect(() => {
    setOpen(true);

    const pageScroll = () => {
      setScrolledToTop(window.pageYOffset < 25);
    };

    window.addEventListener("scroll", pageScroll);

    return () => {
      window.removeEventListener("scroll", pageScroll);
    };
  }, []);

  return (
    <div
      className={clsx(
        "header",
        `header-${scrolledToTop ? "top" : scrollDirection || "top"}`
      )}
    >
      <nav className="header-content">
        <Link to="/" smooth>
          <img className="lc-logo" src={LCLogo} alt="LC" />
        </Link>
        <ol className="header-nav">
          <TransitionGroup component={null}>
            {pages?.map(
              ({ description, link }, index) =>
                open && (
                  <CSSTransition
                    in={open}
                    timeout={2000}
                    classNames="fadedown"
                    key={index}
                  >
                    <li
                      className="header-nav-link"
                      style={{ transitionDelay: `${index * 300}ms` }}
                    >
                      <Link key={index} to={link} smooth>
                        {description}
                      </Link>
                    </li>
                  </CSSTransition>
                )
            )}
          </TransitionGroup>
        </ol>
      </nav>
      <DarkModeToggle />
      <button><MobielMenuIcon className="mobile-menu-icon" fill="white" /></button>
    </div>
  );
};

export default Header;

const pages = [
  { description: "About", link: "#about" },
  { description: "Experience", link: "#experience" },
  { description: "Projects", link: "#projects" },
  { description: "Contact", link: "#contact" },
];
