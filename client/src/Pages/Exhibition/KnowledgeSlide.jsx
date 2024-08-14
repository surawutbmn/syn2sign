import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import CardKnowledge from "../../component/card/CardKnowledge";
import styled from "styled-components";

const SlideCon = styled.div`
  position: relative;
  .prj-knbslide-nav .swiper-button-next {
    opacity: 0;
    transition: opacity 0.3s ease;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(5, 186, 100, 0.5) 100%
    );
    width: 130px;
    height: 100%;
    top: 4%;
    right: 0%;
  }
  .prj-knbslide-nav .swiper-button-prev {
    opacity: 0;
    transition: opacity 0.3s ease;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(5, 186, 100, 0.5) 100%
    );
    width: 130px;
    height: 100%;
    top: 4%;
    left: 0%;
  }
  .prj-knbslide-nav .swiper-button-prev.swiper-button-disabled,
  .prj-knbslide-nav .swiper-button-next.swiper-button-disabled {
    opacity: 0;
  }
  .prj-knbslide-nav .swiper-button-prev::after {
    color: var(--color-light);
    font-size: 3rem;
    margin-left: -4rem;
  }
  .prj-knbslide-nav .swiper-button-next::after {
    color: var(--color-light);
    font-size: 3rem;
  }
  .prj-knbslide-nav .swiper-button-prev:hover,
  .prj-knbslide-nav .swiper-button-next:hover {
    opacity: 1;
  }
  @media (max-width: 1199.98px) {
    .prj-knbslide-nav .swiper-button-prev,
    .prj-knbslide-nav .swiper-button-next {
      width: 100px;
    }
    .prj-knbslide-nav .swiper-button-prev::after {
      margin-left: -2rem;
    }
    .prj-knbslide-nav .swiper-button-next::after {
      margin-right: -2.2rem;
    }
  }
`;

function KnowledgeSlide() {
  return (
    <SlideCon className="mt-5">
      <Swiper
        className="container"
        style={{ overflow: "visible" }}
        modules={[Navigation, Autoplay]}
        slidesPerView={1.1}
        freeMode={true}
        autoplay={{
          delay: 3200,
          disableOnInteraction: true, // Continue autoplay after user interactions
        }}
        breakpoints={{
          0: { slidesPerView: 1.5 },
          768: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
          1200: { slidesPerView: 2.5 },
          1440: { slidesPerView: 2.5 },
        }}
        spaceBetween={20}
        navigation={{
          nextEl: ".prj-knbslide-nav .swiper-button-next",
          prevEl: ".prj-knbslide-nav .swiper-button-prev",
        }}
      >
        <SwiperSlide>
          <CardKnowledge
            img={`/other/tenKnow.webp`}
            title={`Starting Up • 10 Components
for a Digital Platform`}
            desc={`นิทรรศการความรู้ “10 ชุดประกอบสร้างดิจิทัลแพลตฟอร์ม” ที่รวบรวม องค์ความรู้ทั้งในมุมมองด้านการออกแบบร่วมกับด้านพัฒนาโค้ดดิ้ง พร้อมทั้งกรณีศึกษาที่เป็นประโยชน์อีกมากมาย`}
            btn={`See more`}
            btn2={`on figma`}
            btnIcon={`arrow`}
            link={`https://www.figma.com/design/lQcCtWZLHIkAvhGOHwHmod/2024-syn2sign-10digital-platform?node-id=0-1&t=itzuGUzEMSundGkV-1`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardKnowledge
            link={`https://medium.com/funcslash/%E0%B9%80%E0%B8%AA%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%9A%E0%B8%9E%E0%B8%A5%E0%B8%B1%E0%B8%87%E0%B8%82%E0%B8%AD%E0%B8%87-graphic-design-team-%E0%B8%AA%E0%B8%B9%E0%B9%88%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%99%E0%B8%B4%E0%B8%97%E0%B8%A3%E0%B8%A3%E0%B8%A8%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B9%81%E0%B8%A3%E0%B8%81-syn2sign-96dc2d3caf03`}
            img={`/other/knowLogo.webp`}
            title={`Syn2sign Story`}
            desc={`เราได้รวบรวมเรื่องราวที่มากว่าจะเป็น...ชื่อ โลโก้ โปสเตอร์ มาเล่าในบทความนี้ “กว่าจะเป็น... #syn2sign”`}
            btn={`Read more`}
            btn2={`on medium`}
            btnIcon={`arrow`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardKnowledge
            link={`https://silpakorn-my.sharepoint.com/:b:/g/personal/meboon_k_su_ac_th/ESfmqJ0dVnVDq-Cis42C06sB5CdibUT5V-Qusya9tVQoGw?e=efRxsT`}
            img={`/other/stickerKnow.webp`}
            title={`Download Syn2sign Stickers Free`}
            desc={`สติกเกอร์ลายพิเศษจากนิทรรศการ Syn2sign ที่ออกแบบ สำหรับงานนี้โดยเฉพาะ (สามารถดาวน์โหลดไฟล์ได้ที่นี่)`}
            btn={`download`}
            btn2={`1.5mb`}
            btnIcon={`download`}
          />
        </SwiperSlide>
      </Swiper>
      <div className="prj-knbslide-nav">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </SlideCon>
  );
}
export default KnowledgeSlide;
