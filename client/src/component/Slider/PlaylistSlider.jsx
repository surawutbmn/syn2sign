import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import CardAdditional from "../card/CardAdditional";

export default function PlaylistSlider() {
  return (
    <div className="swiper-content">
      <Swiper
        modules={[Navigation]}
        // slidesPerView={2}
        breakpoints={{
          768: { slidesPerView: 1.1 },
          1440: { slidesPerView: 1.1 },
        }}
        spaceBetween={20}
      >
        <SwiperSlide>
          <CardAdditional></CardAdditional>
        </SwiperSlide>

        <SwiperSlide>
          <CardAdditional></CardAdditional>
        </SwiperSlide>

        <SwiperSlide>
          <CardAdditional></CardAdditional>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
