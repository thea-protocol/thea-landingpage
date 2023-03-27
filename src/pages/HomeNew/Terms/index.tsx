// @ts-nocheck
import React, { useEffect } from "react";
import AerialForest from "../../../assets/aerial-forest.png";
import PositiveAction from "./PositiveAction";
import Footer from "../HomeNew/Footer";
import "./styles.css";
import Common from "./Common";
import { useLocation } from "react-router-dom";
import useQuery from "../../../hooks/useQuery";

const data = [
  {
    title: "Carbon Emissions",
    id: "carbon",
    desc: (
      <div>
        <p>
          The scientific community has reached a broad consensus that the
          alarming and rapidly accelerating global warming phenomenon is
          directly linked to human activity. The primary driver of climate
          change is the rise of greenhouse gas (GHG) emissions in the
          atmosphere. Based on the IPCC Working Group II assessment, unless
          governments, corporates, and individuals take immediate action, we are
          likely to face environmental and human health threats potentially
          causing irreversible damage to our planet with average temperatures
          likely increasing on the current trajectory between 2 and 4.5 degrees
          Celsius by 2100.
        </p>
        <p>
          The 26th U.N. Climate Change Conference of the Parties (COP26) in
          November 2021, reaffirmed the alarming impact of climate change,
          highlighting the urgent need for collective action. Yet at a national
          level, current climate plans still fall short of what is required to
          reach net-zero by 2050. Therefore, it has become increasingly clear
          that progress will only happen with countries, corporates and
          individuals acting in unison.
        </p>
        <p id="voluntaryHash">
          In 2019, official data confirmed that 2011-2020 was the warmest decade
          on record. Global average temperatures have increased by 1.1 degrees
          Celsius since the 1800s and are now rising by 0.2 degrees Celsius per
          decade. Based on the IPCC Working Group II assessment, this increase
          in temperature is a major cause of heat waves, severe storms, fast
          melting of polar ice caps, rising sea levels and potentially
          irreversible damage to the environment.
        </p>
      </div>
    ),
  },
  {
    title: "Voluntary Carbon Market",
    id: "voluntary",
    desc: (
      <div>
        <p>
          Economist Arthur Pigou introduced the idea of "taxing negative
          externalities at a price equal to the marginal damage which
          internalizes the externality and maximizes overall welfare.” Coasian
          Property rights can help resolve these externalities under certain
          conditions; we do consider the climate crisis addressable by aligning
          market incentives, which along with strong emotional and moral
          considerations that also drive collective action, can render the
          climate crisis solvable. We believe that the most effective method to
          encourage 'carbon-appropriate' behavior by all stakeholders is to
          assign a price on carbon emissions.
        </p>
        <p>
          An explicit price on GHG emissions is expressed as a monetary unit per
          tonne of carbon dioxide equivalent (tCO2e); following the “polluter
          pays” principle, it shifts the burden for the damage caused by GHG
          emissions back to those responsible for and capable of reducing them
          by providing a signal to either reduce emissions or pay for the
          marginal cost of pollution. Carbon pricing can naturally stimulate
          clean technology innovation, soften climate change’s distributional
          impact and support poverty alleviation.
        </p>
        <p>
          There are two types of carbon markets, regulatory compliance markets,
          and voluntary markets. Companies regulated under a cap-and-trade
          system (compliance markets) are allocated an allowance of credits they
          can use toward their cap. If they use fewer credits than their
          allocation, they can trade the remaining allowances. The Voluntary
          Carbon Market (VCM), by contrast, provide individuals and companies
          that fall outside the scope of compliance markets with opportunities
          to voluntarily offset their carbon emissions. Robust VCM momentum has
          been driven by the growing interest of business leaders with corporate
          climate commitments as well as individuals. According to a survey by
          the Taskforce on Scaling Voluntary Carbon Markets led by the Institute
          of International Finance (IIF), the demand for voluntary carbon
          credits could increase 15 times by 2030 and 100 times by 2050 with an
          associated market value boost of over $50bln to $100bln in 2030.
          However, provenance transparency, market fragmentation, liquidity,
          concerns about additionality as well as accuracy and reliability of
          verification and certification, act as barriers for market
          participants.
        </p>
        <p>
          Despite all, carbon pricing systems have l become a cornerstone of
          energy transition policies. Still, robust and future-ready
          infrastructure is needed for the VCM to realize its growth potential.
          Various actors have started developing solutions; however these remain
          inaccessible to a broad spectrum of willing participants.
        </p>
      </div>
    ),
  },
];
const Background = () => {
  const loc = useLocation();
  const tab = useQuery().get("hash");

  useEffect(() => {
    var header = document.getElementById("myHeader");
    header!.classList.add("sticky");
  }, []);

  useEffect(() => {
    if (tab) {
      const el = document.getElementById(tab);
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [loc.key, tab]);

  return (
    <Common
      title={"Terms of Service"}
      data={data}
      renderItem={(v) => (
        <div key={v.id} id={v.id}>
          {/* <h2>{v.title}</h2>
          <div className="details">{v.desc}</div> */}
        </div>
      )}
    />
  );
};

export default Background;
