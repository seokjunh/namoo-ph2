import { Link } from "@/i18n/navigation";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" aria-label="홈페이지로 이동">
      <div className="w-[7rem] lg:w-[10rem]">
        <Image
          src="/image/ci.png"
          alt="회사 로고"
          width={420}
          height={127}
          priority
        />
      </div>
    </Link>
  );
};

export default Logo;
