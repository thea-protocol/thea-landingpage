import React from "react";
import Button from "../Button";
import "./styles.css";
import { Link } from "react-router-dom";

const AboutTeam = () => {
  return (
    <div className="about-team-wrapper">
      <h1>Thea: Team</h1>
      <p>
        We are a global group with domain expertise that bridges carbon, financial markets and Web3. 
        <br />We are innovators, engineers and entrepreneurs with relentless resolve and focused ambition 
        <br />to build next generation climate solutions that leverage risk sharing principles for good.
      </p>
      <Link to="/team">
        <Button>View team</Button>
      </Link>
    </div>
  );
};

export default AboutTeam;
