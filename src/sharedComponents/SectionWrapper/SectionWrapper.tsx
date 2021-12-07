import useScrollReveal from "../../hooks/useScrollReveal";

type SectionWrapperTypes = {
  children: any;
  delay?: number;
  viewFactor?: number;
};

const SectionWrapper = ({ children, delay, viewFactor }: SectionWrapperTypes) => {
  const { scrollRef } = useScrollReveal({ delay, viewFactor });

  return <section ref={scrollRef}>{children}</section>;
};

export default SectionWrapper;
