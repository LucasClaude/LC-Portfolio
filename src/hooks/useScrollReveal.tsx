import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

import { srOptions } from "../utils";

type scrollRevealTypes = {
  delay?: number;
  viewFactor?: number;
}

const useScrollReveal = ({ delay, viewFactor }: scrollRevealTypes = {}) => {
  const scrollRef = useRef<any>();

  useEffect(() => {
    if (scrollRef?.current) {
      ScrollReveal()?.reveal(scrollRef?.current, srOptions({ delay, viewFactor }));
    }
  });

  return {
    scrollRef,
  }
}

export default useScrollReveal;