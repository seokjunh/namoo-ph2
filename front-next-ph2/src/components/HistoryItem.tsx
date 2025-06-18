const historyData = [
  {
    year: 2024,
    events: [
      { month: "10월", content: "글로벌 네트워크 확장 및 진출" },
      { month: "8월", content: "AI 기반 생산성 향상 시스템 도입 완료" },
      { month: "5월", content: "유럽 시장 첫 진출 및 첫 해외 계약 체결" },
      { month: "3월", content: "AI 기반 생산성 향상 시스템 도입" },
    ],
  },
  {
    year: 2023,
    events: [
      { month: "12월", content: "친환경 기술 적용 스마트팩토리 설계 완료" },
      { month: "7월", content: "글로벌 인증 3차 획득" },
      { month: "5월", content: "차세대 스마트팩토리 3.0 프로젝트 발표" },
      { month: "4월", content: "친환경 스마트팩토리 구축 시작" },
    ],
  },
  {
    year: 2022,
    events: [
      { month: "12월", content: "글로벌 시장 10개국 진출 완료" },
      { month: "5월", content: "글로벌 파트너십 강화" },
      { month: "2월", content: "스마트팩토리 2.0 출시" },
    ],
  },
  {
    year: 2020,
    events: [
      { month: "12월", content: "5G 기술 도입 및 시스템 업그레이드" },
      { month: "10월", content: "스마트팩토리 시스템 안정화 완료" },
      { month: "3월", content: "AI 기반 데이터 분석 시스템 도입" },
    ],
  },
  {
    year: 2019,
    events: [
      { month: "12월", content: "디지털 전환 첫 번째 단계 완료" },
      { month: "6월", content: "스마트팩토리 프로젝트 확장" },
      { month: "1월", content: "디지털 전환 프로젝트 시작" },
    ],
  },
  {
    year: 2017,
    events: [
      { month: "11월", content: "세계 산업 혁신 대상 수상" },
      { month: "9월", content: "글로벌 R&D 센터 설립" },
      { month: "5월", content: "산업 혁신 대상 2차 수상" },
    ],
  },
  {
    year: 2015,
    events: [
      { month: "12월", content: "스마트팩토리 솔루션 2.0 글로벌 출시" },
      { month: "10월", content: "스마트팩토리 솔루션 2.0 출시" },
      { month: "2월", content: "글로벌 인증 획득" },
    ],
  },
  {
    year: 2012,
    events: [
      { month: "9월", content: "클라우드 기반 생산성 향상 시스템 도입" },
      { month: "7월", content: "국내 주요 고객사와 파트너십 체결" },
      { month: "3월", content: "AI 기반 시스템 도입" },
    ],
  },
  {
    year: 2010,
    events: [
      { month: "11월", content: "산업 혁신 대상 수상" },
      { month: "8월", content: "국제 전시회에서 스마트팩토리 기술 발표" },
      { month: "1월", content: "스마트시티 프로젝트 참여" },
    ],
  },
  {
    year: 2008,
    events: [
      { month: "8월", content: "국제 인증 획득" },
      { month: "4월", content: "글로벌 시장 확장" },
    ],
  },
  {
    year: 2007,
    events: [
      { month: "11월", content: "첫 번째 글로벌 전시회 참가" },
      { month: "6월", content: "첫 번째 글로벌 파트너십 체결" },
      { month: "2월", content: "스마트팩토리 솔루션 개발 시작" },
    ],
  },
  {
    year: 2006,
    events: [
      { month: "12월", content: "첫 해외 지사 설립" },
      { month: "9월", content: "첫 해외 지사 설립" },
      { month: "5월", content: "국내 시장 진출" },
    ],
  },
  {
    year: 2005,
    events: [
      { month: "12월", content: "첫 번째 글로벌 계약 체결" },
      { month: "3월", content: "첫 번째 제품 출시" },
      { month: "1월", content: "회사 설립" },
    ],
  },
];

const HistoryItem = () => {
  return (
    <div className="flex space-y-7 sm:space-y-18">
      {historyData.map((data) => (
        <div key={data.year}>
          <div className="px-10">
            <div className="space-y-8">
              <div className="flex flex-col items-center gap-8 text-2xl font-semibold md:text-3xl lg:text-4xl">
                {data.year}
              </div>
              <div>
                {data.events.map((item, index) => (
                  <ul
                    key={`${data.year}-${index}`}
                    className="flex list-inside list-disc text-sm md:text-base lg:text-lg"
                  >
                    {/* <div className="font-medium">{item.month}</div> */}

                    <li>{item.content}</li>
                  </ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HistoryItem;
