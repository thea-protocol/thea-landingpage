import * as React from "react";


interface Props {
  props: Object;
}


const IconTwo = (props:Props) => (
  <svg
    width={61}
    height={61}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M28.9317 0.0136719V38.5851H21.4451V19.2994H0.0546875V60.0137H40.6964V46.0851H59.9477V45.0137H60.0547V0.0136719H28.9317ZM2.19372 21.4422H9.68036V25.728H11.8194V21.4422H19.306V38.5851H2.19372V21.4422ZM19.306 57.8708H2.19372V40.728H9.68036V45.0137H11.8194V40.728H19.306V57.8708ZM38.5574 57.8708H21.4451V40.728H28.9317V46.0851H38.5574V57.8708ZM57.9163 43.9422H31.072V2.15653H57.9163V43.9422Z" fill="white"/>
  </svg>
);

export default IconTwo;
