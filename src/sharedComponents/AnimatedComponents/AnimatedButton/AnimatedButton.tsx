import './styles.scss';

type AnimatedButtonTypes = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  link?: string;
  text: string;
};

export const AnimatedButton = ({
  onClick,
  link,
  text,
}: AnimatedButtonTypes) => {
  const button = buttonContainer({ text, onClick });
  return link ? linkWrapper({ children: button, link }) : button;
};

type ButtonContainerTypes = {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const buttonContainer = ({ text }: ButtonContainerTypes) => {
  return <button className="animated-button">{text}</button>;
};

type linkWrapperTypes = {
  children: any;
  link: string;
};

const linkWrapper = ({ children, link }: linkWrapperTypes) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
};
