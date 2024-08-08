import { Col, Row } from "react-bootstrap";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import styled from "styled-components";
import PropTypes from "prop-types";

function InterviewCard(props) {
  return (
    <CardBox>
      <Overlay />
      <Row className="justify-content-around position-relative">
        <Col xs={6}>
          <PreviewImg src={`/creator_img/interview/${props.img}`} alt="interview image" />
        </Col>
        <Col xs={5} className="d-flex flex-column">
          <CardText>
            <div className="text-start">
              <h1>
                <strong>Q{props.id}:</strong>
              </h1>
              <Title>
                <strong>{props.title1}</strong>
              </Title>
            </div>
            <div className="text-end">
              <h3>{props.title2}</h3>
            </div>
          </CardText>
          <LinkBtn
            href={`https://www.instagram.com/reel/${props.ig}`}
            target="_blank"
          >
            <Icon className="crl-icon me-2">
              <FaInstagram />
            </Icon>
            <span>
              บทสัมภาษณ์ของ{props.std} (start: {props.time})
            </span>
          </LinkBtn>
          <LinkBtn
            href={`https://www.instagram.com/reel/${props.yt}`}
            target="_blank"
          >
            <Icon className="crl-icon me-2">
              <FaYoutube />
            </Icon>
            <span>
              บทสัมภาษณ์ของ{props.std} (time: {props.time})
            </span>
          </LinkBtn>
        </Col>
      </Row>
    </CardBox>
  );
}

InterviewCard.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  std: PropTypes.string.isRequired,
  ig: PropTypes.string.isRequired,
  yt: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};
export default InterviewCard;

const CardText = styled.div`
  flex-grow: 1;
`;
const CardBox = styled.div`
  position: relative;
  overflow: hidden;
  background-color: var(--color-light);
  padding: 1.8rem 0.3rem;
  color: var(--color-secondary);
  border-radius: 1.3rem;
`;
const Title = styled.span`
  font-size: 3.3rem;
`;
const PreviewImg = styled.img`
  width: 100%;
`;

const Icon = styled.span`
  background-color: var(--color-dark);
  color: var(--color-light);
  font-size: 1.3rem;
  padding: 0.01rem 0.4rem;
  border-radius: 10rem;
  transition: all 0.3s ease;
`;
const LinkBtn = styled.a`
  border: 0.1rem solid var(--color-grey);
  padding: 0.3rem;
  margin-top: 1rem;
  text-align: start;
  border-radius: 10rem;
  width: 80%;
  color: var(--color-dark);
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-secondary);
    border-color: var(--color-secondary);
  }
  &:hover .crl-icon {
    background-color: var(--color-secondary);
  }
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
