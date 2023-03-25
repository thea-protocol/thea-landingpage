import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import SwipeableViews from "react-swipeable-views";
import Item from "./Item";
import "./styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


interface Props {
  data: Array<{
    iconColor: string;
    icon: string;
    title: string;
    desc: string;
    comingSoon: boolean;
    starRate: boolean;
  }>;
}

const SwipeableTextMobileStepper = ({ data }: Props) => {

  return (
    <div>
      <Carousel>
        {data.map((v, index) => (
          <div key={v.desc}>
            <Item
              desc={v.desc}
              icon={v.icon}
              title={v.title}
              divider={true}
              iconColor={v.iconColor}
              comingSoon={v.comingSoon}
              starRate={v.starRate}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SwipeableTextMobileStepper;
