import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CardAdditional from "../card/CardAdditional";
import CardKnowledge from "../card/CardKnowledge";
import styled from "styled-components";

const SlideCon = styled.div`
  .prj-pl-nav-2 .swiper-button-next,
  .prj-pl-nav .swiper-button-next {
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
    top: 6%;
    right: -5%;
  }
  .prj-pl-nav-2 .swiper-button-prev,
  .prj-pl-nav .swiper-button-prev {
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
    top: 6%;
    left: -5%;
  }
  .prj-pl-nav-2 .swiper-button-prev.swiper-button-disabled,
  .prj-pl-nav-2 .swiper-button-next.swiper-button-disabled,
  .prj-pl-nav .swiper-button-prev.swiper-button-disabled,
  .prj-pl-nav .swiper-button-next.swiper-button-disabled {
    opacity: 0;
  }
  .prj-pl-nav-2 .swiper-button-prev::after,
  .prj-pl-nav .swiper-button-prev::after {
    color: var(--color-light);
    font-size: 3rem;
    margin-left: -4rem;
  }
  .prj-pl-nav-2 .swiper-button-next::after,
  .prj-pl-nav .swiper-button-next::after {
    color: var(--color-light);
    font-size: 3rem;
    margin-right: -3rem;
  }
  .prj-pl-nav-2 .swiper-button-prev:hover,
  .prj-pl-nav-2 .swiper-button-next:hover,
  .prj-pl-nav .swiper-button-prev:hover,
  .prj-pl-nav .swiper-button-next:hover {
    opacity: 1;
  }
  @media (max-width: 991.98px) {
    .prj-pl-nav .swiper-button-prev,
    .prj-pl-nav .swiper-button-next {
      top: 10%;
      width: 100px;
    }
  }
  @media (max-width: 767.98px) {
    .prj-pl-nav-2 .swiper-button-prev,
    .prj-pl-nav-2 .swiper-button-next {
      width: 100px;
      top: 4%;
    }
  }
`;

