import { fontWeight } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Estimate from "/src/assets/estimateImg.svg";
import Button from "../Button";
import Item from "./Item";
import Slider from "./Slider";
const data = [
  {
    iconColor: "#105857",
    icon: "circle",
    title: "Estimate Carbon Footprint",
    desc: "Estimating one’s Carbon Footprint constitutes the first step towards taking action to combat climate change. Thea’s offering has adapted the open source ICAO Carbon Emission Calculator and presents Basic, Advanced; whether it be product lifecycle, business process, digital transaction, financial holdings, lifestyle or transportation impact and Bespoke options.",
    comingSoon: false,
    starRate: false,
  },
  {
    iconColor: "#C0504B",
    icon: "circle",
    title: "Purchase & Retire VCCs on Offset Event Dates",
    desc: "Purchase and Retire credibly registered VCCs on pre-specified Offset Event Dates,  with price and retirement date transparently visible.",
    comingSoon: false,
    starRate: false,
  },
  {
    iconColor: "#399CF5",
    icon: "rect",
    title: "Buy & Sell (T)BTs; (Type) Benchmark Tokens",
    desc: "Buy, hold, or trustlessly exchange tokens corresponding to common characteristics of VCCs that underpin public market product eligibility equivalence.",
    comingSoon: false,
    starRate: true,
  },
  {
    iconColor: "#3A8D8B",
    icon: "rect",
    title: "(Recover +) Purchase & Retire VCCs on Offset Event Dates",
    desc: "Utilize T(BT)s and tokens corresponding to VCC features such as vintage, SDGs and quality categorization, to purchase VCCs by reconstituting the relevant feature bundle. Retire credibly registered VCCs on pre-specified Offset Event Dates, with price and retirement date transparently visible. Registry account backing (as well as conversion and recovery actions) of a VCC characteristics’ digital correspondence is transparently represented and validated on-chain.",
    comingSoon: false,
    starRate: false,
  },
  {
    iconColor: "#E4E4E4",
    icon: "rect",
    title: "Bridge (+Convert) (coming soon)",
    desc: "Bridge VCCs on-chain with Thea registry eligibility confirmation and automatic eligibility of projects that satisfy deliverability into contracts negotiated in public markets. VCCs immobilized on the Thea Registry Ledger will correspond to ERC20 fungible tokens according to a novel Thea protocol methodology that allows for enhanced VCC price discovery and liquidity.",
    comingSoon: true,
    starRate: false,
  },
  {
    iconColor: "#E4E4E4",
    icon: "circle",
    title: "Participate in Thea Governance (coming soon) & Loyalty Program",
    desc: "Participate in climate challenges and airdrops, get rewarded for referrals, buy discounted merchandise, earn community recognition with Thea’s Soulbound Dynamic NFTs (dNFTs) within the Thea modular loyalty program.",
    comingSoon: true,
    starRate: false,
  },
];
const Tab1 = () => {
  return (
    <div className="tab-one-wrapper">
      <div className="user-experience">
        <h3>B2C Offering</h3>
        <h2> Thea Web App</h2>
        <h4>Climate Positive Action; made easy.</h4>
        <img className="estimate-image" src={Estimate} />
        {/* <h3 className="im-title">
          Estimate and offset your carbon footprint by purchasing and retiring
          VCCs.
        </h3> */}
        <p>
          Estimate Your Carbon Footprint & Commit to Action
        </p>
        <p>
          Offset Carbon Footprint by 
          <br />Purchasing & Retiring Nature-based Voluntary Carbon Credits at
          <br />Offset Event Dates: 
          <br />
          <strong style={{ color: "#C0504B", fontWeight: 600 }}>
            OffsetDirect
          </strong>
        </p>

        <p>
          <i>Purchase, Sweat & Utilize NBTs to</i>
          <br />Offset Carbon Footprint by
          <br  />Purchasing & Retiring Nature-based Voluntary Carbon Credits at
          <br />Offset Event Dates: 
          <br />{" "}
          <strong>
            <span style={{ color: "#3A8D8C", fontWeight: 600 }}>
              Web3 Detour
            </span>{" "}
            + <span style={{ color: '#399CF5', fontWeight: 600 }}> DA Line</span>
          </strong>
        </p>
        <Link target={"_blank"} to="https://app.thea.earth">
          <Button arrow={false}>Explore App</Button>
        </Link>
        <Link to="https://thea-protocol.github.io/thea-documentation/" target="_blank">
          <Button arrow={false}>SDK Documentation</Button>
        </Link>
      </div>
      <div className="solutions">
        <div className="stepper-wrapper">
          <Slider data={data} />
        </div>
        {data.map((v) => (
          <Item
            key={v.desc}
            desc={v.desc}
            icon={v.icon}
            title={v.title}
            divider={true}
            iconColor={v.iconColor}
            comingSoon={v.comingSoon}
            starRate={v.starRate}
          />
        ))}
        <div className="disclaimer">
          <sup>*</sup> These instruments do NOT 'tokenize' or 'represent' any
          actual VCCs. They reflect the equivalent of the mathematical
          construct, the first principal component of VCC pricing variation of a
          time series of VCC prices that corresponds to the family of
          characteristics that defines eligibility in a benchmark basket.
        </div>
      </div>
    </div>
  );
};

export default Tab1;
