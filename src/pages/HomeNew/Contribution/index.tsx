import React from "react";
import ContriImage from "/src/assets/contributionImg.svg";
import Button from "../Button";
import "./styles.css";
import IconOne from "./IconOne";
import IconTwo from "./IconTwo";
import IconThree from "./IconThree";
import IconFour from "./IconFour";
import IconFive from "./IconFive";
import IconSix from "./IconSix";
import Item from "./Item";
import { Link } from "react-router-dom";
import Slider from "./Slider";
const data = [
  {
    Icon: IconOne,
    desc: "Standards’ alignment between the on-chain market and the off-chain carbon trading world for enhanced price discovery",
  },
  {
    Icon: IconTwo,
    desc: "Transparent registry. Thea bridged and transacted VCCs are verified according to leading VCC registries’ methodology. Thea registry presents all publicly available information related to these projects and their associated issued VCCs.",
  },
  {
    Icon: IconThree,
    desc: "A novel liquidity enhancing solution; fungible tokens tradable on exchanges and eligible to seed AMM pools",
  },
  {
    Icon: IconFour,
    desc: "Eventual trustless ecosystem governance and incentive compatible embeddable loyalty program",
  },
  {
    Icon: IconFive,
    desc: "A protocol-affiliated VCC inventory management, timing mismatch efficiency enforcement and monetization mechanism",
  },
  {
    Icon: IconSix,
    desc: "All Protocol Actions including issuance, decomposition and reconstitution, loyalty reward mechanism governance, user issuance allocation and VCC retirement will be rendered transparently auditable by utilizing open source principles and are transcribed on Polygon's Layer 2 blockchain solution.",
  },
];
const Contribution = () => {
  return (
    <div className="contribution" id="contribution">
      <h1>Thea: Contribution</h1>
      <div className="contribution-content">
        <div className="contribution-part-one">
          <h2>Thea Protocol</h2>
          <div>
            {data.map((v) => (
              // @ts-ignore
              <Item Icon={v.Icon} desc={v.desc} key={v.desc} />
            ))}
            {
              // @ts-ignore
              <Slider data={data} />
            }
          </div>
        </div>
        <div className="contribution-part-two">
          <img src={ContriImage} className="contri-image" />
          <Link to="/home">
            <Button>Explore App</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contribution;
