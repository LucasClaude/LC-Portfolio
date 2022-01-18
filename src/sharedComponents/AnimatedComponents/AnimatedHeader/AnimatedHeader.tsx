import { useEffect, useState } from "react";
import "./styles.scss";

type AnimateHeaderProps = {
  text: string;
  delay: number
};

const AnimatedHeader = ({ text, delay }: AnimateHeaderProps) => {
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
            animationDelay: `${delay + (index + 2) * 0.1}s`,
            transitionDelay: `${delay + (index + 1) * 0.1}s`,
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
