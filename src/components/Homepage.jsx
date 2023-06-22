import React, { useState } from "react";
import MeatLoverPopup from "./MeatLoverPopup";
import VegeLoverPopup from "./VegeLoverPopup";
import "../css/homepage.css";

const Homepage = () => {
  const [meatLoverPopupVisible, setMeatLoverPopupVisible] = useState(false);
  const [vegetarianLoverPopupVisible, setVegetarianLoverPopupVisible] = useState(false);

  const handleMeatLoverOrder = () => {
    setMeatLoverPopupVisible(true);
  };

  const handleVegetarianLoverOrder = () => {
    setVegetarianLoverPopupVisible(true);
  };

  const closePopups = () => {
    setMeatLoverPopupVisible(false);
    setVegetarianLoverPopupVisible(false);
  };

  return (
    <div className="homepage-maincontainer">
      <div className="homepage-container">
        <div className="meatlover-container">
          <img src="pic1.jpg" alt="requestimg" />
          <p>Meat Lover</p>
          <button onClick={handleMeatLoverOrder}>Order Here</button>
        </div>
        <div className="meatlover-container">
          <img src="vege.jpg" alt="requestimg" />
          <p>Vegetarian Lover</p>
          <button onClick={handleVegetarianLoverOrder}>Order Here</button>
        </div>
      </div>

      {meatLoverPopupVisible && <MeatLoverPopup onClose={closePopups} />}
      {vegetarianLoverPopupVisible && <VegeLoverPopup onClose={closePopups} />}
    </div>
  );
};

export default Homepage;
