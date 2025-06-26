"use client";

import Image from "next/image";
import CorecodeComposition from "./CorecodeComposition";
import CorecodeConcept from "./CorecodeConcept";
import CorecodeFeature from "./CorecodeFeature";
import CorecodeOverview from "./CorecodeOverview";
import CorecodeStack from "./CorecodeStack";
import { Button } from "./ui/button";

const CorecodeContent = () => {
  const openInquiryPopup = () => {
    window.open(
      "/corecode-inquiry",
      "inquiryPopup",
      "width=800,height=700,scrollbars=yes",
    );
  };

  return (
    <div className="space-y-10 pt-[6.25rem] text-black lg:px-[5rem] lg:pb-[6.25rem]">
      <div className="relative h-[10vh] overflow-hidden rounded-4xl md:h-[15vh] lg:h-[25vh]">
        <Image
          src="/image/com_1.png"
          alt="greeting"
          fill
          className="object-cover object-bottom brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="space-y-4 text-center text-white">
            <div className="text-2xl font-bold md:text-3xl lg:text-4xl">
              제조 현장의 시스템과 장비 연계의 표준화
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-4xl bg-white py-24">
        <div className="mx-auto max-w-sm space-y-24 text-lg sm:max-w-xl md:max-w-3xl lg:max-w-5xl">
          <div className="space-y-14">
            <CorecodeConcept />
            <CorecodeOverview />
            <CorecodeStack />
            <CorecodeComposition />
            <CorecodeFeature />
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            <div className="space-y-2 text-center">
              <div className="text-4xl font-bold">코어코드 문의 안내</div>
              <div className="text-xl font-normal">
                궁금하신 내용을 남겨주시면, 담당자가 빠른 시간 안에 연락
                드리겠습니다.
              </div>
            </div>
            <Button
              type="button"
              onClick={openInquiryPopup}
              className="cursor-pointer rounded-none bg-[#96cb4f] px-[17rem] py-[2rem] text-2xl font-semibold text-white hover:bg-[#96cb4f]/90"
            >
              문의하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CorecodeContent;
