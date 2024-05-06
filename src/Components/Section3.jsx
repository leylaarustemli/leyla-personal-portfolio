import React from "react";
import "./Section3.css";
import leyla2 from "./leyla2.jpg"
const Section3 = () => {
  return (
    <section className="section3">
    <div className="container">
    <div className="left-sectn3">
        <h4>About me</h4>
        <h2>Transforming visions into exceptional portfolios</h2>
        <div className="before-p">
          <div>-</div>
          <p>
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
            odit auting fugit sed thisnquia consequuntur magni dolores eos
            designer heresm qui ratione
          </p>
        </div>
        <div className="down-btn">
          <button>Download Cv <i class="fa-solid fa-download"></i></button>
        </div>
      </div>
      <div className="right-sectn3">
        <img width="375px" src={leyla2} alt="" />
        <div className="daily-activity">
    
          
            <p>Daily Activity</p>
            <span>Loream is ispam</span>
           </div>
        </div>
      </div>

    
    </section>
  );
};

export default Section3;
