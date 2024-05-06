import React from "react";
import "./Section1.css";
import leyla from "./img.jpg"
const Section1 = () => {
  return (
    <section className="section1">
      <div className="container">
        <div className="left-sectn1">
          <h1>HI, I'M LEYLA! CREATIVE DESIGNERCODER</h1>
          <p>I'm a passionate UI/UX designer with a mission to create delightful and intuitive digital experiences. With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex ideas into user-friendly interfaces that captivate and engage.</p>
          <div className="btn-video">
            <a href="">DOwnload Cv <i class="fa-solid fa-download"></i></a>
            <div className="icn-p">
            <i class="fa-solid fa-play"></i> <p>Watch The Video</p>
            </div>
          </div>
        </div>
        <div className="right-sctn1">
          <img src={leyla} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Section1;
