const HomeItem2 = () => {
  return (
    <div className="lg:h-[calc(100vh-6.25rem)]">
      <div className="space-y-[2rem] pt-8 text-center md:space-y-[4rem]">
        <div>
          <div className="text-2xl font-extrabold text-[#303030] lg:text-4xl">
            About Us
          </div>
          <div className="mt-4 font-medium md:text-2xl lg:text-4xl">
            고객의 가치를 중심으로, 지속 가능한 미래를 창조하는 나무아이앤씨
          </div>
          <div className="mx-auto mt-6 max-w-4xl space-y-4 text-gray-700 sm:text-lg md:text-xl">
            <div>
              나무아이앤씨는 고객의 가치를 연결하여 더욱 큰 가치를 창출하는
              스마트팩토리 솔루션 전문기업입니다.
            </div>
            <div>
              점점 복잡해지고 다양한 데이터를 표준화된 방식으로 연결합니다.
              <div>
                이를 통해, 더 지능적이고 편리한 세상을 만들어가는 혁신적인
                솔루션을 개발하고 있습니다.
              </div>
            </div>
            <div>
              자체 개발 특허 솔루션을 보유한 스마트팩토리 선도 기업으로서,
              <div>
                4차 산업혁명 시대 제조 산업의 혁신을 이끌며 고객의 비즈니스
                성장을 지원합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative z-10 h-[10rem] w-[10rem] rounded-[50%] bg-white opacity-95 shadow-md md:h-[20rem] md:w-[20rem]">
            <div className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl">
              고객
            </div>
          </div>
          <div className="relative -ml-6 h-[10rem] w-[10rem] rounded-[50%] bg-[#96cb4f] shadow-md md:h-[20rem] md:w-[20rem]">
            <div className="absolute inset-0 flex items-center justify-center text-2xl md:text-5xl">
              가치
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeItem2;
