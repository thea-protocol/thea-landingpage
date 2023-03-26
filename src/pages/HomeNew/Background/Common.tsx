// @ts-nocheck
import React, { useEffect } from "react";
import Header from "../../HomeNew/Header";
import PositiveAction from "./PositiveAction";
import Footer from "../../HomeNew/Footer";
import "./styles.css";
import MobileHeader from "../../HomeNew/MobileHeader";

const Background = ({ title, data, renderItem }) => {
  useEffect(() => {
    var header = document.getElementById("myHeader");
    header!.classList.add("sticky");
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="bodyBg"></div>
      <div className="container">
        <MobileHeader />
        <Header />
        <div className="content">
          <h1 id="carbonHash">{title}</h1>
          {/* <img src={AerialForest} /> */}
          {data.map(renderItem)}
        </div>
        <PositiveAction />
        <Footer />
      </div>
    </div>
  );
};

export default Background;
