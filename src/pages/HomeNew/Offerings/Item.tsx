import React from "react";
interface Item {
  title:string;
  desc:string;
  iconColor:string;
  icon:string;
  divider?:boolean;
  comingSoon?:boolean;
  starRate?:boolean;
}
const Item = ({
  title = "",
  desc = "",
  iconColor = "#105857",
  icon = "rect",
  divider = true,
  comingSoon = true,
  starRate = false,
}:Item) => {
  return (
    <>
      <div className="item-wrapper">
        <div
          className={icon === "circle" ? "item-circle" : "item-rect"}
          style={icon === "circle" ? { borderColor: iconColor } : { backgroundColor: iconColor }}
        />
        <div className="item-details">
          <div className="item-title">{comingSoon ? (<i>{title}</i>) : title}</div>
          <div className="item-desc">{desc}{starRate ? <span style={{ color: '#C0504B', fontWeight: 600 }}>*</span> : ''}</div>
        </div>
      </div>
      {divider && <div className="border" />}
    </>
  );
};

export default Item;
