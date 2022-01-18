import { useEffect, useState } from "react";
import "./styles.scss";

type AnimateTitleProps = {
  text: string;
  delay: number;
};

const AnimatedTitle = ({ text, delay }: AnimateTitleProps) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <h3
      className="animated-title"
      style={{ transitionDelay: `${delay}s`, opacity }}
    >
      {text}
    </h3>
  );
};

export default AnimatedTitle;
