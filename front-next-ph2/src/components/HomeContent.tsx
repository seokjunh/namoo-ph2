"use client";

import { useEffect, useState } from "react";
import HomeNotSwiper from "./HomeNotSwiper";
import HomeSwiper from "./HomeSwiper";

const HomeContent = () => {
  const [isSwiperEnabled, setIsSwiperEnabled] = useState(true);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 850) {
        setIsSwiperEnabled(false);
      } else {
        setIsSwiperEnabled(true);
      }
    };

    resizeHandler();

    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return <>{isSwiperEnabled ? <HomeSwiper /> : <HomeNotSwiper />}</>;
};
export default HomeContent;
