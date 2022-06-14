/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./SplashPage.css";

function SplashPage() {
  return (
    <div className="pageContainer">
      <div className="backgroundContainer">
        <img src="images/Sc2.png" alt="Background Image" />
      </div>
      <div className="detailsContainer">
        <div className="nestedContainer">
          <h2>Welcome to,</h2>
          <h1>
            <span>C</span>
            <span>o</span>
            <span>s</span>
            <span>m</span> 
            <span>i</span>
            <span>c</span>
            <span> </span>
            <span>H</span>
            <span>u</span> 
            <span>n</span>
            <span>t</span>
          </h1>
          <h2>Your repo for all spacefaring products...</h2>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
