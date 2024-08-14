import { Col, Row } from "react-bootstrap";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import styled from "styled-components";
import propTypes from "prop-types";

function InterviewCard(props) {
  const { question = [], std } = props;
  return (
    <>
      {question.map((question, index) => (
        <CardBox key={index} className="mb-5">
          <Overlay />
          <Row className="justify-content-between position-relative">
            <Col xs={12} md={6} >
              <PreviewImg
                src={`/images/creator_img/interview/${question.img}`}
                alt="interview image"
              />
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column">
              <CardText>
                <div className="text-start">
                  <Ques>
                    <strong>Q{question.id}:</strong>
                  </Ques>
                  <Title>
                    <strong>&ldquo;{question.title1}</strong>
                  </Title>
                </div>
                <div className="text-end">
                  <Title2>{question.title2}&rdquo;</Title2>
                </div>
              </CardText>
              <LinkBtn
                href={`https://www.instagram.com/reel/${question.ig}`}
                target="_blank"
              >
                <Icon className="crl-icon me-2">
                  <FaInstagram />
                </Icon>
                <span>
                  บทสัมภาษณ์ของ{std} (start: {question.time})
                </span>
              </LinkBtn>
              <LinkBtn
                href={`https://www.youtube.com/watch?v=${question.yt}`}
                target="_blank"
              >
                <Icon className="crl-icon me-2">
                  <FaYoutube />
                </Icon>
                <span>
                  บทสัมภาษณ์ของ{std} (start: {question.time})
                </span>
              </LinkBtn>
            </Col>
          </Row>
        </CardBox>
      ))}
    </>
  );
}

InterviewCard.propTypes = {
  std: propTypes.string.isRequired,
  question: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      img: propTypes.string.isRequired,
      ig: propTypes.string.isRequired,
      yt: propTypes.string.isRequired,
      time: propTypes.string.isRequired,
      title1: propTypes.string.isRequired,
      title2: propTypes.string.isRequired,
    })
  ).isRequired,
};
export default InterviewCard;

const CardText = styled.div`
  flex-grow: 1;
  @media (max-width: 767.98px) {
   white-space: nowrap;
  }
`;
const CardBox = styled.div`
  position: relative;
  overflow: hidden;
  background-color: var(--color-light);
  padding: 1.8rem;
  color: var(--color-primary);
  border-radius: 1.3rem;
  @media (max-width: 991.98px) {
    padding: 1rem;
  }
  @media (max-width: 767.98px) {
    padding: 1rem;
  }
`;
const Ques = styled.h1`
  font-size: 2.4rem;
  @media (max-width: 991.98px) {
    font-size: calc(1rem + 0.6vw);
  }
  @media (max-width: 767.98px) {
    margin-top: 1rem;
    font-size: calc(1.2rem + 0.6vw);
  }
`;
const Title2 = styled.span`
  font-size: calc(1.3rem + 0.6vw);
  @media (max-width: 991.98px) {
    font-size: calc(.7rem + 0.6vw);
  }
  @media (max-width: 767.98px) {
    font-size: calc(1rem + 0.6vw);
  }
`;
const Title = styled.span`
  font-size: 3.3rem;
  @media (max-width: 991.98px) {
    font-size: calc(1.8rem + 0.6vw);
  }
  @media (max-width: 767.98px) {
    font-size: calc(2rem + 0.6vw);
  }
`;
const PreviewImg = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 1rem;
`;

const Icon = styled.span`
  background-color: var(--color-dark);
  color: var(--color-light);
  font-size: 1.3rem;
  padding: 0.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;
  @media (max-width: 991.98px) {
    padding: .4rem;
  }
  @media (max-width: 767.98px) {
    padding: 0.3rem;
  }
`;
const LinkBtn = styled.a`
  border: 0.1rem solid var(--color-grey);
  padding: 0.3rem;
  margin-top: 1rem;
  text-align: start;
  border-radius: 10rem;
  width: 80%;
  align-items: center;
  display: flex;
  color: var(--color-dark);
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    color: var(--color-primary);
    border-color: var(--color-primary);
  }
  &:hover .crl-icon {
    background-color: var(--color-primary);
  }
  @media (max-width: 1199.98px) {
    /* width: 100%; */
    margin-top: .4rem;
    padding: 0.1rem;
    span {
      font-size: 0.8em;
    }
  }
  @media (max-width: 991.98px) {
    /* width: 100%; */
    margin-top: .4rem;
    padding: 0.1rem;
    span {
      font-size: 0.6em;
    }
  }
  @media (max-width: 767.98px) {
    /* width: 100%; */
    span {
      font-size: 0.8em;
    }
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