export default function PlaylistSlider() {
  return (
    <>
      <SlideCon className="position-relative d-bolck d-md-none">
        <div className="prj-pl-nav-2">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <Swiper
          className="container"
          style={{ overflow: "visible" }}
          modules={[Navigation]}
          slidesPerView={1.1}
          navigation={{
            nextEl: ".prj-pl-nav-2 .swiper-button-next",
            prevEl: ".prj-pl-nav-2 .swiper-button-prev",
          }}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            768: { slidesPerView: 1.5 },
            1440: { slidesPerView: 2.2 },
          }}
          spaceBetween={20}
        >
          <SwiperSlide>
            <CardKnowledge
              link={`https://youtube.com/playlist?list=PLiCmIB88gkWQyzpusqxE8uaydKCTN-dij&si=aYnCQPUgQNGu5f7Y`}
              title={`Youtube playlist • Senior Project Showreel, Academic Year 2023`}
              desc={`เราได้จัดทำ Youtube Playlist รวบรวมคลิป Showreel ของแต่ละผลงาน จุลนิพนธ์ ประจำปีการศึกษา 2566 เพื่อให้ทุกคนเข้าถึงได้ง่ายขึ้น`}
              img={`playlistShow.webp`}
              btnIcon={`arrow`}
              btn={`watch now`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardKnowledge
              link={`https://youtube.com/playlist?list=PLiCmIB88gkWS2P5lAglpcinRaCB8vtAIV&si=CegzMdumnDopwtf3`}
              title={`Youtube playlist • Exhibition Atmosphere #syn2sign`}
              desc={`เราได้จัดทำ Youtube playlist รวบรวมคลิปบรรยากาศในงาน นิทรรศการ Syn2signและคลิปสัมภาษณ์ผู้เข้าร่วมชมงานนิทรรศการ เพื่อให้ทุกคนได้เพลิดเพลินไปกับเรา`}
              img={`playlistAtmos.webp`}
              btnIcon={`arrow`}
              btn={`watch now`}
              btn2={`on youtube`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardKnowledge
              link={`https://www.facebook.com/media/set/?set=a.808621128076703&type=3`}
              title={`Syn2sign Gallery 1 #syn2sign`}
              desc={`รวบรวมภาพบรรยากาศภายในงานนิทรรศการ #syn2sign ชุดที่ 1 กับการพูดคุยแลกเปลี่ยนประสบการณ์ของผู้จัดทำผลงานกับผู้เข้าชม งานนิทรรศการ`}
              img={`gallery1.webp`}
              btn={`see more`}
              btnIcon={`arrow`}
              btn2={`on facebook`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardKnowledge
              link={`https://www.facebook.com/media/set/?set=a.808628818075934&type=3`}
              title={`Syn2sign Gallery 2 #syn2sign`}
              desc={`รวบรวมภาพบรรยากาศภายในงานนิทรรศการ #syn2sign ชุดที่ 2 กับการพูดคุยแลกเปลี่ยนประสบการณ์ของผู้จัดทำผลงานกับผู้เข้าชม งานนิทรรศการ`}
              img={`gallery2.webp`}
              btn={`see more`}
              btnIcon={`arrow`}
              btn2={`on facebook`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardKnowledge
              link={`https://www.facebook.com/media/set/?set=a.808637004741782&type=3`}
              title={`Syn2sign Gallery Activity #syn2sign`}
              desc={`รวบรวมภาพบรรยากาศการเข้าร่วมกิจกรรมต่างๆ ของผู้เข้าชมงาน นิทรรศการ ที่นอกจากการจัดแสดงโชว์ผลงานจุลนิพนธ์แล้ว ภายในงานยังมีจุดที่น่าสนใจอีกมากมายด้วย`}
              img={`gallery3.webp`}
              btn={`see more`}
              btnIcon={`arrow`}
              btn2={`on facebook`}
            />
          </SwiperSlide>
        </Swiper>
      </SlideCon>
      <SlideCon className="position-relative d-none d-md-block">
        <div className="prj-pl-nav">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
        <Swiper
          className="container"
          style={{ overflow: "visible" }}
          modules={[Navigation]}
          slidesPerView={1}
          navigation={{
            nextEl: ".prj-pl-nav .swiper-button-next",
            prevEl: ".prj-pl-nav .swiper-button-prev",
          }}
          breakpoints={{
            768: { slidesPerView: 1.1 },
            1024: { slidesPerView: 1 },
            1440: { slidesPerView: 1.2 },
          }}
          spaceBetween={20}
        >
          <SwiperSlide>
            <CardAdditional
              link={`https://youtube.com/playlist?list=PLiCmIB88gkWQyzpusqxE8uaydKCTN-dij&si=aYnCQPUgQNGu5f7Y`}
              title={`Youtube playlist • Senior Project Showreel, Academic Year 2023`}
              desc={`เราได้จัดทำ Youtube Playlist รวบรวมคลิป Showreel ของแต่ละผลงาน จุลนิพนธ์ ประจำปีการศึกษา 2566 เพื่อให้ทุกคนเข้าถึงได้ง่ายขึ้น`}
              img={`playlistShow.webp`}
              btnIcon={`arrow`}
              btn2={`on youtube`}
              btn={`watch now`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardAdditional
              link={`https://youtube.com/playlist?list=PLiCmIB88gkWS2P5lAglpcinRaCB8vtAIV&si=CegzMdumnDopwtf3`}
              title={`Youtube playlist • Exhibition Atmosphere #syn2sign`}
              desc={`เราได้จัดทำ Youtube playlist รวบรวมคลิปบรรยากาศในงาน นิทรรศการ Syn2signและคลิปสัมภาษณ์ผู้เข้าร่วมชมงานนิทรรศการ เพื่อให้ทุกคนได้เพลิดเพลินไปกับเรา`}
              img={`playlistAtmos.webp`}
              btnIcon={`arrow`}
              btn2={`on youtube`}
              btn={`watch now`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardAdditional
              link={`https://www.facebook.com/media/set/?set=a.808621128076703&type=3`}
              title={`Syn2sign Gallery 1 #syn2sign`}
              desc={`รวบรวมภาพบรรยากาศภายในงานนิทรรศการ #syn2sign ชุดที่ 1 กับการพูดคุยแลกเปลี่ยนประสบการณ์ของผู้จัดทำผลงานกับผู้เข้าชม งานนิทรรศการ`}
              img={`gallery1.webp`}
              btn={`see more`}
              btn2={`on facebook`}
              btnIcon={`arrow`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardAdditional
              link={`https://www.facebook.com/media/set/?set=a.808628818075934&type=3`}
              title={`Syn2sign Gallery 2 #syn2sign`}
              desc={`รวบรวมภาพบรรยากาศภายในงานนิทรรศการ #syn2sign ชุดที่ 2 กับการพูดคุยแลกเปลี่ยนประสบการณ์ของผู้จัดทำผลงานกับผู้เข้าชม งานนิทรรศการ`}
              img={`gallery2.webp`}
              btn={`see more`}
              btn2={`on facebook`}
              btnIcon={`arrow`}
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardAdditional
              link={`https://www.facebook.com/media/set/?set=a.808637004741782&type=3`}
              title={`Syn2sign Gallery Activity #syn2sign`}
              desc={`รวบรวมภาพบรรยากาศการเข้าร่วมกิจกรรมต่างๆ ของผู้เข้าชมงาน นิทรรศการ ที่นอกจากการจัดแสดงโชว์ผลงานจุลนิพนธ์แล้ว ภายในงานยังมีจุดที่น่าสนใจอีกมากมายด้วย`}
              img={`gallery3.webp`}
              btn={`see more`}
              btn2={`on facebook`}
              btnIcon={`arrow`}
            />
          </SwiperSlide>
        </Swiper>
      </SlideCon>
    </>
  );
}
