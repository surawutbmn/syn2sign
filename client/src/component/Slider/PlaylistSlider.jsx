import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";
import CardAdditional from "../card/CardAdditional";

export default function PlaylistSlider() {

  const Overlay = styled.div`
    z-index: 0;
    position: absolute;
    bottom: 0;
    right: 1%;
    height: 20%;
    width: 100%;
    /* background: rgb(255, 255, 255); */
    background: linear-gradient(
      140deg,
      rgba(255, 255, 255, 0) 90%,
      rgba(144, 245, 197, 0.8) 100%
    );
  `;

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
          <Overlay></Overlay>
        </SwiperSlide>

        <SwiperSlide>
          <CardAdditional></CardAdditional>
          <Overlay></Overlay>
        </SwiperSlide>

        <SwiperSlide>
          <CardAdditional></CardAdditional>
          <Overlay></Overlay>
        </SwiperSlide>

      </Swiper>
    </div>
  );
}
