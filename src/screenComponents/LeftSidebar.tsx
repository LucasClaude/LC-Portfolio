import useScrollReveal from '../hooks/useScrollReveal';


const LeftSidebar = () => {

  const { scrollRef } = useScrollReveal({ delay: 2600 });

  return (
    <div className="sidebar sidebar-left" ref={scrollRef}>
      <ul className="sidebar-links">
        <li className="link">
          <a href="https://google.ca">
            Google
          </a>
        </li>
        <li className="link">
          <a href="https://google.ca">
            Google 2
          </a>
        </li>
        <li className="link">
          <a href="https://google.ca">
            Google 3
          </a>
        </li>
        <li className="link">
          <a href="https://google.ca">
            Google 4
          </a>
        </li>
        <li className="link">
          <a href="https://google.ca">
            Google 5
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
