import ServiceCard from "./ServiceCard";

const HomeItem4 = () => {
  return (
    <div className="mx-auto max-w-[110rem]">
      <div className="space-y-12">
        <div className="text-center text-2xl font-extrabold lg:text-4xl">
          SERVICE
        </div>
        <div className="space-y-4">
          <div className="text-xl font-bold md:text-3xl lg:text-5xl">
            <div>산업용 데이터 연계 및 통합</div>
            <div>공장 자동화 디지털 전환</div>
          </div>
          <div className="md:text-lg">
            <div>
              나무아이앤씨는 공장 자동화 시스템 전반의 데이터를 연계하고
            </div>
            <div>
              통합 관리할 수 있는 플랫폼을 제공하여, 보다 효율적이고 스마트한
              제조 환경을 구축합니다.
            </div>
          </div>
        </div>
        <ServiceCard />
      </div>
    </div>
  );
};

export default HomeItem4;
