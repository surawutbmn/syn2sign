import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import exh_photo from "./img/exh-photo.webp";
import { FaArrowRightLong } from "react-icons/fa6";

export default function KnowledgeSlide() {
  return (
    <div className="swiper-content">
      <Swiper
        modules={[Navigation]}
        slidesPerView={1.8}
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
          <div className="card-exh-link">
            <img
              src={exh_photo}
              alt=""
              style={{ borderRadius: "1rem" }}
              className="card-img-top"
            />
            <div className="exh-card-ovl"></div>
            <div className="card-exh-con">
              <div className="card-body text-start">
                <h4 className="card-exh-title mt-3">
                  Starting Up • 10 Components for a Digital Platform
                </h4>
                <p className="card-exh-text mb-5">
                  นิทรรศการความรู้ “10 ชุดประกอบสร้างดิจิทัลแพลตฟอร์ม” ที่รวบรวม
                  องค์ความรู้ทั้งในมุมมองด้านการออกแบบร่วมกับด้านพัฒนาโค้ดดิ้ง
                  พร้อมทั้งกรณีศึกษาที่เป็นประโยชน์อีกมากมาย
                </p>
              </div>
              <div className="btn-icon">
                <span>
                  SEE MORE <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-exh-link">
            <img
              src={exh_photo}
              alt=""
              style={{ borderRadius: "1rem" }}
              className="card-img-top"
            />
            <div className="exh-card-ovl"></div>
            <div className="card-exh-con">
              <div className="card-body text-start">
                <h4 className="card-exh-title mt-3">
                  Starting Up • 10 Components for a Digital Platform
                </h4>
                <p className="card-exh-text mb-5">
                  นิทรรศการความรู้ “10 ชุดประกอบสร้างดิจิทัลแพลตฟอร์ม” ที่รวบรวม
                  องค์ความรู้ทั้งในมุมมองด้านการออกแบบร่วมกับด้านพัฒนาโค้ดดิ้ง
                  พร้อมทั้งกรณีศึกษาที่เป็นประโยชน์อีกมากมาย
                </p>
              </div>
              <div className="btn-icon">
                <span>
                  SEE MORE <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card-exh-link">
            <img
              src={exh_photo}
              alt=""
              style={{ borderRadius: "1rem" }}
              className="card-img-top"
            />
            <div className="exh-card-ovl"></div>
            <div className="card-exh-con">
              <div className="card-body text-start">
                <h4 className="card-exh-title mt-3">
                  Starting Up • 10 Components for a Digital Platform
                </h4>
                <p className="card-exh-text mb-5">
                  นิทรรศการความรู้ “10 ชุดประกอบสร้างดิจิทัลแพลตฟอร์ม” ที่รวบรวม
                  องค์ความรู้ทั้งในมุมมองด้านการออกแบบร่วมกับด้านพัฒนาโค้ดดิ้ง
                  พร้อมทั้งกรณีศึกษาที่เป็นประโยชน์อีกมากมาย
                </p>
              </div>
              <div className="btn-icon">
                <span>
                  SEE MORE <FaArrowRightLong />
                </span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="prj-knbslide-nav">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );

}
