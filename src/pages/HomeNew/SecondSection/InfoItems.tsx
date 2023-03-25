import { useCallback, useState } from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
interface Props {
  title: string;
  desc: string;
  hash: string;
  descExtra: string;
}

const InfoItems = ({ title, desc, hash, descExtra }: Props) => {
  return (
    <div className="infoItems">
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to={`/background?hash=${hash}`}>
        <Button arrow={false}>{"Read More"}</Button>
      </Link>
    </div>
  );
};

export default InfoItems;
