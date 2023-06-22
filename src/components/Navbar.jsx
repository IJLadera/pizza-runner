import React, { useContext, useState } from "react";

import { AppContext } from "../components/App";

import "../css/navbar.css";

const Navbar = () => {
    const { isLoggedIn,  bodyContainer, setBodyContainer } = useContext(AppContext);


    const handleClick = (value) => {
        setBodyContainer(value);
      }
    

    return (
        <>
          {isLoggedIn.role === null && (
            <div className="landing-header-container">
              <div className="landing-logo-container">
         pizza hut
              </div>
            </div>
          )}
    
          {/* REQUESTOR */}
          {isLoggedIn.role === "user" && (
            <div className="header-container">

              <div className="landing-button">
                <button
                  className="button-click"
                  onClick={() => handleClick("homepage")}
                >
                  Home
                </button>
                <button
                  className="button-click"
                  onClick={() => handleClick("order-details")}
                >
                  Order
                </button>
                <button
                  className="button-click"
                  onClick={() => handleClick("about-us")}
                >
                  About Us
                </button>
             
                <button
                  className="button-click"
                  onClick={() => handleClick("for-request")}
                >
                  Logout
                </button>
             
              </div>
            </div>
          )}

        </>
      );
    };

export default Navbar;
