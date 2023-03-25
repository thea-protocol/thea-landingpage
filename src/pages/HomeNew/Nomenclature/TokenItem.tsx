import React from "react";

interface Props {
  png: string | undefined;
  title?: string;
  desc?: string;
}
const TokenItem = ({ png, title, desc }: Props) => {
  return (
    <div className="nomenclature-token-item">
      <img src={png} className="nomenclature-token-img" />
      <div className="nomenclature-details">
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default TokenItem;
