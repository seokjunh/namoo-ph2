"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const ServiceCard = () => {
  const { ref, inView } = useInView();
  const images = [
    {
      title: "제조 데이터 연계 및 통합 솔루션",
      desc: "다양한 설비 데이터 연계 및 통합으로 효율적인 공정 관리",
      img: "main_S1.png",
    },
    {
      title: "통합 관제 솔루션",
      desc: "사용자 경험(UX) 극대화를 위한 통합 모니터링 플랫폼",
      img: "main_S2.png",
    },
    {
      title: "통합 관제 솔루션",
      desc: "사용자 경험(UX) 극대화를 위한 통합 모니터링 플랫폼",
      img: "main_S2.png",
    },
  ];
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView && { opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-center md:flex-row gap-2 sm:gap-4 lg:gap-8">
        {images.map((data) => (
          <div
            key={data.title}
            className="w-full overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <div className="h-[10rem] sm:h-[15rem]">
              <Image
                src={`/image/${data.img}`}
                alt="제조 데이터 연계 및 통합 솔루션"
                width={2000}
                height={1125}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="text-md font-bold text-[#303030] sm:mb-2 lg:text-xl">
                {data.title}
              </div>
              <div className="text-sm text-gray-600 sm:text-base lg:text-lg">
                {data.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
export default ServiceCard;
