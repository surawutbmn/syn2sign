import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import CardKnowledge from "../../component/card/CardKnowledge";

function KnowledgeSlide() {
  return (
    <div className="swiper-content mt-5">
      <Swiper
        style={{ overflow: "visible" }}
        modules={[Navigation, Autoplay]}
        slidesPerView={1.8}
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
          <CardKnowledge
            img={`/other/tenKnow.webp`}
            title={`Starting Up • 10 Components
for a Digital Platform`}
            desc={`นิทรรศการความรู้ “10 ชุดประกอบสร้างดิจิทัลแพลตฟอร์ม” ที่รวบรวม องค์ความรู้ทั้งในมุมมองด้านการออกแบบร่วมกับด้านพัฒนาโค้ดดิ้ง พร้อมทั้งกรณีศึกษาที่เป็นประโยชน์อีกมากมาย`}
            btn={`See more`}
            btnIcon={`arrow`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardKnowledge
            img={`/other/knowLogo.webp`}
            title={`Syn2sign Story`}
            desc={`เราได้รวบรวมเรื่องราวที่มากว่าจะเป็น...ชื่อ โลโก้ โปสเตอร์ มาเล่าในบทความนี้ “กว่าจะเป็น... #syn2sign”`}
            btn={`Read more`}
            btnIcon={`arrow`}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardKnowledge
            img={`/other/stickerKnow.webp`}
            title={`Download Syn2sign Stickers Free`}
            desc={`สติกเกอร์ลายพิเศษจากนิทรรศการ Syn2sign ที่ออกแบบ สำหรับงานนี้โดยเฉพาะ (สามารถดาวน์โหลดไฟล์ได้ที่นี่)`}
            btn={`download`}
            btnIcon={`download`}
          />
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
