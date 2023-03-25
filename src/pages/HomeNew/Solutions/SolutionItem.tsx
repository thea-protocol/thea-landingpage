import React from "react";

interface Props {
  desc: string;
}
const SolutionItem = ({ desc }: Props) => {
  return (
    <div className="sols-item-wrapper">
      <div className="sols-item-bullet" />
      <div style={{ flex: 1 }}>{desc}</div>
    </div>
  );
};

export default SolutionItem;
