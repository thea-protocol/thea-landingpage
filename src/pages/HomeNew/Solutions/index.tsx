import React, { useCallback, useState } from "react";
import Tab from "./Tab";
import "./styles.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Accordion from "../Impact/Accordion";
const data = [
  "Lack of Pricing Transparency | Lack of Liquidity and Fungibility",
  "Low Quality VCCs",
  "Absence of User Optionality Monetization",
];
const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabChange = useCallback(
    (tab: number) => () => {
      setActiveTab(tab);
    },
    []
  );

  return (
    <div className="theaSolutions" id="solutions">
      <div className="sols-title">
        Thea: Solutions
      </div>
      <div className="sols-desc">
        Trustless, permissionless networks allow for coordinating collective
        action coordination, incentive alignment, value and information trading
        without trusted intermediaries. Entwined issues plague extant
        approaches; while commending the motivation to be part of the solution,
        misaligned incentives hamper adoption, engender suspicion and create
        unhelpful publicity.
      </div>
      <div className="sols-tabs-wrapper">
        {data.map((v, index) => (
          <Tab
            onClick={onTabChange(index)}
            title={v}
            key={v}
            active={activeTab == index}
          />
        ))}
      </div>
      <Accordion data={data} onChanged={onTabChange} />

      <div className="sols_content">
        {activeTab === 0 && <Tab1 />}
        {activeTab === 1 && <Tab2 />}
        {activeTab === 2 && <Tab3 />}
      </div>
    </div>
  );
};

export default Solutions;
