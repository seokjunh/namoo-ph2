"use client";

import { useEffect, useState } from "react";
import LocaleSwicher from "./LocaleSwicher";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const scrollHandler = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setIsOpen(scrollY > 50);
    };

    window.addEventListener("scroll", scrollHandler);

    // 초기 실행 (처음부터 50 이상일 수도 있으니)
    scrollHandler();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

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
      <div
        className={`flex h-[6.25rem] items-center justify-between lg:px-[5rem] ${isOpen ? "bg-[#1C1C1C] opacity-90" : ""}`}
      >
        <div className="flex">
          <Logo />
          {isMobileMenuOpen ? (
            <div className="flex items-center">
              <MobileMenu />
              <LocaleSwicher />
            </div>
          ) : (
            <NavMenu />
          )}
        </div>
        {!isMobileMenuOpen && <LocaleSwicher />}
      </div>
    </header>
  );
};

export default NavBar;
