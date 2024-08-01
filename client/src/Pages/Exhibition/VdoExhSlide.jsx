import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./exhibition.css";
import { FaInstagram } from "react-icons/fa";

export const VdoExh = () => {
  const exhDetails = [
    {
      id: "1",
      title: "ภาพบรรยากาศงาน Day 1",
      date: "(June 26, 2024)",
      videoSrc: "Kkvge3HhIZc",
      instagramLink: "C9T2T3zJ78v/",
    },
    {
      id: "2",
      title: "ภาพบรรยากาศงาน Day 2",
      date: "(June 27, 2024)",
      videoSrc: "Kkvge3HhIZc",
      instagramLink: "C9T2T3zJ78v/",
    },
    {
      id: "3",
      title: "ภาพบรรยากาศงาน Day 3",
      date: "(June 28, 2024)",
      videoSrc: "Kkvge3HhIZc",
      instagramLink: "C9T2T3zJ78v/",
    },
    {
      id: "4",
      title: "ภาพบรรยากาศงาน Day 4",
      date: "(June 29, 2024)",
      videoSrc: "Kkvge3HhIZc",
      instagramLink: "C9T2T3zJ78v/",
    },
    {
      id: "5",
      title: "ภาพบรรยากาศงาน Day 5",
      date: "(June 30, 2024)",
      videoSrc: "Kkvge3HhIZc",
      instagramLink: "C9T2T3zJ78v/",
    },
  ];

  return (
    <div className="position-relative">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1.5}
        breakpoints={{
          768: { slidesPerView: 2.5 },
          1440: { slidesPerView: 2.8 },
        }}
        // cssMode={true}
        navigation={{
          nextEl: ".prj-exh-nav .swiper-button-next",
          prevEl: ".prj-exh-nav .swiper-button-prev",
        }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {exhDetails.map((exhibition) => (
          <SwiperSlide key={exhibition.id}>
            <div className="d-flex flex-column">
              <div className="mx-auto ratio ratio-16x9">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${exhibition.videoSrc}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="video-box"
                ></iframe>
              </div>
              <h4 className="text-start txt-sbold mt-3">
                {exhibition.title}{" "}
                <span
                  style={{ fontSize: ".8rem", fontWeight: "var(--txt-med)" }}
                >
                  {exhibition.date}
                </span>
              </h4>
              <div className="insta-link-con">
                <a
                  href={`https://www.instagram.com/reel/${exhibition.instagramLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="icon-crl me-2">
                    <FaInstagram />
                  </span>
                  <span>บทสัมภาษณ์ “ผู้เข้าชมงาน”</span>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="prj-exh-nav">
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};
