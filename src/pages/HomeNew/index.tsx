// @ts-nocheck
import React, { useEffect } from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import Offerings from "./Offerings";
import SecondSection from "./SecondSection";
import "./styles.css";
import Impact from "./Impact";
import Contribution from "./Contribution";
import Nomenclature from "./Nomenclature";
import AboutTeam from "./AboutTeam";
import Solutions from "./Solutions";
import Footer from "./Footer";
import MobileHeader from "./MobileHeader";
import { useLocation, useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeNew = () => {
  const params = useParams();
  const loc = useLocation();
  console.log({ loc: loc.key });

  React.useEffect(() => {
    AOS.init({
      once: false,
      disable: false,
    });
  }, []);

  useEffect(() => {
    console.log(loc?.key, params.sub);
    if (params.sub) {
      const el = document.getElementById(params.sub);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      const el = document.getElementById("header-wrapper");
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [loc.key]);

  return (
    <div>
      <div className="bodyBg"></div>
      <div className="container">
        <MobileHeader />
        <div className="headerWrapper" id="header-wrapper">
          <Header />
        </div>
        <MainContent />
          <SecondSection />
          <Offerings />
          <Impact />
          <Contribution />
          <Solutions />
          <Nomenclature />
          <AboutTeam />
          <Footer />
      </div>
    </div>
  );
};

export default HomeNew;
