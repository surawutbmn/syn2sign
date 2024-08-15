import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import data from "../../imageData.json";
const imageDataUrl = import.meta.env.VITE_BASE_URL + "imageData.json";

const DesignProcessSlider = () => {
  const [imageList, setImageList] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(3.5); // Default to mobile view
  const [error, setError] = useState(null);
  const { prj_id } = useParams();
  useEffect(() => {
    const projectId = prj_id;
    const fetchImageData = async () => {
      if (projectId && data[projectId]) {
        const images = data[projectId];
        setImageList(images);

        // Determine slidesPerView based on the first image's aspect ratio
        const firstAspect = images[0]?.aspect;
        if (firstAspect === "desktop" || firstAspect === "tablet") {
          setSlidesPerView(1.5);
        } else {
          setSlidesPerView(3.5);
        }
      } else {
        console.error("Project ID not found in the JSON data.");
      }
    };

    fetchImageData();
  }, [prj_id]);
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="position-relative">
      <Swiper
        modules={[Navigation]}
        slidesPerView={slidesPerView}
        navigation={{
          nextEl: ".prj-pl-nav .swiper-button-next",
          prevEl: ".prj-pl-nav .swiper-button-prev",
        }}
        spaceBetween={50}
      >
        {imageList.map((image, index) => (
          <SwiperSlide key={index}>
            <DesignProcess
              src={import.meta.env.VITE_BASE_URL + image.src}
              alt={`Design Process ${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DesignProcessSlider;

const DesignProcess = styled.img`
  height: 500px;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;

  ${(props) =>
    props.aspect === "desktop" &&
    `
    object-fit: cover; 
  `}
`;
