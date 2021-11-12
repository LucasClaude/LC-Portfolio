import { useEffect, useState } from "react";
import "./styles.scss";

type AnimateHeaderProps = {
  text: string;
};

const AnimatedHeader = ({ text }: AnimateHeaderProps) => {
  const [opacity, setOpacity] = useState(0);
  const seperatedTitle: string[] = text?.split("");

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <h1 className="animated-header">
      {seperatedTitle?.map((letter, index) => (
        <span
          className="animated-header-letter"
          key={index}
          style={{
            animationDelay: `${(index + 2) * 0.1}s`,
            transitionDelay: `${(index + 1) * 0.1}s`,
            opacity,
          }}
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedHeader;
