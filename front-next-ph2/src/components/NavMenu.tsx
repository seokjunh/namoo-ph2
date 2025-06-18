import { Link } from "@/i18n/navigation";
import { useHoverStore } from "@/store/useNavhoverStore";
import { useTranslations } from "next-intl";

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
  const hovered = useHoverStore((state) => state.hovered);
  const setHovered = useHoverStore((state) => state.setHovered);

  return (
    <nav className="hidden sm:block" aria-label="메인 메뉴">
      <ul className="flex items-center justify-center font-bold lg:text-lg">
        {navMenus.map((item) => (
          <li
            key={item.title}
            className="relative text-center"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <div className="px-[1rem] py-4 lg:px-[2.5rem] ">
              {t(`${item.title}.title`)}
            </div>
            {hovered && (
              <ul className="absolute z-20 w-full py-2">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.title} className="hover:text-[#96cb4f]">
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
