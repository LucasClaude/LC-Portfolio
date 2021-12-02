import { useRef, useEffect, useState } from "react";
import clsx from "clsx";

import "./styles.scss";

type AnimatedCardProps = {
  cards: {
    title: string;
    text: string;
    image: string;
  }[];
};

type BoundingClient = {
  top: number,
  bottom: number,
  height: number,
}

const AnimatedCards = ({ cards }: AnimatedCardProps) => {
  const cardContainer = useRef<any>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [children, setChildren] = useState<any>();
  const [marginTop, setMarginTop] = useState<number>(0);

  useEffect(() => {
    setChildren(cardContainer?.current?.children);
  }, [activeCard]);

  const calculateTopAndBottomDifference = ({ top, bottom, height }: BoundingClient) => {
    // console.log(bottom - top);

    console.log(bottom, top, height);

    if (bottom - top !== height) {
      console.log('here');
      return 0
    }

    return 0;
  }

  const outerHeight = (el: any) => {
    var style = window.getComputedStyle(el);
    let marginBottom = parseInt(style.marginBottom);
    if (marginBottom) {
      return marginBottom;
    }
  };

  useEffect(() => {
    if (children) {
      let margin: any = 0;
      [...children]?.forEach((child: any) => {
        if (outerHeight(child)) {
          margin = outerHeight(child)
        }
      });
      // if margin === 0
      console.log(margin);
      setMarginTop(-margin);
    }
  },[children, activeCard]);

  return (
    <div className="animated-cards" ref={cardContainer}>
      {cards?.map(({ title, text, image }, index) => {
        const elements = children || [];
        const thisElement = [...elements][index];
        const height = thisElement?.offsetHeight;
        console.log(marginTop);
  
        return (
          <div
            className={clsx("animated-cards-card", {
              "animated-cards-card-active": activeCard === index,
            })}
            key={index}
            style={activeCard === index && {  } || { bottom: marginTop }}
            onClick={() => setActiveCard(index)}
          >
            <h3>{title}</h3>
            <p className="animated-cards-card-description">{text}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AnimatedCards;
