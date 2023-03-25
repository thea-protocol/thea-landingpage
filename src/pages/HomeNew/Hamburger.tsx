import * as React from "react";
interface Props {
  props?: Object;
}
const HamBurger = (props: Props) => (
  <svg
    width={27}
    height={30}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.255 16.674h15.144c.303 0 .505-.4.505-1s-.202-1-.505-1H1.255c-.303 0-.505.4-.505 1s.202 1 .505 1ZM26.495.998H1.255c-.303 0-.505.4-.505 1s.202 1 .505 1h25.24c.303 0 .505-.4.505-1s-.202-1-.505-1ZM1.255 29.697h25.24c.303 0 .505-.4.505-1s-.201-1-.505-1l-25.24.001c-.303 0-.505.4-.505 1s.202 1 .505 1Z"
      fill="#fff"
    />
  </svg>
);

export default HamBurger;
