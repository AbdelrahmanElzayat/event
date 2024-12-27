"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/images/logo.png";
import search from "@/assets/icons/Search.svg";
import menu from "@/assets/icons/menu.svg";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";
import Link from "next/link";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-backgroundPrimary shadow-sm py-2 lg:py-4 sticky top-0 left-0 w-full z-[1000]">
      <div className="container">
        <div className="headerContainer flex justify-between items-center">
          <Link
            href={"/"}
            onClick={() => window.scrollTo(0, 0)}
            className="logo flex justify-center items-center"
          >
            <Image
              src={logo}
              alt="logo"
              width={100}
              height={100}
              style={{
                maxHeight: "100px",
                maxWidth: "80px",
                objectFit: "contain",
              }}
            />
          </Link>
          <div className="hidden lg:block">
            <Navbar />
          </div>
          <div className="hidden lg:block search cursor-pointer">
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
