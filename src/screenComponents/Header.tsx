import { NavLink } from "react-router-dom";

import LCLogo from "../assets/LC-Logo-Color.svg";

const Header = () => {
  return (
    <div className="header">
      <nav className="header-content">
        <NavLink to="/">
          <img className="lc-logo" src={LCLogo} alt="LC" />
        </NavLink>
        <div className="header-nav">
          {pages?.map(({ description, link }, index) => (
            <NavLink  className="header-link" key={index} to={link} >
              {description}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Header;

const pages = [
  { description: "Home", link: "/" },
  { description: "About", link: "about" },
  { description: "Projects", link: "projects" },
];
