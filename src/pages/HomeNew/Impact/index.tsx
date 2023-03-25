import React, { useState, useCallback } from "react";
import Item from "./Item";
import "./styles.css";
import Accordion from "./Accordion";

const data = [
  "VCC purchase & hold",
  "(T)BT purchase commitment at a discount",
  "(T)BT sell commitment at a premium",
  "VCC purchase & retire",
];

const Impact = () => {
  const [activeTab, setActiveTab] = useState(0);

  const onTabChange = useCallback(
    (tab: number) => () => {
      setActiveTab(tab);
    },
    []
  );

  return (
    <div className="impact-wrapper">
      <div className="impact-title">
        Market-based climate positive impact actions
      </div>
      <div className="impact-tabs">
        <div className="items-wrapper">
          {data.map((v, i) => (
            <Item
              title={v}
              key={v}
              onClick={onTabChange(i)}
              active={activeTab === i}
            />
          ))}
        </div>
        <Accordion data={data} onChanged={onTabChange} />
        {activeTab === 0 && (
          <p>
            Buying and Holding VCCs with an expectation of price appreciation
            that renders Carbon emissions more costly for polluters can motivate
            user engagement instead of only relying on mimesis or conspicuous
            consumption motives.
          </p>
        )}
        {activeTab === 1 && (
          <p>
            In financial markets, target selling and target buying are
            accompanied by regret for trading at worse than market levels at
            time of execution; in the VCC market setting though, the commitment
            to buy NBTs at a lower level than the prevailing market price allows
            for risk transfer from willing parties that would have stood ready
            to immolate a budget to public acclaim to project developers or
            market intermediaries that play an important risk management role. 
            Carbon project bankability enabled by hedging price downside similar
            to how structured commodity finance matured for all sectors provide
            a blueprint for market development and proper end user participation
          </p>
        )}
        {activeTab === 2 && (
          <p>
            Opening up the VCC market to inflows of speculative capital will add
            another reliable way to achieve decarbonisation goals by increasing
            the price of carbon; providing the infrastructure that would enable
            expressions of leveraged market upside by rewarding carbon price
            exposure together with the commitment to monetize at a higher price,
            will allow all types of market participants to contribute towards a
            robust carbon pricing framework.
          </p>
        )}
        {activeTab === 3 && (
          <p>
            Purchasing & Retiring VCCs allows for a credible price signal to VCC
            producers and polluters. Grassroots pressure for carbon footprint
            offset commitments will translate into an increasing price for
            certifiably high quality offsets that are recognized as a
            trustworthy means of fulfilling such commitments.*    *Compared with
            a cap and trade allowance price delineated by administrative
            measures and impacted by arbitrary bureaucratic interventions
            without end user participation. We find it hard to envisage a
            lobbying riddled methodology for allocating deemed valuable permits
            and a haphazard and discretionary methodology for eventual phasing
            out to provide the only desired price signal.
          </p>
        )}
      </div>
    </div>
  );
};

export default Impact;
