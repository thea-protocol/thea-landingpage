import React from "react";
import SolutionItem from "./SolutionItem";

const data = [
  "Thea (T)BTs correspond to VCC characteristics immobilized on the Thea Registry Ledger (and therefore the associated public databases that accompany Thea Registry eligibility).",
  "Thea’s innovative reduction of state space dimensionality allows for liquidity enhancement. We concentrate price discovery onto a set of features that can replicate parsimoniously each ton pricing dynamics and leveraging permissionless liquidity pool infrastructure, leads to ‘1+3’ building blocks ( vs ‘1+200’ ) with linear as opposed to exponential pool scaling. The NBT price will be anchored to liquid benchmarks;",
  "Holders of VCCs satisfying certain specifications shall be able to have tokens minted and delivered on-chain. Thea will deliver seamless bridging by targeting to anchor on-chain pricing to off-chain markets.",
];

const Tab1 = () => {
  return (
    <div className="sols_tab_one">
      <div style={{ flex: 1 }}>
        <h2>Problem</h2>
        <div>
          Market developments have allowed for price discovery of the cheapest
          to deliver ton within a deliverable pool. Inevitably though, most
          projects still trade OTC, at a spread against CTD with concerns around
          transparency, liquidity, and impact of intermediaries.
          <br />
          <br />
          Blockchain based efforts have also not been successful creating
          fungibility and interoperability between on-chain and off-chain
          expressions of identical assets.
        </div>
      </div>
      <div style={{ width: 1, backgroundColor: "#fff", margin: "0 64px" }} />
      <div className="second-section-tab1">
        <h2>
          Solution: <strong>Thea Liquidity-Enhancing Market Structure</strong>
        </h2>
        <div>
          {data.map((v) => (
            <SolutionItem key={v} desc={v} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Tab1;
