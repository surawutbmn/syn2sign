import styled from "styled-components";
import CircleLinkBtn from "../../component/Button/CircleLinkBtn";
import propTypes from "prop-types";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function CreatorHeadSection(props) {
  const { student = {}, project = {} } = props;

  return (
    <>
      <Container>
        <BackBtn className="text-start link-txt ">
          <Link to={`/showcase#creator`}>
            <FaArrowLeft className="me-2" size={20} />
            <strong>All Creators</strong>
          </Link>
        </BackBtn>
        <div className="text-start d-flex d-md-none justify-content-center flex-column">
          <ProfileImg>
            <img
              loading="lazy"
              src={`${import.meta.env.VITE_BASE_URL}images/creator_img/profile/${student.profile_img}`}
              alt="creator profile"
            />
          </ProfileImg>
          <div className="mt-4">
            <h4 className="txt-upper">
              {student.name_en} ({student.nickname_en})
            </h4>
            <h6>
              {student.name_th}({student.nickname_th})
            </h6>
          </div>
        </div>
        <DetailCon>
          <div className="d-flex w-100 flex-column pe-3">
            <GreetBox>
              <LineHead />
              <Heading className="txt-prim txt-upper">
                <strong>Get to know {student.nickname_en}</strong>
              </Heading>
              <ProjName className="d-flex align-items-start">
                <h3 className="txt-cap">
                  Maker of{" "}
                  <Link
                    to={`/showcase/projects/${project.project_id}`}
                    className="card-link txt-light"
                  >
                    <u> {project.name_en}</u>
                  </Link>
                </h3>
              </ProjName>
            </GreetBox>
            <QouteBox className="my-4">
              <QouteBoxCon>
                <img
                  src={`${import.meta.env.VITE_BASE_URL}icon/double-qoute.svg`}
                  alt="double qoute"
                  loading="lazy"
                />
                <h3 className="ms-3 text-start">{student.qoutes}</h3>
              </QouteBoxCon>
            </QouteBox>

            <ContactBox className="text-start mt-4">
              <h4 className="txt-prim txt-upper">Contact</h4>

              <BtnBox>
                <CircleLinkBtn
                  txt={student.name_en}
                  link={student.linkin}
                  icon={"linkedin"}
                  bg={"second"}
                />
              </BtnBox>
              <BtnBox>
                <CircleLinkBtn
                  txt={student.email}
                  link={`mailto:${student.email}`}
                  icon={"mail"}
                  bg={"second"}
                />
              </BtnBox>
            </ContactBox>
          </div>

          <div className="d-none d-md-flex flex-column align-items-end col-5 ps-3">
            <div className="text-start">
              <ProfileImg>
                <img
                  loading="lazy"
                  src={`${import.meta.env.VITE_BASE_URL}images/creator_img/profile/${student.profile_img}`}
                  alt="creator profile"
                />
              </ProfileImg>
              <CreatorBox className="mt-4">
                <h4 className="txt-upper">
                  {student.name_en} ({student.nickname_en})
                </h4>
                <h6>
                  {student.name_th}({student.nickname_th})
                </h6>
              </CreatorBox>
            </div>
          </div>
        </DetailCon>
      </Container>
    </>
  );
}

CreatorHeadSection.propTypes = {
  student: propTypes.shape({
    id: propTypes.string,
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

const BtnBox = styled.div`
  margin-top: 1.3rem;
  @media (max-width: 991.98px) {
    margin-top: .5rem;
  }
`;
const CreatorBox = styled.div`
  @media (max-width: 991.98px) {
    h4 {
      font-size: 1em;
    }
    h6 {
      font-size: 0.8em;
    }
  }
`;
const ContactBox = styled.div`
  text-align: start;
  margin-top: 2rem;
  @media (max-width: 991.98px) {
    h4 {
      font-size: 1em;
    }
    h5 {
      font-size: .8em;
    }
  }
`;
const GreetBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  @media (max-width: 575.98px) {
    margin: 0rem 0;
  }
`;
const DetailCon = styled.div`
  display: flex; justify-content: space-between;
`;
const Heading = styled.h1`
  @media (max-width: 991.98px) {
    font-size: 1.3em;
  }
  @media (max-width: 575.98px) {
    font-size: 1.5em;
  }
`;

const BackBtn = styled.h3`
  a {
    &:hover {
      color: var(--color-primary);
    }
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-light);
    transition: all 300ms ease;
  }
`;
const ProfileImg = styled.div`
  border-radius: 1.2em;
  overflow: hidden;
  width: 100%;
  img {
    width: 100%;
  }
  @media (max-width: 575.98px) {
    margin-top: 1.5rem;
  }
`;
const ProjName = styled.div`
  a {
    &:hover {
      color: var(--color-primary);
    }
  }
  a {
    transition: all 300ms ease;
  }
  @media (max-width: 991.98px) {
    h3 {
      font-size: 0.8em;
    }
  }
  @media (max-width: 575.98px) {
    h3 {
      font-size: 1em;
    }
  }
`;
const QouteBoxCon = styled.div`
  width: 75%;
  margin-left: auto;
  display: flex;
  align-items: baseline;
  img {
    width: 100%;
    max-width: 4em;
  }
  @media (max-width: 991.98px) {
    width: 85%;
    img {
      max-width: 2.5em;
    }
    h3 {
      font-size: 0.8em;
    }
  }
  @media (max-width: 575.98px) {
    width: 100%;
    img {
      max-width: 3em;
    }
  }
`;
const QouteBox = styled.div`
  width: 100%;
  height: 100%;
`;
const LineHead = styled.hr`
  width: 15dvw;
  border: 0.3rem solid var(--color-primary);
  opacity: 1;
  @media (max-width: 575.98px) {
    width: 40dvw;
  }
`;
