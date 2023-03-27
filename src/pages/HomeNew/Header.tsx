import React, { useCallback, useEffect } from "react";
import Logo from "./Logo";
import LogoName from "./LogoName";
import StickyLogo from "./StickyLogo";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > sticky) {
        header!.classList.add("sticky");
      } else {
        header!.classList.remove("sticky");
      }
    };
    var header = document.getElementById("myHeader");
    var sticky = header!.offsetTop + 300;
  }, []);

  const navigationClick = useCallback(
    (elm: string) => (event: { isTrusted: boolean }) => {
      if (event?.isTrusted) {
        setTimeout(() => {
          document.getElementById(elm)?.click();
        }, 50);
      }
    },
    []
  );

  return (
    <div id="header-container">
      <div className="nav" id="myHeader">
        <div className="logo">
          <Link to="/home">
            <Logo />
            {/* <StickyLogo /> */}
          </Link>
          {/* <Link to="/home">
          <LogoName />
        </Link> */}
          <Link to="/home">
            <StickyLogo />
          </Link>
        </div>
        <div className="navItems">
          <ul>
            <li>
              <Link id="background" to="/background">
                Background
              </Link>
            </li>
            <li>
              <Link id="offerings-anchor" to="/home/offerings">
                Offering
              </Link>
            </li>
            <li>
              <Link id="contribution-anchor" to="/home/contribution">
                Contribution
              </Link>
            </li>
            <li>
              <Link id="solutions-anchor" to="/home/solutions">
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/home">
                <span>Explore App</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="nav-skeleton"></div>
    </div>
  );
};

export default Header;
