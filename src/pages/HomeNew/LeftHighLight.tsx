import React from "react";
interface Props{
  content:React.ReactNode
}

const LeftHighLight = ({ content }:Props) => {
  return <div className="hightlighted-content">{content}</div>;
};

export default LeftHighLight;
