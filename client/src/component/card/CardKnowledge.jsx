import styled from "styled-components";
import ArrowButton from "../Button/ArrowButton";
import propTypes from "prop-types";

function CardKnowledge(props) {
  return (
    <>
      <CardBox>
        <Overlay></Overlay>
        <div>
          <ImagePreview src={props.img || "/s2s-logo/fb-profile.png"} />
        </div>
        <BoxContent>
          <div className="card-body text-start">
            <Title>
              <h4 className="card-exh-title">
                {props.title ||
                  "Starting Up • 10 Components for a Digital Platform"}
              </h4>
            </Title>
            <BoxText
              className="txt-dark mb-5"
              dangerouslySetInnerHTML={{
                __html:
                  props.desc ||
                  `นิทรรศการความรู้ “10 ชุดประกอบสร้างดิจิทัลแพลตฟอร์ม” ที่รวบรวม
              องค์ความรู้ทั้งในมุมมองด้านการออกแบบร่วมกับด้านพัฒนาโค้ดดิ้ง
              พร้อมทั้งกรณีศึกษาที่เป็นประโยชน์อีกมากมาย`,
              }}
            />
          </div>
          <ArrowButton
            text={`${props.btn}`}
            text2={`${props.btn2}`}
            style={`txt-head4`}
            link={props.link}
            icon={props.btnIcon}
          />
        </BoxContent>
      </CardBox>
    </>
  );
}

CardKnowledge.propTypes = {
  img: propTypes.string,
  title: propTypes.string,
  desc: propTypes.string,
  style: propTypes.string,
  link: propTypes.string,
  btn: propTypes.string,
  btn2: propTypes.string,
  btnIcon: propTypes.string,
};

export default CardKnowledge;

const CardBox = styled.div`
  width: 100%;
  height: auto;
  min-height: 700px;
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* &:hover button {
    color: var(--color-primary);
    border: solid 0.05rem var(--color-primary);
  } */
  @media (max-width: 991.98px) {
    min-height: 600px;
  }
  @media (max-width: 767.98px) {
    min-height: 500px;
  }
`;
const BoxContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.3rem;
  padding-top: 0;
  position: relative;
  flex-grow: 1;
`;
const Title = styled.div`
  @media (max-width: 767.98px) {
    font-size: 1.3rem;
  }
`;
const BoxText = styled.div`
  flex-grow: 1;
  @media (max-width: 767.98px) {
    font-size: 0.8rem;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 40px;
  padding: 1.3rem;
`;

const Overlay = styled.div`
  z-index: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 40%;
  width: 100%;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    140deg,
    rgba(255, 255, 255, 0) 90%,
    rgba(144, 245, 197, 0.8) 100%
  );
`;