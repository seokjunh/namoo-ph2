"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";

const HomeItem2 = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="items-center justify-between space-y-8 lg:flex">
      <div className="space-y-4 lg:space-y-8">
        <div className="text-2xl font-extrabold">
          <div>About Us</div>
        </div>
        <div className="font-medium md:text-2xl lg:space-y-4 lg:text-5xl">
          <motion.div
            initial={{ width: 0 }}
            animate={inView && { width: "100%" }}
            transition={{ duration: 4, ease: "easeOut" }}
            className="overflow-hidden whitespace-nowrap"
          >
            고객의 가치를 중심으로,
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={inView && { width: "100%" }}
            transition={{ duration: 3, delay: 1.5, ease: "easeOut" }}
            className="overflow-hidden whitespace-nowrap"
          >
            지속 가능한 미래를 창조하는 나무아이앤씨
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className="space-y-4 sm:text-lg md:text-2xl"
        >
          <div>
            나무아이앤씨는 고객의 가치를 연결하여 더욱 큰 가치를 창출하는
            스마트팩토리 솔루션 전문기업입니다.
          </div>
          <div className="space-y-1">
            <div>
              점점 복잡해지고 다양한 데이터를 표준화된 방식으로 연결합니다.
            </div>
            <div>
              이를 통해, 더 지능적이고 편리한 세상을 만들어가는 혁신적인
              솔루션을 개발하고 있습니다.
            </div>
          </div>
          <div className="space-y-1">
            <div>
              자체 개발 특허 솔루션을 보유한 스마트팩토리 선도 기업으로서,
            </div>
            <div>
              4차 산업혁명 시대 제조 산업의 혁신을 이끌며 고객의 비즈니스 성장을
              지원합니다.
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={inView && { opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="flex items-center justify-center">
          <div className="relative z-10 h-[10rem] w-[10rem] rounded-[50%] bg-white text-black opacity-95 shadow-md md:h-[20rem] md:w-[20rem]">
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
      </motion.div>
    </div>
  );
};

export default HomeItem2;
