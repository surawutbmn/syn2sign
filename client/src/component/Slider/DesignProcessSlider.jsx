import React from 'react'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const DesignProcessSlider = () => {
  return (
    <div className="position-relativ">
      {/* <div className="prj-pl-nav">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div> */}
      <Swiper
        // style={{ overflow: "visible" }}
        modules={[Navigation]}
        slidesPerView={2}
        navigation={{
          nextEl: ".prj-pl-nav .swiper-button-next",
          prevEl: ".prj-pl-nav .swiper-button-prev",
        }}
        breakpoints={{
        //   768: { slidesPerView: 1.1 },
        //   1440: { slidesPerView: 1.1 },
        }}
        spaceBetween={1}
      >
        {/* <DesignProcess src="/showcase/Project/cpl01/designProcess/Flow_01.png"/> */}
        <SwiperSlide>
           
        
        </SwiperSlide>
        
      </Swiper>
      
    </div>
  )
}

export default DesignProcessSlider

const DesignProcess = styled.img`
    width: 220px;
    height: 477px;
`   