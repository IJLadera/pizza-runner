import React from "react";
import { useContext } from "react";
import Login from "./Login";
import Homepage from "./Homepage";
import OrderForm from "./OrderForm"

import { AppContext } from "../components/App";
import OrderDetails from "./OrderDetails";
import AboutUs from "./AboutUs";

const Body = () => {
  const { isLoggedIn, bodyContainer } = useContext(AppContext);

  return (
    <>
      {isLoggedIn.role === null ? (
        <div className="body-container">
          <Login />
        </div>
      ) : null}

      {isLoggedIn.role === "user" && (
        <div className="body-container">
          {bodyContainer === "homepage" && <Homepage />}
          {bodyContainer === "order-details" && <OrderDetails />}
          {bodyContainer === "about-us" && <AboutUs />}
        </div>
      )}
    </>
  );
}

export default Body;
