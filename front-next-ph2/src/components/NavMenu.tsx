import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

interface NavMenu {
  title: string;
  subMenu: { title: string; href: string }[];
}

const navMenus: NavMenu[] = [
  {
    title: "business",
    subMenu: [
      { title: "Smart Factory", href: "/support/notice" },
      { title: "Data Interface", href: "/support/directions" },
    ],
  },
  {
    title: "solution",
    subMenu: [
      { title: "CoreCode", href: "/product/corecode" },
      { title: "P2E", href: "/support/directions" },
      { title: "Q2E", href: "/support/directions" },
      { title: "S2E", href: "/support/directions" },
      { title: "E2E", href: "/support/directions" },
    ],
  },
  {
    title: "support",
    subMenu: [
      { title: "게시판", href: "/support/notice" },
      { title: "오시는 길", href: "/support/location" },
    ],
  },
  {
    title: "company",
    subMenu: [
      { title: "나무아이앤씨", href: "/company/greeting" },
      { title: "연혁", href: "/company/history" },
      { title: "비전", href: "/company/vision" },
    ],
  },
];

const NavMenu = () => {
  const t = useTranslations("NavBar");
  const [hovered, setHovered] = useState(false);

  return (
    <nav className="hidden sm:block" aria-label="메인 메뉴">
      <ul className="flex items-center justify-center font-bold lg:text-lg">
        {navMenus.map((item, idx) => (
          <li
            key={idx}
            className="relative text-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <button className="px-[1rem] py-4 lg:px-[2.5rem]">
              {t(`${item.title}.title`)}
            </button>
            {hovered && (
              <ul className="absolute left-0 z-10 w-full py-2">
                {item.subMenu.map((subItem, subIdx) => (
                  <li key={subIdx} className="hover:text-[#96cb4f]">
                    <Link
                      href={`${subItem.href}`}
                      className="block px-4 py-2 text-base font-semibold"
                    >
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
