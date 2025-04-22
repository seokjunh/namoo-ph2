"use client"

import { motion } from "motion/react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ServiceCard = () => {
  const { ref, inView } = useInView();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView && { opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="space-y-[1rem] md:space-y-[3rem]">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:flex-row md:gap-12 lg:gap-16">
          <div className="w-full max-w-[20rem] overflow-hidden rounded-3xl bg-white shadow-sm sm:h-auto md:h-auto md:max-w-[30rem] lg:max-w-[40rem]">
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
              <div className="text-lg font-bold text-[#303030] sm:mb-2 sm:text-xl md:text-2xl">
                제조 데이터 연계 및 통합 솔루션
              </div>
              <div className="text-sm text-gray-600 sm:text-base md:text-base lg:text-lg">
                다양한 설비 데이터 연계 및 통합으로 효율적인 공정 관리
              </div>
            </div>
          </div>
          <div className="w-full max-w-[20rem] overflow-hidden rounded-3xl bg-white shadow-sm sm:h-auto md:h-auto md:max-w-[30rem] lg:max-w-[40rem]">
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
              <div className="text-lg font-bold text-[#303030] sm:mb-2 sm:text-xl md:text-2xl">
                통합 관제 솔루션
              </div>
              <div className="text-sm text-gray-600 sm:text-base md:text-base lg:text-lg">
                사용자 경험(UX) 극대화를 위한 통합 모니터링 플랫폼
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
export default ServiceCard;
