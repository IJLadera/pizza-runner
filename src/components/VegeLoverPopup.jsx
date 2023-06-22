import React, { useState } from "react";
import "../css/popup.css";

const VegeLoverPopup = ({ onClose }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions((prevOptions) => [...prevOptions, value]);
    } else {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((option) => option !== value)
      );
    }
  };

  return (
    <div className="popup-container">
      <div className="popup-content">
        <div className="popup-outline">
          <h2 className="popup-title">Vegetarian Lover Popup</h2>
          <div className="popup-options">
            <div className="popup-option">
              <label>
                <input
                  type="checkbox"
                  value="bacon"
                  onChange={handleCheckboxChange}
                />
                Cheese
              </label>
            </div>
            <div className="popup-option">
              <label>
                <input
                  type="checkbox"
                  value="bbq_sauce"
                  onChange={handleCheckboxChange}
                />
                Mushroom
              </label>
            </div>
            <div className="popup-option">
              <label>
                <input
                  type="checkbox"
                  value="beef"
                  onChange={handleCheckboxChange}
                />
                Onions
              </label>
            </div>
            <div className="popup-option">
              <label>
                <input
                  type="checkbox"
                  value="cheese"
                  onChange={handleCheckboxChange}
                />
                Pepper
              </label>
            </div>
            <div className="popup-option">
              <label>
                <input
                  type="checkbox"
                  value="chicken"
                  onChange={handleCheckboxChange}
                />
                Tomato
              </label>
            </div>
            <div className="popup-option">
              <label>
                <input
                  type="checkbox"
                  value="mushroom"
                  onChange={handleCheckboxChange}
                />
                Tomato Sauce
              </label>
            </div>
            <div className="popup-option">
              <label>
                <input
                  type="checkbox"
                  value="pepperoni"
                  onChange={handleCheckboxChange}
                />
                Pepperoni
              </label>
            </div>
            <div className="popup-option">
              <label>
                <input
                  type="checkbox"
                  value="salami"
                  onChange={handleCheckboxChange}
                />
                Salami
              </label>
            </div>
          </div>
          <div className="popup-buttons">
            <button className="popup-button popup-button-primary" onClick={onClose}>
              Order
            </button>
            <button className="popup-button popup-button-secondary" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VegeLoverPopup;
