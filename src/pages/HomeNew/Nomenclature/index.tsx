import React from "react";
import NomenclatureLogo from "/src/assets/nomenclaturelogo.png";
import SDGToken from "/src/assets/sdg-token.png";
import Calendar from "/src/assets/calendar.png";
import Qaulity from "/src/assets/quality-token.png";
import "./styles.css";
import TokenItem from "./TokenItem";
import Button from "../Button";
import { Link } from "react-router-dom";

const items = [
  {
    png: SDGToken,
    title: "SDG Token",
    desc: "SDG Tokens correspond to  the satisfaction of a Sustainable Development Goals (SDG) as defined by the UN; a collection of 17 interlinked global goals designed to be a shared blueprint for peace and prosperity for people and the planet.",
  },
  {
    png: Calendar,
    title: "Vintage Token",
    desc: "Vintage Tokens correspond to one calendar year, reflecting additively more recent vintages than the (T)BT vintage.",
  },
  {
    png: Qaulity,
    title: "Quality Token",
    desc: "Quality Token corresponds to the BeZero Carbon Rating (BCR) score available in the public domain assigned to a project, being an estimate on the likelihood that a given credit achieves stated carbon avoidance or removal volumes. The token represents additive avoidance/removal worthiness.",
  },
];

const Nomenclature = () => {
  return (
    <div className="token">
      <h1>Thea: Token Nomenclature</h1>
      <div className="benchmark-wrapper">
        <img
          src={NomenclatureLogo}
          style={{ height: 60, marginRight: "1.1vw", width: 60 }}
        />
        <div>
          <h3>(Type) Nature Benchmark Token</h3>
          <p>
            Nature Benchmark Tokens correspond to the baseline characteristics
            equivalent to deemed equivalent market standards that underpin
            public market product eligibility equivalence and will follow
            similar methodology for other characteristics’ bundles.
          </p>
        </div>
      </div>
      <h2>Feature Tokens</h2>
      <div className="nomenclature-token-item-wrapper">
        {items.map((v) => (
          <TokenItem {...v} key={v.desc} />
        ))}
      </div>
      <div className="explore">
        <Link target={"_blank"} to="https://app.thea.earth">
          <Button>Explore App</Button>
        </Link>
      </div>
    </div>
  );
};

export default Nomenclature;
