import styled from "styled-components";
import CircleLinkBtn from "../../component/Button/CircleLinkBtn";
import propTypes from "prop-types";
import { Container } from "react-bootstrap";

function CreatorHeadSection(props) {
  const { student = {}, project = {} } = props;

  return (
    <Container>
      <div className="d-flex">
        <div className="d-flex flex-column col-7 pe-3">
          <div className="mb-5 d-flex flex-column align-items-start">
            <LineHead />
            <h1 className="txt-second txt-upper">
              <strong>Get to know {student.nickname_en}</strong>
            </h1>
            <div className="d-flex align-items-start">
              {/* <img
                src={`/icon/prj/${project.icon}`}
                alt="project icon"
                style={{ maxWidth: "5vw", width: "100%" }}
                loading="lazy"
              /> */}
              <h3 className="txt-cap">Maker of {project.name_en}</h3>
            </div>
          </div>
          <QouteBox className=" ms-auto mb-5 position-relative">
            <div className="d-flex align-items-baseline quotecon">
              <img
                src={`/icon/double-qoute.svg`}
                alt="double qoute"
                style={{ maxWidth: "5vw", width: "100%" }}
                loading="lazy"
              />
              <h3 className="ms-3 text-start">{student.qoutes}</h3>
            </div>
          </QouteBox>

          <div className="text-start mt-4">
            <h3 className="txt-second">
              <strong>Contact to {student.nickname_en}</strong>
            </h3>
            <div className="mt-3">
              <CircleLinkBtn
                txt={student.email}
                link={`mailto:${student.email}`}
                icon={"mail"}
                bg={"second"}
              />
            </div>
            <div className="mt-2">
              <CircleLinkBtn
                txt={student.name_en}
                link={student.linkin}
                icon={"linkedin"}
                bg={"second"}
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-column align-items-end col-5 ps-3">
          <div className="text-start">
            <img
              loading="lazy"
              src={`/creator_img/profile/${student.profile_img}`}
              alt="creator profile"
              style={{
                maxWidth: "35vw",
                width: "100%",
                borderRadius: "1.2rem",
              }}
            />
            <div className="mt-4">
              <h4 className="txt-cap">
                {student.name_en} ({student.nickname_en})
              </h4>
              <h6>
                {student.name_th}({student.nickname_th})
              </h6>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

CreatorHeadSection.propTypes = {
  student: propTypes.shape({
    id: propTypes.number,
    nickname_en: propTypes.string,
    name_en: propTypes.string,
    qoutes: propTypes.string,
    nickname_th: propTypes.string,
    name_th: propTypes.string,
    profile_img: propTypes.string,
    email: propTypes.string,
    linkin: propTypes.string,
  }).isRequired,
  project: propTypes.shape({
    icon: propTypes.string,
    name_en: propTypes.string,
  }).isRequired,
};
export default CreatorHeadSection;

const QouteBox = styled.div`
  width: 100%;
  height:100%;
  .quotecon{position: absolute; top:0; right:0; width:80%;}
`;
const LineHead = styled.hr`
  width: 15dvw;
  border: 0.3rem solid var(--color-secondary);
  opacity: 1;
`;
