import { Link } from "react-router-dom";

import LCLogo from "../assets/LC-Logo-Color.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">
          <img className="lc-logo" src={LCLogo} alt="LC" />
        </Link>
        <div className="header-nav">
          {pages?.map(({ description, link }, index) => (
            <Link key={index} to={link}>
              {description}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;

const pages = [
  { description: "Home", link: "/" },
  { description: "About", link: "about" },
  { description: "Projects", link: "projects" },
];
