import React, { Fragment, useCallback, useState } from "react";
import TheaIcon from "/src/assets/thea-footer-logo.png";
import TheaIconColored from "../../../assets/thea-footer-logo-colored.png";
import HamBurger from "/src/assets/hamburger.png";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Clear";
import { Link } from "react-router-dom";

const menus = [
  {
    id: "#",
    title: "Background",
    href: "/background",
  },
  {
    title: "Offering",
    href: "/home/offerings",
    id: "offerings-anchor",
  },
  {
    title: "Contribution",
    href: "/home/contribution",
    id: "contribution-anchor",
  },
  {
    title: "Solutions",
    href: "/home/solutions",
    id: "solutions-anchor",
  },
];

const MobileHeader = () => {
  const [expand, setExpand] = useState(false);

  const onExpand = useCallback(() => {
    setExpand((o) => !o);
  }, []);

  const onMenuClick = useCallback(
    (elm: string) => (event: { isTrusted: boolean }) => {
      setExpand(false);
      if (event?.isTrusted) {
        setTimeout(() => {
          document.getElementById(elm)?.click();
        }, 50);
      }
    },
    []
  );

  if (expand) {
    return (
      <div className="expanded-mobile-header">
        <div className="expanded-mobile-logos">
          <div className="mobile-logo">
            <Link to="/home">
              <img src={TheaIcon} className="mobile-header-icon" />
            </Link>
          </div>
          <MenuIcon onClick={onExpand} style={{ color: '#fff' }} />
        </div>
        <div className="mobile-links">
          {menus.map((v, i) => (
            <Fragment key={v.href}>
              <Link to={v.href} id={v.id} onClick={onMenuClick(v.id)}>
                {v.title}
              </Link>
              <div className="mobile-menu-divider" />
            </Fragment>
          ))}
        </div>
        <Link to="/home">
          <button className="exploreButton">
            Explore App
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="mobile-header">
      <Link to="/home">
        <img src={TheaIcon} className="mobile-header-icon" />
      </Link>
      <Button onClick={onExpand} extraClasses="mobile-footer-icon-wrapper">
        <img src={HamBurger} className="mobile-footer-icon" />
      </Button>
    </div>
  );
};

export default MobileHeader;
