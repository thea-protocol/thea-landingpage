// @ts-check
import React, { useEffect, useState, useCallback } from "react";
import useQuery from "/src/hooks/useQuery";
import Button from "../Button";
import "./styles.css";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";

const Offerings = () => {
  const [activeTab, setActiveTab] = useState(0);
  const query = useQuery().get("tab");

  useEffect(() => {
    const tab = parseInt(query || "0");
    if (tab) {
      setActiveTab(1);
    } else {
      setActiveTab(0);
    }
  }, [query]);

  const onTabChange = useCallback(
    (tab: number) => () => {
      setActiveTab(tab);
    },
    []
  );

  return (
    <div className="offerings" id="offerings">
      <h4 className="offering-title">Thea: Offering</h4>
      <div className="offering-content">
        <div className="tab-wrapper">
          <Button
            arrow={false}
            onClick={onTabChange(0)}
            extraClasses={activeTab === 0 ? "active-tab" : "inactive-tab"}
          >
            Thea: User Experience
          </Button>
          <Button
            arrow={false}
            onClick={onTabChange(1)}
            extraClasses={activeTab === 1 ? "active-tab" : "inactive-tab"}
          >
            Modular SDK Solutions
          </Button>
        </div>
        <div className="tab-content-wrapper">
          {activeTab === 0 && <Tab1 />}
          {activeTab === 1 && <Tab2 />}
        </div>
      </div>
    </div>
  );
};

export default Offerings;
