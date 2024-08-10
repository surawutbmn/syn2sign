import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./exhibition.css";
import { FaInstagram } from "react-icons/fa";
import styled from "styled-components";
import { Container } from "react-bootstrap";

export const VdoSlide = () => {
  const projectDetails = [
    {
      id: "cpl01",
      name: "EVAL Balance",
      name_th: "อีวาล บาลานซ์",
      videoSrc: "_41WQgd5qKw",
      instagramLink: "C84rbNBBfC4/",
    },
    {
      id: "cpl02",
      name: "WAIWAN",
      name_th: "ไหว้วาน",
      videoSrc: "OwyQ7eIHmoc",
      instagramLink: "C85_gVYpUFr/",
    },
    {
      id: "cpl03",
      name: "ARTIST MATCH",
      name_th: "อาร์ทิสแมทช์",
      videoSrc: "dp_AlUgThnQ",
      instagramLink: "C86Atd2t8bL/",
    },
    {
      id: "cpl04",
      name: "MORYTECH",
      name_th: "โมรี่เทค",
      videoSrc: "zPt2Uu3vZ4I",
      instagramLink: "C88dalKuOTF/",
    },
    {
      id: "cpl05",
      name: "FULLFILL",
      name_th: "ฟูลฟิล",
      videoSrc: "wMnxzOlEVPA",
      instagramLink: "C88ejz9I8O9/",
    },
    {
      id: "cpl06",
      name: "YOUNG & CHIC",
      name_th: "ยังแอนด์ชิก",
      videoSrc: "asaKqFdHkRE",
      instagramLink: "C8_COMssnSu/",
    },
    {
      id: "cpl07",
      name: "Tent Care",
      name_th: "เท็นท์แคร์",
      videoSrc: "KhAfnkMRctc",
      instagramLink: "C9BnC_UpbT2/",
    },
    {
      id: "cpl08",
      name: "TINY THAI",
      name_th: "ไทนี่ไทย",
      videoSrc: "2fkCoiR49wo",
      instagramLink: "C9BoNYopFRy/",
    },
  ];
  return (
    <>
      <Container className="exh-vdosec-title text-start">
        <h2>VIDEO Syn2sign</h2>
        <span>ความรู้สึกหลังการจัดงานนิทรรศการ</span>
      </Container>
      <SlideCon className="position-relative mt-4">
        <Swiper
          className="container"
          style={{ overflow: "visible" }}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 1.6 },
            1440: { slidesPerView: 2 },
          }}
          // cssMode={true}
          navigation={{
            nextEl: ".prj-vdoslide-nav .swiper-button-next",
            prevEl: ".prj-vdoslide-nav .swiper-button-prev",
          }}
          loop={true}
          // autoplay={{
          //   delay: 3400,
          //   disableOnInteraction: false, // Continue autoplay after user interactions
          // }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log("slide change")}
        >
          {projectDetails.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="d-flex flex-column">
                <div className="mx-auto ratio ratio-16x9">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${project.videoSrc}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="video-box"
                  ></iframe>
                </div>
                <h4 className="text-start txt-sbold mt-3">
                  {project.name} ({project.name_th})
                </h4>
                <div className="insta-link-con">
                  <a
                    href={`https://www.instagram.com/reel/${project.instagramLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon-crl me-2">
                      <FaInstagram />
                    </span>
                    <span>บทสัมภาษณ์กลุ่ม “{project.name}”</span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="prj-vdoslide-nav">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </SlideCon>
    </>
  );
};

const SlideCon = styled.div`
  position: relative;
  .prj-vdoslide-nav .swiper-button-prev::after,
  .prj-vdoslide-nav .swiper-button-next::after {
    color: var(--color-light);
    font-size: 3rem;
  }
  .prj-vdoslide-nav .swiper-button-next::after {
    margin-right: -3rem;
  }
  .prj-vdoslide-nav .swiper-button-prev::after {
    margin-left: -4rem;
  }
  .prj-vdoslide-nav .swiper-button-prev,
  .prj-vdoslide-nav .swiper-button-next {
    opacity: 0;
    transition: opacity 0.3s ease;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(5, 186, 100, 0.5) 100%
    );
    width: 130px;
    height: 100%;
    top: 5%;
    right: 0;
  }
  .prj-vdoslide-nav .swiper-button-prev {
    background: linear-gradient(
      -90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(5, 186, 100, 0.5) 100%
    );
    left: 0;
  }
  .prj-vdoslide-nav .swiper-button-prev.swiper-button-disabled,
  .prj-vdoslide-nav .swiper-button-next.swiper-button-disabled {
    opacity: 0;
  }
  .prj-vdoslide-nav .swiper-button-prev:hover,
  .prj-vdoslide-nav .swiper-button-next:hover {
    opacity: 1;
  }
  @media (max-width: 767.98px) {
    .prj-vdoslide-nav .swiper-button-next::after {
      margin-right:-1rem;
    }
    .prj-vdoslide-nav .swiper-button-prev::after {
      margin-left: -2rem;
    }
    .prj-vdoslide-nav .swiper-button-prev,
    .prj-vdoslide-nav .swiper-button-next {
      width: 90px;
    }
  }
`;