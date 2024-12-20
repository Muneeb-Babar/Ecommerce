"use client";

import ProductSwiper from "@/components/swiper/ProductSwiper";
import { homeProductsSwiper } from "@/data";
import { Grid } from "swiper/modules";
import "swiper/css/grid";

export default function CustomSwiper() {
  return (
    <ProductSwiper
      swiperProps={{
        slidesPerView: 5,
        spaceBetween: 20,
        modules: [Grid],
        grid: { rows: 2, fill: "row" },
        breakpoints: {
          1: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 4,
          },
          1536: {
            slidesPerView: 5,
          },
        },
      }}
      data={homeProductsSwiper}
    />
  );
}
