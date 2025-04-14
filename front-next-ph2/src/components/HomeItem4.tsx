import Image from "next/image";

const HomeItem4 = () => {
  return (
    <div className="lg:h-[calc(100vh-6.25rem)]">
      <div className="pt-8 text-center">
        <div className="text-2xl font-extrabold text-[#303030] lg:text-4xl">
          SERVICE
        </div>
      </div>
      <div className="mx-auto mb-6 max-w-[80rem] space-y-[2rem] pt-12 md:space-y-[4rem]">
        <div className="space-y-4">
          <div className="text-xl font-bold md:text-3xl lg:text-5xl">
            <div>산업용 데이터 연계 및 통합</div>
            <div>공장 자동화 디지털 전환</div>
          </div>
          <div className="text-gray-500 md:text-lg">
            <div>
              나무아이앤씨는 공장 자동화 시스템 전반의 데이터를 연계하고
            </div>
            <div>
              통합 관리할 수 있는 플랫폼을 제공하여, 보다 효율적이고 스마트한
              제조 환경을 구축합니다.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-6 px-4 sm:gap-8 md:flex-row md:gap-12 lg:gap-16">
          <div className="w-full max-w-[20rem] overflow-hidden rounded-3xl bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02] sm:h-auto md:h-auto md:max-w-[30rem] lg:max-w-[40rem]">
            <div className="h-[10rem] sm:h-[15rem]">
              <Image
                src={"/image/main_S1.png"}
                alt="제조 데이터 연계 및 통합 솔루션"
                width={2000}
                height={1331}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-2 text-lg font-bold text-[#303030] sm:text-xl md:text-2xl">
                제조 데이터 연계 및 통합 솔루션
              </div>
              <div className="text-sm text-gray-600 sm:text-base md:text-base lg:text-lg">
                다양한 설비 데이터 연계 및 통합으로 효율적인 공정 관리
              </div>
            </div>
          </div>
          <div className="w-full max-w-[20rem] overflow-hidden rounded-3xl bg-white shadow-sm transition-transform duration-300 hover:scale-[1.02] sm:h-auto md:h-auto md:max-w-[30rem] lg:max-w-[40rem]">
            <div className="h-[10rem] sm:h-[15rem]">
              <Image
                src={"/image/main_S2.png"}
                alt="통합 관제 솔루션"
                width={2000}
                height={1125}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-2 text-lg font-bold text-[#303030] sm:text-xl md:text-2xl">
                통합 관제 솔루션
              </div>
              <div className="text-sm text-gray-600 sm:text-base md:text-base lg:text-lg">
                사용자 경험(UX) 극대화를 위한 통합 모니터링 플랫폼
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem4;
