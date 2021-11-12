import Header from "./Header";
import Screens from "./Screens";

import './styles.scss';

const ScreenContainer = () => {
  return (
    <div className="screen-container">
      <Header />
      <Screens />
    </div>
  );
};

export default ScreenContainer;