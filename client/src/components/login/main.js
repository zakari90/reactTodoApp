import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Login from "./login";
import SignUp from "./SignUp";

function Main() {
    return (
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
        </BrowserRouter>
        </>
    );
  }
  
  export default Main;