import React from 'react';
import { useContext } from "react";

import { AppContext } from "../components/App";

function Login() {
    const { bodyContainer, setBodyContainer } = useContext(AppContext);
  return (
    <>
 <div>
  
 {bodyContainer !== "forgot" ? (
  <div>
    login page ko lolol!
    </div>
 ):(
  <Forgot/>
 )}
 </div>
</>
  )
}

export default Login
