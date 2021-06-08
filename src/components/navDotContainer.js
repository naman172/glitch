import React from "react";

const NavDotContainer = ({ keyNav }) => (
  <div id="vertical-navdot-container">
    <div
      id="vertical-page-1"
      className="vertical-navdot vertical-navdot-active"
      onClick={() => {
        document
          .getElementById("slider")
          .scrollIntoView({ behavior: "smooth" });
        keyNav();
      }}
    ></div>
    <div
      id="vertical-page-2"
      className="vertical-navdot"
      onClick={() => {
        document
          .getElementById("slide-2")
          .scrollIntoView({ behavior: "smooth" });
        keyNav();
      }}
    ></div>
    <div
      id="vertical-page-3"
      className="vertical-navdot"
      onClick={() => {
        document
          .getElementById("slide-3")
          .scrollIntoView({ behavior: "smooth" });
        keyNav();
      }}
    ></div>
    <div
      id="vertical-page-4"
      className="vertical-navdot"
      onClick={() => {
        document
          .getElementById("slide-4")
          .scrollIntoView({ behavior: "smooth" });
        keyNav();
      }}
    ></div>
  </div>
);

export default NavDotContainer;
