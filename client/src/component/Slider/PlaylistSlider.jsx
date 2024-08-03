import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardAdditional from "../card/CardAdditional";

export default function PlaylistSlider() {
  return (
    <div className="position-relative">
      <div className="prj-pl-nav">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.1}
        navigation={{
          nextEl: ".prj-pl-nav .swiper-button-next",
          prevEl: ".prj-pl-nav .swiper-button-prev",
        }}
        breakpoints={{
          768: { slidesPerView: 1.1 },
          1440: { slidesPerView: 1.1 },
        }}
        spaceBetween={20}
      >
        <SwiperSlide>
          <CardAdditional
            link={`https://www.youtube.com/playlist?list=PLiCmIB88gkWQyzpusqxE8uaydKCTN-dij`}
            title={`Youtube playlist • Senior Project Showreel, Academic Year 2023`}
            desc={`เราได้จัดทำ Youtube Playlist รวบรวมคลิป Showreel ของแต่ละผลงาน<br />จุลนิพนธ์ ประจำปีการศึกษา 2566 เพื่อให้ทุกคนเข้าถึงได้ง่ายขึ้น`}
            img={``}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardAdditional
            link={`https://www.youtube.com/playlist?list=PLiCmIB88gkWQyzpusqxE8uaydKCTN-dij`}
            title={`Exhibition Onsite Photo #syn2sign`}
            desc={`รวบรวมภาพบรรยากาศภายในงานนิทรรศการ #syn2sign ที่นอกจาก<br/>การจัดแสดงผลงานจุลนิพนธ์แล้วภายในงานยังมีจุดที่น่าสนใจอีกมากมายด้วย`}
            img={``}
          />
        </SwiperSlide>

        <SwiperSlide>
          <CardAdditional
            link={`https://www.youtube.com/playlist?list=PLiCmIB88gkWQyzpusqxE8uaydKCTN-dij`}
            title={``}
            desc={``}
            img={``}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
