"use client";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import styles from "./Swiper.module.css";
import { Scrollbar, Mousewheel } from "swiper/modules";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "../products/productCard";
import { ProductType } from "@/data/product";

type RelatedProductsType = {
  relatedLists: ProductType[];
};

export default function RelatedProducts({ relatedLists }: RelatedProductsType) {
  const swiperRef = useRef<SwiperRef>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;
      setIsBeginning(swiperInstance.isBeginning);
      setIsEnd(swiperInstance.isEnd);
    }
  };
  return (
    <div className="relative">
      <h3 className="capitalize text-2xl font-medium">You might also like</h3>
      <Swiper
        ref={swiperRef}
        onSlideChange={handleSlideChange}
        modules={[Scrollbar, Mousewheel]}
        mousewheel={{
          forceToAxis: true,
        }}
        spaceBetween={50}
        slidesPerView={4}
        scrollbar={{
          draggable: true,
          horizontalClass: styles.scrollbartrack,
          dragClass: styles.scrollbar,
        }}
        className={["w-full mt-16 "].join(" ")}
        style={{ paddingBottom: "1.5rem" }}
      >
        {relatedLists.map((list, index) => (
          <SwiperSlide key={index}>
            <div className="w-full">
              <ProductCard {...list} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-10 top-0 right-0  flex justify-center items-center gap-2 p-2 rounded-full">
        <Button
          className="py-6 px-2 rounded-full text-primary/70 disabled:text-primary/30"
          variant={"secondary"}
          disabled={isBeginning}
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <ChevronLeft className="w-8 h-8" />
        </Button>
        <Button
          variant={"secondary"}
          className="py-6 px-2 rounded-full text-primary/70 disabled:text-primary/30"
          disabled={isEnd}
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}
