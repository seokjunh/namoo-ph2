"use client";

import { useEffect, useState } from "react";
import LocaleSwicher from "./LocaleSwicher";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 850) {
        setIsMobileMenuOpen(true);
      } else {
        setIsMobileMenuOpen(false);
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <header className="fixed z-20 w-full">
      <div className="flex h-[6.25rem] items-center justify-between bg-[#f4f4f6] opacity-90 lg:px-[5rem]">
        <Logo />
        {isMobileMenuOpen ? (
          <div className="flex items-center">
            <MobileMenu />
            <LocaleSwicher />
          </div>
        ) : (
          <NavMenu />
        )}
        {!isMobileMenuOpen && <LocaleSwicher />}
      </div>
    </header>
  );
};

export default NavBar;
