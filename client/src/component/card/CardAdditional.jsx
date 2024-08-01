import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FaArrowRightLong } from "react-icons/fa6";
import WatchnowButton from "../Button/WatchnowButton";
const CardAdditional = (props) => {
  // const Line = props.href ? LineImage : 'div';
  return (
    <div>
      <CardBox className="row txt-grey">
        <div className="col-4">
            <ImagePreview src="src\Pages\Exhibition\img\20240614-facebook-profile.png"/>
        </div>
        <div className="col-8 position-relative">
            <div className="txt-head2 txt-second text-start mt-4">Youtube playlist • Senior Project Showreel, Academic Year 2023</div>
            <div className="txt-body1 text-start mt-3 txt-dark">เราได้จัดทำ Youtube Playlist รวบรวมคลิป Showreel ของแต่ละผลงาน <br></br>จุลนิพนธ์ ประจำปีการศึกษา 2566 เพื่อให้ทุกคนเข้าถึงได้ง่ายขึ้น</div>
        
        <WatchnowButton/>
        </div>
      </CardBox>
    </div>
  );
};



export default CardAdditional;

const CardBox = styled.div`
width: 100%;
  /* width: 1130px; */
  height: auto;
  /* height: 250px; */
  background: white;
  border-radius: 10px;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
margin-left: calc(-1 * var(--bs-gutter-x)* .5);
padding: 30px;
`;

