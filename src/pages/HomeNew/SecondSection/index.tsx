import React from "react";
import LeftHighLight from "../LeftHighLight";
import InfoItems from "./InfoItems";
import "./styles.css";

const SecondSection = () => {
  return (
    <div>
      <div className="testimonial">
        <LeftHighLight
          content={
            "Thea delivers modular infrastructure for users and businesses to access the VCM by reducing barriers to entry as well as implementing novel methodology to improve market liquidity and enhance transparency on VCC provenance and pricing."
          }
        />
      </div>
      <div className="info-items-wrapper">
        <InfoItems
          hash="carbonHash"
          title="Carbon Emissions"
          desc="The scientific community has reached a broad consensus that the rapidly accelerating global warming phenomenon is directly linked to human activity."
          descExtra='Economist Arthur Pigou proposed "taxing negative externalities at a price equal to the marginal damage which internalizes the externality and maximizes overall welfare.”'
        />
        <div style={{ background: "#fff", width: 3 }}></div>
        <InfoItems
          hash="voluntaryHash"
          descExtra="The scientific community has reached a broad consensus that the rapidly accelerating global warming phenomenon is directly linked to human activity. The primary driver of climate change is the rise of greenhouse gas (GHG) emissions in the atmosphere. Based on the IPCC Working Group II assessment, unless governments, corporates, and individuals take immediate action, we are likely to face severe environmental and human health threats potentially causing irreversible damage to our planet with average temperatures likely increasing on the current trajectory between 2 and 4.5 degrees Celsius by 2100. The 26th U.N. Climate Change Conference of the Parties (COP26) in November 2021, reaffirmed the alarming impact of climate change, highlighting the urgent need for collective action. Yet at a national level, current climate plans still fall short of what is required to reach net-zero by 2050. Therefore, it has become increasingly clear that progress will only happen with countries, corporates, and individuals acting in unison. In 2019, official data confirmed that 2011-2020 was the warmest decade on record. Global average temperatures have increased by 1.1 degrees Celsius since the 1800s and are now rising by 0.2 degrees Celsius per decade. Based on the IPCC Working Group II assessment, this increase in temperature is a major cause of heat waves, severe storms, fast melting of polar ice caps, rising sea levels, and potentially irreversible damage to the environment."
          title="Voluntary Carbon Markets"
          desc='Economist Arthur Pigou proposed "taxing negative externalities at a price equal to the marginal damage which internalizes the externality and maximizes overall welfare.”'
        />
      </div>
    </div>
  );
};

export default SecondSection;
