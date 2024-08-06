import styled from "styled-components";
import propTypes from "prop-types";
import ArrowButton from "../Button/ArrowButton";
import { FaGlobe, FaPlayCircle } from "react-icons/fa";
import { FaMicrochip } from "react-icons/fa6";
import { MdOutlineCategory  } from "react-icons/md";
const CardIdeaConcept = (props) => {
  // const Line = props.href ? LineImage : 'div';
  return (
    <div className="d-flex row text-start" style={{marginTop: "-60px"}}>
        <div className="col-4">
            <div className="col-4"><DeviceImage src="/showcase/threeTop/Project/CPL01/Concept_Device.png"/></div>
            <div className="col-4"><FaMicrochip/>
            TECHNOLOGY:</div>
            <div className="col-4"><MdOutlineCategory />
            CATEGORY: </div>
        </div>
        <div className="col-8">
            <div className="txt-upper txt-second txt-head2">connect IDEA w/</div>
            <div className="txt-upper txt-head2">EVAL Balance</div>
            <div className="txt-body2">การพลัดตกหกล้มเป็นสาเหตุการตายอันดับสองในกลุ่มของการบาดเจ็บโดยไม่ได้ตั้งใจ โดย 50% ของผู้เสียชีวิตจากการพลัดตกหกล้มในประเทศไทยเป็นผู้สูงอายุ ซึ่งเป็นปัญหาด้านการเสื่อมถอย ของร่างกาย ทำให้ร่างกายทรงตัวไม่ดีพอ ดังนั้น EVAL BALANCE (อีวาล บาลานซ์) จึงเป็นตัวช่วย ในการประเมินสมรรถภาพทางกายและเป็นตัวช่วยในการดูแลสุขภาพด้วยการออกกำลังกาย เพื่อลด ความเสี่ยงต่อการหกล้มในผู้สูงอายุ และเสริมสร้างความแข็งแรงของกล้ามเนื้อ</div>
            <Line className="txt-body3 mt-3"><span className="">Among accidental injuries, falls rank as the second most common cause of death; in Thailand, 50% of fall fatalities occur in older adults. This is an issue with the body's degradation, which makes the body insufficiently stable. Thus, EVAL BALANCE is a support. Assess physical fitness and help seniors maintain their health through exercise to lower their chance of falling. And build up muscles.</span></Line>

        </div>
    </div>
  );
};


export default CardIdeaConcept;

const DeviceImage = styled.img` 
  width: 100%;
  height: 100%;
`
const Line = styled.div`
  position: relative;
  padding-left: 25px; 
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px; /* Adjust the width of the gradient border */
    height: 100%;
    background: linear-gradient(to bottom, rgb(0, 0, 0),rgb(5, 186, 100), rgb(0, 0, 0)); /* Adjust gradient colors as needed */
  }
`;
