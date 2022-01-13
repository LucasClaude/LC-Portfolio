import clsx from "clsx";

import { SectionWrapper } from "../../sharedComponents";

import { ReactComponent as Mail } from "./SVG/MailIcon.svg";
import { ReactComponent as LinkedIn } from "../../assets/linkedin-icon.svg";

import "./styles.scss";

const Contact = () => {
  return (
    <SectionWrapper>
      <div className="contact" id="contact">
        <div className="contact-content">
          <h2>4. Contact.</h2>
          <h3>Feel free to reach out</h3>
          <div className="contact-content-icons">
            {linkIcons?.map(({ children, link, outsideLink = false }, index) =>
              linkWrapper({ children, index, link, outsideLink })
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;

type LinkWrapperTypes = {
  link: string;
  children: any;
  index: number;
  outsideLink: boolean;
};

const linkWrapper = ({
  link,
  children,
  index,
  outsideLink = false,
}: LinkWrapperTypes) => {
  const outside = outsideLink ? { target: "_blank", rel: "noreferrer" } : {};
  return (
    <a key={index} href={link} {...outside}>
      {children}
    </a>
  );
};

const linkIcons = [
  {
    link: "mailto: lucasclaude17@gmail.com",
    children: <Mail className={clsx("mail-icon", "contact-icon")} />,
    outsideLink: true,
  },
  {
    link: "",
    children: <LinkedIn className={clsx("linkedin-icon", "contact-icon")} />,
  },
];
