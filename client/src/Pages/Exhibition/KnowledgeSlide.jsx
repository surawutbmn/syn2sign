import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import exh_photo from "./img/exh-photo.webp";
import CardKnowledge from "../../component/card/CardKnowledge";

function KnowledgeSlide() {
  return (
    <div className="swiper-content">
      <Swiper
        style={{ overflow: "visible" }}
        modules={[Navigation, Autoplay]}
        slidesPerView={1.8}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false, // Continue autoplay after user interactions
        }}
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1440: { slidesPerView: 2.2 },
        }}
        spaceBetween={20}
        navigation={{
          nextEl: ".prj-knbslide-nav .swiper-button-next",
          prevEl: ".prj-knbslide-nav .swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <CardKnowledge />
        </SwiperSlide>
        <SwiperSlide>
          <CardKnowledge />
        </SwiperSlide>
        <SwiperSlide>
          <CardKnowledge />
        </SwiperSlide>
      </Swiper>
      <div className="prj-knbslide-nav">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );

}
export default KnowledgeSlide;