import styled from "styled-components";
import propTypes from "prop-types";
import WatchnowButton from "../Button/WatchnowButton";
const CardAdditional = (props) => {
  // const Line = props.href ? LineImage : 'div';
  return (
    <div>
      <CardBox>
        <Overlay></Overlay>
        <div className="col-4">
          <ImagePreview src="/s2s-logo/fb-profile.png" />
        </div>
        <BoxContent>
          <div className="txt-head2 txt-second text-start">
            Youtube playlist • Senior Project Showreel, Academic Year 2023
          </div>
          <BoxText className="txt-body1 text-start mt-3 txt-dark">
            เราได้จัดทำ Youtube Playlist รวบรวมคลิป Showreel ของแต่ละผลงาน{" "}
            <br />จุลนิพนธ์ ประจำปีการศึกษา 2566
            เพื่อให้ทุกคนเข้าถึงได้ง่ายขึ้น
          </BoxText>
          <WatchnowButton />
        </BoxContent>
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
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
`;
const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  position: relative;
`;
const BoxText = styled.div`
  flex-grow: 1;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 40px;
margin-left: calc(-1 * var(--bs-gutter-x)* .5);
padding: 30px;
`;

const Overlay = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 40%;
  width: 100%;
  /* background: rgb(255, 255, 255); */
  background: linear-gradient(
    140deg,
    rgba(255, 255, 255, 0) 90%,
    rgba(144, 245, 197, 0.8) 100%
  );
`;