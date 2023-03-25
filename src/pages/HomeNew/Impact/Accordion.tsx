import React, { useCallback, useEffect, useState } from "react";
import ArrowDownward from "@mui/icons-material/KeyboardArrowDown";
import ArrowUpward from "@mui/icons-material/KeyboardArrowUp";

export type OnChanged = (index: number) => () => void;

interface Props {
  data: Array<string>;
  onChanged: OnChanged;
}
const Accordion = ({ data, onChanged }: Props) => {
  const [selected, setSelected] = useState(0);
  const [expand, setExpand] = useState(false);

  const onExpand = useCallback(() => {
    setExpand((o) => !o);
  }, []);

  const onSelected = useCallback(
    (ind: number) => () => {
      onChanged(ind)();
      setSelected(ind);
      setExpand(false);
    },
    []
  );
  
  return (
    <div className="items-wrapper-mobile">
      <button className="title-arrow" onClick={onExpand}>
        <span>{data[selected]}</span>
        {!expand && <ArrowDownward />}
        {expand && <ArrowUpward />}
      </button>
      <div className={`dropdown-menu ${expand ? "open" : ''}`}>
        {expand &&
          data.map((v, i) => {
              if(i===selected) {
                return;
              }
              return <button key={i} onClick={onSelected(i)} >{v}</button>
          })}
      </div>
    </div>
  );
};

export default Accordion;
