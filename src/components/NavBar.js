import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/logo.png";
import "./gradient.css";

const NavBar = ({ isTopOfPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navbarBackground = isTopOfPage ? "" : "bg-white";
  const isAboveSmallScreens = useMediaQuery("(min-width: 1060px)");
  const ActiveStyle = "gradient-text cursor-pointer";

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuToggled(false);
  };

  useEffect(() => {
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  return (
    <div className={` ${navbarBackground} z-40 w-full fixed top-0 md:py-3`}>
      <nav className="flex items-center justify-between mx-auto w-5/6">
        <div className="w-14 h-14 p-2 md:p-0 md:w-16 md:h-16">
          <img src={logo} alt="logoimage" className="w-full h-full" />
        </div>
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-10 font-opensans text-sm font-semibold">
            <ScrollLink
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
              activeClass={ActiveStyle}
              onSetActive={handleSetActive}
              className={activeLink === "hero" ? `${ActiveStyle}` : "cursor-pointer"}
              onClick={() => handleLinkClick("hero")}>
              Home
            </ScrollLink>
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
              activeClass={ActiveStyle}
              onSetActive={handleSetActive}
              className={
                activeLink === "services" ? `${ActiveStyle}` : "cursor-pointer"
              }
              onClick={() => handleLinkClick("services")}
            >
              Our Services
            </ScrollLink>
            <ScrollLink
              to="team"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
              activeClass={ActiveStyle}
              onSetActive={handleSetActive}
              className={
                activeLink === "team" ? `${ActiveStyle}` : "cursor-pointer"
              }
              onClick={() => handleLinkClick("team")}
            >
              Our Team
            </ScrollLink>
            <ScrollLink
              to="businessfocus"
              spy={true}
              smooth={true}
              offset={-50}
              duration={300}
              activeClass={ActiveStyle}
              onSetActive={handleSetActive}
              className={
                activeLink === "businessfocus"
                  ? `${ActiveStyle}`
                  : "cursor-pointer"
              }
              onClick={() => handleLinkClick("businessfocus")}
            >
              Business Focus
            </ScrollLink>
          </div>
        ) : (
          <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <HiMenuAlt3 size={35} />
          </button>
        )}

        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full gradient-background w-[300px]">
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(false)}>
                <HiOutlineX size={35} />
              </button>
            </div>
            <div
              style={{ fontSize: "18.06px" }}
              className="flex flex-col gap-10 ml-[33%] text-white scale-up-center"
            >
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onSetActive={handleSetActive}
                onClick={() => handleLinkClick("home")}
                className="cursor-pointer"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="services"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onSetActive={handleSetActive}
                onClick={() => handleLinkClick("services")}
                className="cursor-pointer"
              >
                Our Services
              </ScrollLink>
              <ScrollLink
                to="team"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onSetActive={handleSetActive}
                onClick={() => handleLinkClick("team")}
                className="cursor-pointer"
              >
                Our Team
              </ScrollLink>
              <ScrollLink
                to="businessfocus"
                spy={true}
                smooth={true}
                offset={-50} // Adjust the offset value according to your needs
                duration={500}
                onClick={() => handleLinkClick("businessfocus")}
                className="cursor-pointer"
              >
                Business Focus
              </ScrollLink>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
