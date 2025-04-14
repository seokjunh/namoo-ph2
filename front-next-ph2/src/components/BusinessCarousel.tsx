import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const BusinessCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="mx-auto max-w-[15rem] md:max-w-[31rem] lg:max-w-[80rem]"
    >
      <CarouselContent>
        {[
          {
            title: "차세대 통합 관리시스템 구축",
            tags: ["#DT", "#Solution"],
          },
          {
            title: "스마트팩토리 MES 구축",
            tags: ["#MES", "#Smart Factory"],
          },
          {
            title: "클라우드 기반 ERP 시스템 개발",
            tags: ["#Cloud", "#ERP"],
          },
          {
            title: "AI 기반 품질 관리 시스템",
            tags: ["#AI", "#Quality"],
          },
        ].map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="h-[10rem] w-[15rem] rounded-3xl border border-transparent bg-white p-4 transition-colors duration-200 hover:border-[#96cb4f] lg:h-[20rem] lg:w-[25rem] lg:p-6">
              <div className="flex h-full flex-col text-left">
                <div className="relative w-[6rem] md:w-[8rem] lg:w-[10rem]">
                  <Image
                    src={"/image/ci.png"}
                    alt={"ci"}
                    width={1472}
                    height={832}
                    className="object-contain object-left"
                  />
                </div>
                <div className="my-2 border-b border-gray-200 lg:my-4" />
                <h3 className="text-md font-semibold text-gray-800 lg:text-2xl">
                  {item.title}
                </h3>
                <div className="mt-auto flex flex-wrap gap-2 text-sm text-gray-600">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="rounded-full bg-gray-100 px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default BusinessCarousel;
