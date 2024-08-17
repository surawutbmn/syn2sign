import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const StudentCard = ({ student }) => (
  <Col>
    <CardStudents>
      <Link to={`/showcase/creators/${student.std_id}`} className="card-link">
        <ReadMore className="read-more">
          <ReadMoreIcon
            src= {import.meta.env.VITE_BASE_URL+"icon/read-more.svg"}
            alt="readmore icon"
            className="rdm-icon"
            
          />
          <ReadMoreText className="rdm-text">SEE MORE</ReadMoreText>
        </ReadMore>
        <div className="card-std-img">
          <ImgCreator
            src={`${import.meta.env.VITE_BASE_URL}images/creator_img/profile/${student.profile_img}`}
            loading="lazy"
            alt="creator profile"
          />
          <CardOverlay className="std-card-overlay">
            <CardText className="card-std-txt">
              <Title>
                {student.name_en}{" "}
                {student.nickname_en && `(${student.nickname_en})`}
              </Title>
              <Caption>
                {/* <span>{student.email}</span> */}
                {/* {student.name_th}{" "}
                {student.nickname_th && `(${student.nickname_th})`} */}
                {/* <br /> */}
                เจ้าของผลงาน: 
                <span className="">
                #{student.project?.id ||
                  student.project[0].id}{" "}
                {student.project?.name_en ||
                  student.project[0].name_en ||
                  "Unknown"}
                  </span>
              </Caption>
            </CardText>
          </CardOverlay>
        </div>
      </Link>
    </CardStudents>
  </Col>
);

StudentCard.propTypes = {
  student: PropTypes.shape({
    id: PropTypes.string.isRequired,
    std_id: PropTypes.string.isRequired,
    name_en: PropTypes.string.isRequired,
    name_th: PropTypes.string,
    email: PropTypes.string,
    nickname_en: PropTypes.string,
    nickname_th: PropTypes.string,
    profile_img: PropTypes.string.isRequired,
    project: PropTypes.shape({
      id: PropTypes.string,
      name_en: PropTypes.string,
    }),
  }).isRequired,
};

export default StudentCard;

const CardText = styled.div`
  transition: all 0.3s ease;
  color: var(--color-dark);
  text-align: start;
  position: absolute;
  left: 1rem;
  bottom: 0.1rem;
  z-index: 1;
  @media (max-width: 767.98px) {
    left: 0.3rem;
  }
  @media (max-width: 1199.98px) {
    bottom: 0.3rem;
  }
  @media (max-width: 991.98px) {
    left: 0.5rem;
  }
  @media (max-width: 575.98px) {
    left: 0.3rem;
  }
  @media (max-width: 374.98px) {
    left: 0.3rem;
    bottom: 0.1rem;
  }
`;
const Caption = styled.div`
  font-size: 0.7rem;
  @media (max-width: 1439.98px) {
    font-size: 0.8rem;
  }
  @media (max-width: 1359.98px) {
    font-size: 0.6rem;
  }
  margin-bottom: 0.2rem;
  @media (max-width: 1199.98px) {
    font-size: 0.65rem;
  }
  @media (max-width: 991.98px) {
    font-size: 0.5rem;
  }
  @media (max-width: 575.98px) {
    font-size: 0.46rem;
  }
  @media (max-width: 374.98px) {
    font-size: 0.45rem;
  }
`;
const Title = styled.div`
  font-weight: var(--txt-sbold);
  font-size: 0.9rem;
  @media (max-width: 1439.98px) {
    font-size: 0.75rem;
  }
  @media (max-width: 1359.98px) {
    font-size: 0.65rem;
  }
  @media (max-width: 1199.98px) {
    font-size: 0.74rem;
  }
  @media (max-width: 991.98px) {
    font-size: 0.65rem;
  }
  @media (max-width: 767.98px) {
    font-size: 0.56rem;
  }
  @media (max-width: 575.98px) {
    font-size: 0.56rem;
  }
  @media (max-width: 419.98px) {
    font-size: 0.47rem;
  }
`;
const ReadMoreText = styled.div`
  font-size: 1rem;
  font-weight: var(--txt-bold);
  color: var(--color-light);
  margin-left: -60%;
  opacity: 0;
  transition: margin-left 0.3s ease, opacity 0.3s ease;
`;
const CardOverlay = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  bottom: 0;
  left: 0;
  /* background: rgba(38, 46, 42, 0.6); */
  color: white;
  height: 25%;
  width: 100%;
  @media (max-width: 1439.98px) {
    height: 30%;
  }
  @media (max-width: 1359.98px) {
    height: 25%;
  }
  @media (max-width: 991.98px) {
    height: 28%;
  }
  @media (max-width: 767.98px) {
    height: 35%;
  }
  @media (max-width: 575.98px) {
    height: 30%;
  }
  @media (max-width: 424.98px) {
    height: 33%;
  }
  @media (max-width: 374.98px) {
    height: 50%;
  }
`;
const ReadMore = styled.div`
  position: absolute;
  top: 20px;
  font-size: 0.8rem;
  color: var(--color-dark);
  right: 20px;
  transition: all 0.3s ease;
  z-index: 1;
  align-items: center;
  white-space: nowrap;
  display: flex;
  @media (max-width: 991.98px) {
    margin-left: -70px;
    top: 20px;
    right: 20px;
  }
  @media (max-width: 575.98px) {
    margin-left: -60px;
    top: 20px;
    right: 20px;
  }
  @media (max-width: 374.98px) {
    margin-left: -30px;
    top: 20px;
    right: 20px;
  }
`;
const ReadMoreIcon = styled.img`
  filter: brightness(0) saturate(100%) invert(55%) sepia(24%) saturate(7224%) hue-rotate(118deg) brightness(96%) contrast(96%);
  opacity: 0.8;
  transition: all 0.3s ease;
  max-width: 2.5rem;
  @media (max-width: 767.98px) {
    max-width: 2rem;
  }
  @media (max-width: 565.98px) {
    max-width: 1.8rem;
  }
  @media (max-width: 374.98px) {
    max-width: 1.4rem;
  }
`;
const ImgCreator = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
const CardStudents = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  height: auto;
  transition: transform 0.3s cubic-bezier(0.37, -0.59, 0.71, 1.44);

  /* &:hover .rdm-icon {
    filter: brightness(0) saturate(100%) invert(100%) sepia(72%) saturate(79%)
      hue-rotate(308deg) brightness(113%) contrast(92%);
    opacity: 0.8;
    transform: scale(1.1);
  }
  &:hover .read-more {
    top: 55%;
    right: 55%;
    transform: translate(55%, -55%);
  }
  &:hover .rdm-text {
    margin-left: 10%;
    opacity: 1;
  }
  &:hover .card-std-txt {
    opacity: 0;
  }
  &:hover .std-card-overlay {
    height: 100%;
  } */

    &:hover  {
      transform: scale3d(1.02, 1.02, 1.02);
    } 

  @media (max-width: 767.98px) {
    border-radius: 0.7rem;
  }
`;
