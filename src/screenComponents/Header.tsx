import { useMemo } from 'react';
import clsx from "clsx";
import { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import LCLogo from "../assets/LC-Logo-Color.svg";
import useScrollDirection from "../hooks/useScrollDirection";
import { DarkModeToggle } from "./DarkModeToggle/DarkModeToggle";
import { MobileMenuIcon } from "./SVG";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolledToTop, setScrolledToTop] = useState(true);
  const scrollDirection = useScrollDirection({ thresholdPixels: 0 });
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [mobileOpen]);

  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const headerScroll = useMemo(() => {
    if (!mobileOpen) return `header-${scrolledToTop ? "top" : (scrollDirection || "top")}`;
    else return 'header-top';
  },[scrollDirection, mobileOpen]); // eslint-disable-line react-hooks/exhaustive-deps

  const onResize = (e: any) => {
    if (e.currentTarget.innerWidth > 768) {
      setMobileOpen(false);
    }
  };

  return (
    <div
      className={clsx(
        "header",
        headerScroll,
        { "header-mobile" : mobileOpen }
      )}
    >
      <nav className="header-content">
        <Link to="/" smooth>
          <img className="lc-logo" src={LCLogo} alt="LC" />
        </Link>
        <ol
          className={clsx("header-nav", {
            "header-nav-mobile-open": mobileOpen,
          })}
        >
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
                      <Link key={index} to={link} smooth onClick={() => setMobileOpen(false)}>
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
      <button className="mobile-menu-button">
        <MobileMenuIcon
          className="mobile-menu-button-icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        />
      </button>
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
