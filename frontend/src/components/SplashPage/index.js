/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./SplashPage.css";

function SplashPage() {
  return (
    <div className="pageContainer">
      <div className="backgroundContainer">
        <img src="images/Sc3.jpg" alt="Background Image" />
      </div>
      <div className="detailsContainer">
        <h2>Welcome to,</h2>
        <h1>Cosmic Hunt</h1>
        <h2>Your repo for all spacefaring products</h2>
      </div>
    </div>
  );
}

export default SplashPage;
