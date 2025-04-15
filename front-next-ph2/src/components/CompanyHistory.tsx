import Image from "next/image";
import History from "./History";

const CompanyHistory = () => {
  return (
    <div className="space-y-10 lg:px-[3rem]">
      <div className="relative h-[10vh] overflow-hidden rounded-4xl md:h-[15vh] lg:h-[25vh]">
        <Image
          src="/image/com_1.png"
          alt="history"
          fill
          className="object-cover object-bottom brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="space-y-4 text-center text-white">
            <div className="text-2xl font-bold md:text-3xl lg:text-4xl">
              연혁
            </div>
          </div>
        </div>
      </div>
      <div className="mb-12 rounded-4xl bg-white lg:mb-24">
        <div className="mx-auto max-w-md space-y-10 py-7 text-lg sm:py-14 md:max-w-3xl lg:max-w-[90rem]">
          <div className="text-center text-sm font-semibold md:text-base lg:text-lg">
            <div>HISTORY</div>
            <div>|</div>
          </div>
          <History />
        </div>
      </div>
    </div>
  );
};

export default CompanyHistory;
