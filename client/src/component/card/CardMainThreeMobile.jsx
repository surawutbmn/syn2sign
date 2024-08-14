import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { FaGlobe, FaPlayCircle } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const CardMainThreeMobile = (props) => {
  // const Line = props.href ? LineImage : 'div';
  return (
    <div>
      <div className="d-flex row" style={{ marginBottom: "9rem" }}>
        <div className="col-12 text-start">
          <div className="txt-body1">
            <ThreeLogoExhibition src={props.logo} />
          </div>
          <div className="txt-head3 txt-bold txt-prim mt-2">{props.name}</div>
          <div className="col-12 txt-body1 txt-grey mb-4 mt-2">
            <ThreeLinkExhibition
              className="txt-body3"
              href={props.link}
              target="_blank"
            >
              
              <FaGlobe size="1.3em" className="me-2" />
              {props.linkText}
            </ThreeLinkExhibition>
          </div>
          <div className="txt-body1 txt-grey mt-1">
            {props.description1}
          </div>
          <div
            className="txt-body1 txt-grey text-start mt-5"
            style={{ marginRight: "5rem" }}
          >
            Poster
          </div>
          <div className="text-end">
            <ThreePosterExhibition src={props.poster} />
          </div>
          <VideoBoxExhibition className="col-12 txt-body1 mt-5">
            <div className="col-12 txt-body1 text-start mt-4 mb-4 ms-4">
              {props.NameVideo} • Video • View on Youtube
            </div>
            <ImageLinkExhibition href={props.linkVideo} target="_blank">
              <TabVideoAndImageBox className="col-12">
              <Text1 className="txt-body3 text1">คลิกเพื่อรับชม</Text1>
              <Text2 className="txt-bold txt-head2 text2">บรรยากาศ</Text2>
                <img src={props.imgPreview1}>
                </img>
                
                <Overlay />
                <IconPlay className="icon-play">
                  <FaPlayCircle />
                  {/* <FontAwesomeIcon icon={faCirclePlay} /> */}
                </IconPlay>
              </TabVideoAndImageBox>
            </ImageLinkExhibition>

            <ImageLinkExhibition href={props.linkImage} target="_blank">
              <TabVideoAndImageBox className="col-12">
              {/* <Text1 className="txt-body3 text1">คลิกเพื่อรับชม</Text1> */}
              <Text2 className="txt-bold txt-head2 text2">ภาพบรรยากาศ</Text2>
                <img src={props.imgPreview2}>
                </img>
                
                <Overlay />
                <IconPlay className="icon-play">
                  <FaPlayCircle />

                  {/* <FontAwesomeIcon icon={faCirclePlay} /> */}
                </IconPlay>
              </TabVideoAndImageBox>
            </ImageLinkExhibition>
          </VideoBoxExhibition>
        </div>
      </div>
    </div>
  );
};

CardMainThreeMobile.propTypes = {
  name: propTypes.string,
  year: propTypes.string,
  poster: propTypes.string,
  logo: propTypes.string,
  link: propTypes.string,
  linkText: propTypes.string,
  description1: propTypes.string,
  NameVideo: propTypes.string,
  linkVideo: propTypes.string,
  linkImage: propTypes.string,
  imgPreview1: propTypes.string,
  imgPreview2: propTypes.string,
};

export default CardMainThreeMobile;

const ThreePosterExhibition = styled.img`
  width: 360px;
  /* height: 500px; */
  width: 100%;
  /* width: 70%; */
  justify-content: end;
  align-items: end;
  /* object-fit: cover; */
`;

const ThreeLogoExhibition = styled.img`
  width: 76px;
  height: 76px;
  object-fit: contain;
`;

const ThreeLinkExhibition = styled.a`
  text-decoration: none;
  color: inherit;
  border: 1px solid #8e8e8e;
  padding: 10px;
  border-radius: 33px;
  transition: all 0.3s ease; /* Adds a smooth transition effect */

  &:hover {
    color: #05ba64; /* Change text color on hover */
    border-color: #05ba64; /* Change border color on hover */
  }
`;

const ImageLinkExhibition = styled.a`
  text-decoration: none;
  color: inherit;
  /* background-color: rebeccapurple; */
`;

const VideoBoxExhibition = styled.div`
  width: 100%;
  /* height: 51%; */
  height: 470px;
  border: 2px solid #8e8e8e;
  border-radius: 24px 24px 0 0;
  object-fit: cover;
`;

const TabVideoAndImageBox = styled.div`
  width: 100%;
  /* height: 235px; */
  height: 193px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .overlay {
    opacity: 0.8;
  }
  &:hover .text1 {
    font-size: 1.3rem;
  }
  &:hover .text2 {
    font-size: 3rem;
  }
  &:hover .icon-play {
    font-size: 5rem;
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(0, 255, 128, 0.5)
  );
  opacity: 0;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;
const Text1 = styled.div`
  position: absolute;
  top: 30%;
  left: 5%;
  text-decoration: none;
  color: white;
  z-index: 1;
  transition: all 0.3s ease;
`;
const Text2 = styled.div`
  position: absolute;
  top: 40%;
  left: 5%;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease;
`;
const IconPlay = styled.div`
  position: absolute;
  top: 30%;
  left: 80%;
  font-size: 3rem;
  color: white;
  transition: all 0.3s ease;
  opacity: 0;
`;
const LineImage = styled.img`
  position: absolute;
  width: 3%;
  height: 3000px;
  top: 6%;
  left: 37%;
  border: none;
`;
