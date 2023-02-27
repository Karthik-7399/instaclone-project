import './LandingPage.css';
import img from '../Images/main.PNG'
import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landingPage">
      <div className="row">
        <div className="col">
          <img src={img} alt="img" id="image" />
        </div>
        <div className="col1">
          <h1 className="heading">10x Team 04</h1>
          <Link to="PostView"><button>Enter</button></Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;