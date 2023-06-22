import React, { createContext, useState } from "react";
import "../css/App.css";
import Body from "./Body";
import Navbar from "./Navbar";
import Footer from "./Footer";

export const AppContext = createContext();

function App() {
  const [bodyContainer, setBodyContainer] = useState("homepage");
  const [isLoggedIn, setIsLoggedIn] = useState({
    role: "user",
  });


  return (
    <div className="App">
      <div className="main-container">
        <AppContext.Provider
          value={{
            isLoggedIn,
            setIsLoggedIn,
            bodyContainer,
            setBodyContainer
          }}
        >
          {isLoggedIn.role === "admin" && (
            <div className="main-wrapper">
              <Navbar />
              <Body />
              <Footer />
            </div>
          )}

{isLoggedIn.role === "user" && (
            <div className="main-wrapper">
              <Navbar />
              <Body />
              <Footer />
            </div>
          )}

          {isLoggedIn.role === null && (
            <div className="main-wrapper">
              <Navbar />
              <Body />
              <Footer />
            </div>
          )}
        </AppContext.Provider>
      </div>
    </div>
  );
}

export default App;
