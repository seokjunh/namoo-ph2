"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

import Image from "next/image";
import SwiperNavButton from "./SwiperNavButton";

const HomeItem1 = () => {
  const images = [
    {
      name: "/image/img1.png",
      width: 1472,
      height: 832,
    },
    {
      name: "/image/img2.png",
      width: 1472,
      height: 832,
    },
    {
      name: "/image/img2.png",
      width: 1472,
      height: 832,
    },
  ];

  return (
    <Swiper
      effect="fade"
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      speed={2000}
      modules={[Navigation, Autoplay, EffectFade]}
      className="h-[50vh] lg:h-screen"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <Image
            src={image.name}
            alt={`image-${index}`}
            width={image.width}
            height={image.height}
            className="h-full w-full object-cover brightness-50"
          />
          <div className="absolute top-[30%] left-[5%] max-w-[90%] space-y-4 lg:top-[40%] lg:left-[10%] lg:max-w-[80%]">
            <div>
              <p className="text-lg font-bold sm:text-xl md:text-5xl">
                Innovate
              </p>
              <p className="text-3xl font-extrabold sm:text-4xl md:text-7xl">
                for Tomorrow
              </p>
            </div>
            <p className="text-md font-bold sm:text-xl md:text-2xl">
              고객의 가치를 최우선으로 실현하는 최고의 전문 파트너
            </p>
          </div>
        </SwiperSlide>
      ))}
      <SwiperNavButton />
    </Swiper>
  );
};

export default HomeItem1;
