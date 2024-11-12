"use client";

// React
import { ReactElement } from "react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

export default function SwiperCarousel({ data }: { data: ReactElement[] }) {
  return (
    <Swiper
      modules={[FreeMode]}
      freeMode
      grabCursor
      spaceBetween={8}
      breakpoints={{
        640: { slidesPerView: 1.5 },
        768: { slidesPerView: 2.5 },
        1024: { slidesPerView: 4 },
      }}
    >
      {data.map((card, index) => (
        <SwiperSlide key={index}>{card}</SwiperSlide>
      ))}
    </Swiper>
  );
}
