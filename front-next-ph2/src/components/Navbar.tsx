"use client";

import { useEffect, useState } from "react";
import ArrowUpRight from "../../public/svg/ArrowUpRight";
import LocaleSwicher from "./LocaleSwicher";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

const NavBar = ({ bgColor }: { bgColor: string }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");

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
      if (window.innerWidth < 768) {
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

  useEffect(() => {
    bgColor === "bg-black"
      ? setImage("ci_white.png")
      : setImage("ci_green.png");
  });

  return (
    <header className="fixed z-20 w-full">
      <div
        className={`flex h-[6.25rem] items-center justify-between px-[2rem] lg:px-[5rem] ${isOpen ? `${bgColor} opacity-90` : ""}`}
      >
        <div className="flex items-center">
          <Logo image={image} />
          <NavMenu />
        </div>
        {isMobileMenuOpen ? (
          <MobileMenu />
        ) : (
          <div className="flex">
            <button
              type="button"
              className="flex cursor-pointer items-center py-4 lg:px-[2.5rem]"
            >
              <div>문의하기</div>
              <ArrowUpRight />
            </button>
            <LocaleSwicher />
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
