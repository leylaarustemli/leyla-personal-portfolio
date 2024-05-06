import React from "react";
import "./Header.css"
import logo from "./logo.jpg"
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="left-header">
          <img src={logo} alt="" />
        </div>
        <div className="middle-header">
          <a href="">HOME</a>
          <a href="">ABOUT US</a>
          <a href="">SERVICES</a>
          <a href="">PROJECTS</a>
          <a href="">BLOG</a>
          <a href="">CONTACTS</a>
        </div>
      
           <i className="fa-solid fa-bars"></i>
   
      </div>
    </header>
  );
};

export default Header;
