import { Link } from "@/i18n/navigation";
import { useHoverStore } from "@/store/useNavhoverStore";
import { useTranslations } from "next-intl";

interface NavMenu {
  title: string;
  subMenu: { title: string; subTitle?: string; href: string }[];
}

const navMenus: NavMenu[] = [
  {
    title: "business",
    subMenu: [
      { title: "CoreCode", href: "/" },
      { title: "LMP", href: "/" },
      { title: "MES", href: "/" },
    ],
  },
  {
    title: "solution",
    subMenu: [
      { title: "CoreCode", subTitle: "플랫폼 기반 통합생산관리", href: "/" },
      { title: "LMP", subTitle: "플랫폼 기반 통합생산관리", href: "/" },
      { title: "MES", subTitle: "플랫폼 기반 통합생산관리", href: "/" },
    ],
  },
  {
    title: "support",
    subMenu: [
      { title: "라이브러리", href: "/" },
      { title: "언론보도", href: "/" },
      { title: "공지사항", href: "/" },
    ],
  },
  {
    title: "company",
    subMenu: [
      { title: "CEO", href: "/" },
      { title: "연혁", href: "/" },
      { title: "운리경영", href: "/" },
      { title: "채용", href: "/" },
      { title: "복리후생", href: "/" },
      { title: "찾아오시는 길길", href: "/" },
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
            className="relative"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <button type="button" className="px-[1rem] py-4 lg:px-[2.5rem]">
              {t(`${item.title}.title`)}
            </button>
            {hovered && (
              <ul className="absolute z-20 mx-[1rem] w-full lg:mx-[2.5rem]">
                {item.subMenu.map((subItem) => (
                  <li key={subItem.title} className="hover:text-[#96cb4f] py-2">
                    <Link
                      href={`${subItem.href}`}
                      className="text-base font-semibold "
                    >
                      {subItem.title}
                      <br />
                      {subItem.subTitle && (
                        <span className="text-sm text-gray-500">
                          {subItem.subTitle}
                        </span>
                      )}
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
