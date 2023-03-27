// @ts-nocheck
import React, { useEffect } from "react";
import Dimitrios from "../../../assets/Dimitrios.png";
import David from "../../../assets/David-new.png";
import Nassif from "../../../assets/Nassif-new.png";
import Minas from "../../../assets/Minas.png";
import PositiveAction from "./PositiveAction";
import Footer from "../HomeNew/Footer";
import "./styles.css";
import Common from "./Common";
import { useLocation } from "react-router-dom";

const data = [
  {
    pic: Dimitrios,
    name: "Dimitrios Kavvathas",
    link: "https://www.linkedin.com/in/dimitrios-kavvathas-3bb3654/",
    desc: (
      <p>
        Former Partner at Goldman Sachs in London and Hong Kong offices, with
        21+ years experience in asset management and financial derivatives; PhD
        in Economics from the University of Chicago; Previous founder of
        decentralized derivatives trading protocol; former Chief Strategy
        Officer at Amber Group, Chief Investment Officer at Harmony Advisors
        Ltd.
      </p>
    ),
  },
  {
    pic: David,
    name: "David Duarte",
    link: "https://www.linkedin.com/in/davidmduarte/",
    desc: (
      <p>
        Former Head of Trading Room for the Portuguese Government, with 20+
        years experience in derivatives trading, including Head of Capital
        Markets for BPN; Adjunct Lecturer in algorithmic trading, computational
        finance and derivatives; full stack blockchain developer.
      </p>
    ),
  },
  {
    pic: Nassif,
    name: "Nassif Chedrawi",
    link: "https://www.linkedin.com/in/nassif-chedrawi-a1034484/",
    desc: (
      <p>
        Former web2 founder and startup advisor experienced in building SaaS and
        marketplace products from ideation to implementation and revenue. Having
        raised multiple funding rounds, Nassif is also experienced in
        early-stage fundraising/deal structuring as well as a Certified
        Blockchain Expert.
      </p>
    ),
  },
  {
    pic: Minas,
    name: "Minas Abramyan",
    link: "https://www.linkedin.com/in/mabramyan/",
    desc: (
      <p>
        Senior software engineer/architect with experience in finance, de-fi
        applications and cryptography. 5+ years experience in development
        management, 8+ years as software architect and 13+ years in Java,
        backend and IS applications development. Certified Penetration Tester by
        ICSI (International CyberSecurity Institute UK).
      </p>
    ),
  },
];

const Background = () => {
  const loc = useLocation();

  useEffect(() => {
    var header = document.getElementById("myHeader");
    header!.classList.add("sticky");
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [loc.key]);

  return (
    <Common
      title={"Privacy Policy"}
      data={data}
      renderItem={(v) => (
        <div className="profile-item">
          {/* <img src={v.pic} className="profile-image" />
          <div className="profile-info">
            <h2>
              {v.name} <a href={v.link} target="_blank"></a>
            </h2>
            {v.desc}
          </div> */}
        </div>
      )}
    />
  );
};

export default Background;
