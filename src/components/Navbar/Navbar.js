import React from "react";
import "./Navbar.css";
import NavbarTop from "./NavbarTop";
import NavbarBottom from "./NavbarBottom";
import { useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  if (pathname.includes("/admin")) {
    return <></>;
  }
  return (
    <div>
      <NavbarTop />
      <NavbarBottom />
    </div>
  );
}

export default Navbar;
