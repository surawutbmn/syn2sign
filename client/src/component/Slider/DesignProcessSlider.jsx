import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from 'styled-components';

// Adjust the path to where your JSON file is located
const imageDataUrl = '/imageData.json';

const DesignProcessSlider = () => {
  const [imageList, setImageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const projectId = location.pathname.match(/cpl0\d{1}/)?.[0];

    const fetchImageData = async () => {
      try {
        const response = await fetch(imageDataUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (projectId && data[projectId]) {
          setImageList(data[projectId]);
        } else {
          console.error('Project ID not found in the JSON data.');
        }
      } catch (error) {
        console.error('Error fetching image data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImageData();
  }, [location]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="position-relativ">

      <Swiper
        modules={[Navigation]}
        slidesPerView={3.5}
        navigation={{
          nextEl: ".prj-pl-nav .swiper-button-next",
          prevEl: ".prj-pl-nav .swiper-button-prev",
        }}
        spaceBetween={10}
        
      >
        {imageList.map((src, index) => (
          <SwiperSlide key={index}>
            <DesignProcess src={src} alt={`Design Process ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DesignProcessSlider;

const DesignProcess = styled.img`
  height: 500px;
  width: auto; /* Maintain aspect ratio */
  max-width: 100%; /* Ensure image doesn’t overflow the container */
  object-fit: contain; /* Ensure proper fit within container */
  display: block;
  margin: 0 auto; /* Center image horizontally */
  /* Optional: Add additional styling for different aspect ratios */
  ${props => props.aspect === 'desktop' && `
    object-fit: cover; /* Cover for desktop aspect ratio images */
  `}
`;

