import React from "react";


interface Props {
  Icon : React.ComponentClass<any>;
  desc:string;
}


const Item = ({ Icon, desc }:Props) => {
  return (
    <div className="item-wrapper">
      <div className="protocolIcon">
        <Icon />
      </div>
      <div className="contri-item-desc">{desc}</div>
    </div>
  );
};

export default Item;
