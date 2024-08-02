import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { FaGlobe, FaPlayCircle } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGlobe, faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const CardMainThree = (props) => {
  // const Line = props.href ? LineImage : 'div';
  return (
    <div>
      <div className="row" style={{ marginBottom: "9rem" }}>
        <div className="col-4">
          {/* L */}
          <div
            className="col-12 text-end txt-staytune-big-year txt-bold"
            style={{ marginTop: "8.5rem", marginLeft: "" }}
          >
            <div className="txt-dark-outline">20</div>
            <div style={{ marginTop: "-2rem" }}>{props.year}</div>
          </div>
          <div
            className="col-12 txt-body1 txt-grey text-start"
            style={{ marginRight: "5rem" }}
          >
            Poster
          </div>
          <div className="col-12 text-end">
            <ThreePosterExhibition src={props.poster} />
          </div>
        </div>

        <div className="col-1">
          {/* <div className="line"> */}
          {props.line && (
            <LineImage
              src={props.line}
              onError={(e) => (e.target.style.display = "none")}
            />
          )}
          {/* </div> */}
        </div>

        <div className="col-7 text-start">
          {/* R */}
          <div className="col-12 txt-body1">
            <ThreeLogoExhibition src={props.logo} />
          </div>
          <div className="col-12 txt-head3 txt-bold txt-second mt-4">
            {props.name}
          </div>
          <div className="col-12 txt-body1 txt-grey mb-4 mt-4">
            <ThreeLinkExhibition
              className="txt-body3"
              href={props.link}
              target="_blank"
            >
              {/* <FontAwesomeIcon icon={faGlobe} size="xl" />{" "} */}
              <FaGlobe size="1.3em" className="me-2" />
              {props.link}
            </ThreeLinkExhibition>
          </div>
          <div className="col-12 txt-body1 txt-grey mt-1">
            {props.description1}
            <br></br>
            {props.description2}
            <br></br>
            {props.description3}
          </div>
          <VideoBoxExhibition className="col-12 txt-body1 mt-5">
            <div className="col-12 txt-body1 text-start mt-4 mb-4 ms-4">
              {props.NameVideo} • Video • View on Youtube
            </div>
            <ImageLinkExhibition href={props.linkVideo} target="_blank">
              <TabVideoAndImageBox className="col-12">
                <Text1 className="txt-body3 text1">คลิกเพื่อรับชม</Text1>
                <Text2 className="txt-bold txt-head2 text2">บรรยากาศ</Text2>
                <img src="/staytune/dotwishion-video-preview.png"></img>

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
                <img src="/staytune/dotwishion-video-preview.png"></img>

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

CardMainThree.propTypes = {
  name: propTypes.string,
  year: propTypes.string,
  poster: propTypes.string,
  logo: propTypes.string,
  link: propTypes.string,
  description1: propTypes.string,
  description2: propTypes.string,
  description3: propTypes.string,
  NameVideo: propTypes.string,
  linkVideo: propTypes.string,
  linkImage: propTypes.string,
};

export default CardMainThree;

const ThreePosterExhibition = styled.img`
  width: 360px;
  /* height: 500px; */
  width: 100%;
  /* width: 70%; */
  justify-content: end;
  align-items: end;
  /* object-fit: none; */
`;

const ThreeLogoExhibition = styled.img`
  width: 76px;
  height: 76px;
  object-fit: cover;
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
    object-fit: fill;
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
    transition: all .3s ease;
`;
const Text2 = styled.div`
    position: absolute;
    top: 40%;
    left: 5%;
    text-decoration: none;
    color: white;
    transition: all .3s ease;
`;
const IconPlay = styled.div`
     position: absolute;
    top: 30%;
    left: 80%;
    font-size: 3rem;
    color: white;
    transition: all .3s ease;
    opacity: 0;
`;
const LineImage = styled.img`
  position: absolute;
  width: 3%;
  height: 2250px;
  top: 6%;
  left: 37%;
  border: none;
`;
