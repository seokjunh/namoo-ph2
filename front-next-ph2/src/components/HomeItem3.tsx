import Link from "next/link";
import BusinessCarousel from "./BusinessCarousel";

const HomeItem3 = () => {
  return (
    <div className="lg:h-[calc(100vh-6.25rem)]">
      <div className="pt-8 text-center">
        <div className="text-2xl font-extrabold text-[#303030] lg:text-4xl">
          BUSINESS
        </div>
        <div className="mt-4 mb-12 space-y-4 md:mt-8 md:mb-20 md:space-y-12">
          <div className="text-lg font-semibold md:text-3xl lg:text-5xl">
            나무아이앤씨와 함께한 기업들의 성공 사례를 살펴보세요
          </div>
          <Link
            href={"/"}
            className="inline-block rounded-4xl border border-gray-500 px-3 py-2 text-sm transition-all duration-300 hover:border-transparent hover:bg-[#96cb4f] hover:text-white sm:px-4 sm:py-2 sm:text-base md:px-5 md:py-3 md:text-lg lg:p-[1rem] lg:text-xl"
          >
            고객 사례 더보기 {">"}
          </Link>
        </div>
        <BusinessCarousel />
      </div>
    </div>
  );
};

export default HomeItem3;
