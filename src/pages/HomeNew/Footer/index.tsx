import React from "react";
import TheaIcon from "./TheaIcon";
import "./styles.css";
import Button from "../Button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="left">
        <Link to="/home">
          <TheaIcon />
        </Link>        
        <p>Climate Positive Action; made easy.</p>
        <Link to="/home">
          <Button>Explore App</Button>
        </Link>
      </div>
      <div className="links">
        <div className="footer-row">
          <div className="footer-title">Navigation</div>
          <Link className="footer-anchor" to="/background">
            Background
          </Link>
          <Link className="footer-anchor" to="/home/offerings">
            Offering
          </Link>
          <Link className="footer-anchor" to="/home/contribution">
            Contribution
          </Link>          
        </div>
        <div className="footer-row">
          <div className="footer-title">About</div>
          <Link className="footer-anchor" to="/team">
            Team
          </Link>
          <a className="footer-anchor" href="#">
            Terms of Service
          </a>
          <a className="footer-anchor" href="#">
            Privacy Policy
          </a>
          <Link className="footer-anchor" to="https://thea-protocol.github.io/thea-documentation/" target="_blank">
            SDK Documentation
          </Link>
        </div>
        <div className="footer-row">
          <div className="footer-title">Support</div>
          <a className="footer-anchor" href="#">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
