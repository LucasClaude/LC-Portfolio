import Header from "./Header";
import LeftSidebar from "./LeftSidebar";
import Screens from "./Screens";

import './styles.scss';

const ScreenContainer = () => {
  return (
    <div className="screen-container">
      <Header />
      <LeftSidebar />
      <Screens />
    </div>
  );
};

export default ScreenContainer;