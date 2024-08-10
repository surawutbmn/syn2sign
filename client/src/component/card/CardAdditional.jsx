import styled from "styled-components";
import propTypes from "prop-types";
import ArrowButton from "../Button/ArrowButton";
const CardAdditional = (props) => {
  // const Line = props.href ? LineImage : 'div';
  return (
    <div>
      <CardBox>
        <Overlay></Overlay>
        <div className="col-5 me-4">
          <ImagePreview src={props.img || "/s2s-logo/fb-profile.png"} />
        </div>
        <BoxContent>
          <div className="txt-head2 txt-second text-start">
            {props.title ||
              "Youtube playlist • Senior Project Showreel, Academic Year 2023"}
          </div>
          <BoxText
            className="txt-body1 text-start mt-3 txt-dark"
            dangerouslySetInnerHTML={{
              __html:
                props.desc ||
                `เราได้จัดทำ Youtube Playlist รวบรวมคลิป Showreel ของแต่ละผลงาน<br />จุลนิพนธ์ ประจำปีการศึกษา 2566 เพื่อให้ทุกคนเข้าถึงได้ง่ายขึ้น`,
            }}
          />
          <ArrowButton
            text={`${props.btn}`}
            link={props.link}
            style={`txt-head4`}
            icon={props.btnIcon}
          />
        </BoxContent>
      </CardBox>
    </div>
  );
};

CardAdditional.propTypes = {
  img: propTypes.string,
  title: propTypes.string,
  desc: propTypes.string,
  style: propTypes.string,
  link: propTypes.string,
  btn: propTypes.string,
  btnIcon: propTypes.string,
};
export default CardAdditional;


const CardBox = styled.div`
  width: 100%;
  /* width: 1130px; */
  height: auto;
  /* height: 250px; */
  padding: 2rem;
  background: white;
  border-radius:1.3rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  &:hover button {
    color: var(--color-secondary);
    border: solid 0.05rem var(--color-secondary);
  }
`;
const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 30px 0; */
  position: relative;
  flex-grow: 1;
`;
const BoxText = styled.div`
  flex-grow: 1;
`;

const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
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