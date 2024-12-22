"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import search from "@/assets/icons/search.svg";
import menu from "@/assets/icons/menu.svg";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-backgroundPrimary shadow-sm py-4 sticky top-0 left-0 w-full z-[1000]">
      <div className="container">
        <div className="headerContainer flex justify-between items-center">
          <div className="logo flex justify-center items-center">
            <Image
              src={logo}
              alt="logo"
              style={{
                maxHeight: "114px",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </div>
          <div className="hidden lg:block">
            <Navbar />
          </div>
          <div className="search cursor-pointer">
            <Image src={search} alt="search" />
          </div>
          <div
            className="menuIcon block lg:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          >
            <Image src={menu} alt="menu" />
          </div>
        </div>
      </div>
      {isMobileMenuOpen && <NavMobile closeMenu={toggleMobileMenu} />}
    </header>
  );
};

export default Header;
