import React from "react";
interface Props {
  title:string;
  rest?:Object;
  active:boolean;
  onClick?:React.MouseEventHandler<HTMLButtonElement>;
}

const Item = ({ title, active,onClick, ...rest}:Props) => {
  return <button className={`impact-item ${active&& "impact-item-active"}` } onClick={onClick} {...rest}><span>{title}</span></button>;
};

export default Item;
