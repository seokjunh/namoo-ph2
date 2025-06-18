"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

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
];

const HomeItem1 = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="lg:h-screen h-[50vh]">
      <div className="relative h-full overflow-hidden bg-black">
        {images.map((img,idx) => (
          <div
            key={img.name}
            className={`absolute inset-0 transition-opacity duration-[2s] ease-in-out ${currentIdx === idx ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={img.name}
              alt="Home banner image"
              width={img.width}
              height={img.height}
              priority={idx === 0}
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
          </div>
        ))}
      </div>
    </div>
  );
};
export default HomeItem1;
