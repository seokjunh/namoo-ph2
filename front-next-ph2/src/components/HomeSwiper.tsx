import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import HomeItem1 from "./HomeItem1";
import HomeItem2 from "./HomeItem2";
import HomeItem3 from "./HomeItem3";
import HomeItem4 from "./HomeItem4";

const HomeSwiper = () => {
  const items = ["MAIN", "ABOUT US", "BUSINESS", "SERVICE"];

  const pagination = {
    clickable: true,
    bulletClass: "custom_bullet",
    bulletActiveClass: "swiper-pagination-custom-bullet-active",
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + items[index] + "</span>";
    },
  };
  return (
    <Swiper
      direction={"vertical"}
      pagination={pagination}
      mousewheel={{ enabled: true }}
      slidesPerView={1}
      speed={1500}
      modules={[Mousewheel, Pagination]}
      className="h-[calc(100vh-6.25rem)]"
    >
      <SwiperSlide>
        <HomeItem1 />
      </SwiperSlide>
      <SwiperSlide>
        <HomeItem2 />
      </SwiperSlide>
      <SwiperSlide>
        <HomeItem3 />
      </SwiperSlide>
      <SwiperSlide>
        <HomeItem4 />
      </SwiperSlide>
    </Swiper>
  );
};
export default HomeSwiper;
