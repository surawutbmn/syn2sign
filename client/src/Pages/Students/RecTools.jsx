import styled from "styled-components";
import propTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Col, Row } from "react-bootstrap";

function RecTools(props) {
  const { toolArr = [] } = props;

  // Grouping tools by type
  const groupedTools = toolArr.reduce((acc, tool) => {
    if (!acc[tool.type]) {
      acc[tool.type] = [];
    }
    acc[tool.type].push(tool);
    return acc;
  }, {});
//   console.log(toolArr);
  

  const typeTitles = {
    dev: "Tools for Developers",
    design: "Tools for Designers",
  };

  const typeSubtitles = {
    dev: "แนะนำเครื่องมือสำหรับนักพัฒนา",
    design: "แนะนำเครื่องมือสำหรับนักออกแบบ",
  };

  return (
    <>
      <CardBox className="py-4 pt-5">
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: function (index, className) {
              return `<span class="${className} custom-bullet">${
                index + 1
              }</span>`;
            },
          }}
        >
          {Object.keys(groupedTools).map((type, index) => (
            <SwiperSlide key={index}>
              <div className="text-center txt-prim mb-3">
                <h2 className="txt-cap">
                  <strong>{typeTitles[type]}</strong>
                </h2>
                <span className="txt-grey">{typeSubtitles[type]}</span>
              </div>
              <ToolBox>
                <Row xs={1}>
                  {groupedTools[type].map((toolItem) => (
                    <Col
                      key={toolItem.id}
                      className="my-4 d-flex justify-content-center"
                    >
                      <div className="me-4">
                        <img
                          src={`/tools/${toolItem.toolIcon}`}
                          alt={toolItem.toolName}
                        />
                      </div>
                      <ToolText>
                        <h2>
                          <strong>{toolItem.toolName}</strong>
                        </h2>
                        <p>{toolItem.desc}</p>
                      </ToolText>
                    </Col>
                  ))}
                </Row>
              </ToolBox>
            </SwiperSlide>
          ))}
        </Swiper>
        <Pg className="custom-pagination"></Pg>
      </CardBox>
    </>
  );
}

RecTools.propTypes = {
  toolArr: propTypes.arrayOf(
    propTypes.shape({
      toolName: propTypes.string,
      desc: propTypes.string,
      toolIcon: propTypes.string,
      type: propTypes.string,
    })
  ),
};
export default RecTools;

const Pg = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  .custom-bullet {
    width: 35px;
    height: 35px;
    background-color: rgba(255, 255, 255, .5);
    color: var(--color-light);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 8px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .custom-bullet.swiper-pagination-bullet-active {
    background-color: var(--color-secondary);
    color: var(--color-light);
    font-size: 1.3rem;
    font-weight: var(--txt-bold);
  }
`;
const ToolText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  width: 60%;
  p{font-size: 1.5rem;}
`;
const ToolBox = styled.div`
  display: flex;
  align-items: center;
  /* padding: 1rem 4rem 0rem 4rem; */
  img {
    width: 100%;
    max-width: 10dvw;
    border-radius: 2.3rem;
    box-shadow: 2px 4px 10px rgba(5, 186, 100, 0.4);
  }
`;

const CardBox = styled.div`
  position: relative;
  border-radius: 10px;
  background: transparent;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 1.3rem 1.3rem 0 0;
    padding: 0.1rem;
    background: linear-gradient(
      180deg,
      rgba(5, 186, 100, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;
