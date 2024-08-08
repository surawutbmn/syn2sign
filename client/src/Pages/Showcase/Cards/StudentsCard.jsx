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
            src="/icon/read-more.svg"
            alt="readmore icon"
            className="rdm-icon"
          />
          <ReadMoreText className="rdm-text">READ MORE</ReadMoreText>
        </ReadMore>
        <div className="card-std-img">
          <ImgCreator
            src={`/creator_img/${student.profile_img}`}
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
                {student.name_th}{" "}
                {student.nickname_th && `(${student.nickname_th})`}
                <br />
                เจ้าของผลงาน: #{student.project?.id ||
                  student.project[0].id}{" "}
                {student.project?.name_en ||
                  student.project[0].name_en ||
                  "Unknown"}
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
  color: var(--color-light);
  text-align: start;
  position: absolute;
  left: 1rem;
  bottom: 0.1rem;
  z-index: 1;
`;
const Caption = styled.div`
  font-size: 0.7rem;
  margin-bottom: 0.2rem;
`;
const Title = styled.div`
  font-weight: var(--txt-sbold);
  font-size: 0.9rem;
`;
const ReadMoreText = styled.div`
  font-size: 1rem;
  font-weight: var(--txt-bold);
  color: var(--color-light);
  margin-left: -80%;
  opacity: 0;
  transition: margin-left 0.3s ease, opacity 0.3s ease;
`;
const CardOverlay = styled.div`
  transition: all 0.3s ease;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(38, 46, 42, 0.6);
  color: white;
  height: 25%;
  width: 100%;
`;
const ReadMore = styled.div`
  position: absolute;
  top: 20px;
  font-size: 0.8rem;
  color: var(--color-dark);
  right: -70px;
  transition: all 0.3s ease;
  z-index: 1;
  align-items: center;
  white-space: nowrap;
  display: flex;
`;
const ReadMoreIcon = styled.img`
  filter: brightness(0) saturate(100%) invert(1%) sepia(12%) saturate(6%)
    hue-rotate(314deg) brightness(93%) contrast(88%);
  opacity: 0.8;
  transition: all 0.3s ease;
  max-width: 4rem;
`;
const ImgCreator = styled.img`
  width: 100%;
`;
const CardStudents = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  &:hover .rdm-icon {
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
  }
`;
