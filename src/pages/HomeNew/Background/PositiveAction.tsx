import React from "react";
import { Link } from "react-router-dom";
import BgFooterImg from "../../../assets/background-footer.svg";

const PositiveAction = () => {
  return (
    <div className="positive-action-wrapper">
      <img src={BgFooterImg} className="background-footer-img" />
      <div>
        <h2>Climate Positive Action; made easy.</h2>
        <p>
          Thea delivers modular infrastructure for users and businesses to
          access the VCM by reducing barriers to entry as well as implementing
          novel methodology to improve market liquidity and enhance transparency
          on VCC provenance and pricing.
        </p>
        <Link to="/home">Explore App</Link>
      </div>
    </div>
  );
};

export default PositiveAction;
