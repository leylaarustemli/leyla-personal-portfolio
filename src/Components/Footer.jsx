import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="ust-footer">
          <div className="address">
            <div className="icon">
              <i class="fa-solid fa-location-dot"></i>
            </div>
            <div className="title-p">
              <h4>Address</h4>
              <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            </div>
          </div>
          <div className="address">
            <div className="icon">
              <i class="fa-solid fa-phone"></i>
            </div>
            <div className="title-p">
              <h4>Lets talk us</h4>
              <p>(603) 555-0123</p>
              <p>(603) 555-0123</p>
            </div>
          </div>
          <div className="address">
            <div className="icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="title-p">
              <h4>Send us email</h4>
              <p>deanna.curtis@example.com curtis@example.com</p>
            </div>
          </div>
        </div>
       <hr />
        <div className="alt-footer">
       
          <div className="left-ftr">
            <span>© CodeeFly 2023 | All Rights Reserved</span>
          </div>
          <div className="right-ftr">
            <p>Trams & Condition</p>
            <p>Privacy Policy</p>
            <p>Sitemap</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
