import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
// import SwipeableViews from "react-swipeable-views";
import Item from "./Item";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface Props {
  data: Array<{
    Icon: React.ComponentClass<any>;
    desc: string;
  }>;
}

const SwipeableTextMobileStepper = ({ data }: Props) => {
  return (
    <div className="mobile-content">
      <Carousel showThumbs={false}>
        {data.map((v, index) => (
          <div key={v.desc}>
            <Item desc={v.desc} Icon={v.Icon} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SwipeableTextMobileStepper;
