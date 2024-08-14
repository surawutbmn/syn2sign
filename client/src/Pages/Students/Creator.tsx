import React, { useEffect } from "react";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn, FaReadme } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import CircleLinkBtn from "../../component/Button/CircleLinkBtn";

interface CreatorsProps {
  stdID: number;
  nameEN: string;
  nicknameEN: string;
  email: string;
  linkedin: string;
  qoutes: string;
  profileImg: string;
}

const Creators: React.FC<CreatorsProps> = ({
  stdID,
  nameEN,
  nicknameEN,
  email,
  linkedin,
  qoutes,
  profileImg,
}) => {
  const navigate = useNavigate();
  const { stdID: paramStdID } = useParams();

  useEffect(() => {
    if (paramStdID === stdID.toString()) {
      window.scrollTo(0, 0);
    }
  }, [paramStdID, stdID]);

  const handleStudentClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = `/showcase/creators/${stdID}`;
  };
  return (
    <CardBox>
      <ImgBox className="p-0 text-start">
        <ImgCreator
          src={
            `/images/creator_img/card/${profileImg}` ||
            `/images/creator_img/card/073-card.webp`
          }
          alt=""
        />
      </ImgBox>
      <DetailBox>
        <Title>
          <Heading>Get to know {nicknameEN}</Heading>
          <SubHead>Collaborative Member</SubHead>
        </Title>
        <QouteBox>
          <DoubleQoute
            src={`/icon/double-qoute.svg`}
            alt="double quote"
            loading="lazy"
            className="me-4"
          />
          <h4>{qoutes}</h4>
        </QouteBox>
        <BtnBox>
          <Link
            to={`/showcase/creators/${stdID}`}
            className="txt-link"
            onClick={handleStudentClick}
          >
            <ReadMore>
              <span className="txt-upper">
                <strong>see more</strong>
              </span>
              <span className="ms-3">
                <FaReadme />
              </span>
            </ReadMore>
          </Link>
        </BtnBox>
      </DetailBox>
    </CardBox>
  );
};

export default Creators;

const QouteBox = styled.div`display: flex; align-items: baseline; text-align: start;`
const Title = styled.div`
  margin-bottom: 0rem;
  text-align: start;
  @media (max-width: 575.98px) {
    margin-bottom: .3em;
  }
`;

const CardBox = styled.div`
  background-color: var(--color-light);
  padding: 0rem;
  border-radius: 1rem;
  display: flex;
  overflow: hidden;
  @media (max-width: 575.98px) {
    flex-direction: column;
    width: 78%;
  }
  @media (max-width: 575.98px) {
    width: 75%;
  }
  @media (max-width: 435.98px) {
    width: 75%;
  }
  @media (max-width: 376.98px) {
    width: 76%;
  }
`;
const SubHead = styled.span`
  color: var(--color-dark);
  text-transform: capitalize;
  font-size: calc(0.6em + 0.9vw);
  @media (max-width: 575.98px) {
    font-size: calc(0.5em + 0.9vw);
  }
`;
const Heading = styled.h2`
  color: var(--color-secondary);
  text-transform: uppercase;
  font-weight: var(--txt-bold);
  @media (max-width: 991.98px) {
    font-size: calc(1em + 0.9vw);
  }
  @media (max-width: 575.98px) {
    font-size: calc(.8em + 0.9vw);
    margin-bottom: 0;
  }
`;
const ImgBox = styled.div`
  width: 40em;
  object-fit: contain;
  @media (max-width: 991.98px) {
    width: 28em;
  }
  @media (max-width: 575.98px) {
    width: 25em;
  }
  @media (max-width: 435.98px) {
    width: 18em;
  }
  @media (max-width: 426.98px) {
    width: 19em;
  }
  @media (max-width: 376.98px) {
    width: 16.5em;
  }
`;
const ImgCreator = styled.img`
  width: 100%;
`;
const DoubleQoute = styled.img`
  max-width: 4vw;
  width: 100%;
`;
const DetailBox = styled.div`
  color: var(--color-dark);
  padding: 2em 4rem;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  h4 {
    width: 90%;
  }
  @media (max-width: 991.98px) {
    padding: 1.3em 3em;
    h4 {
      font-size: calc(0.5em + 0.9vw);
    }
  }
  @media (max-width: 575.98px) {
    padding: 1em;
    h4 {
      font-size: calc(0.5em + 0.9vw);
    }
  }
`;
const BtnBox = styled.div`
  padding: 1.8rem 0 0.5rem 0rem;
  @media (max-width: 991.98px) {
    padding-top: .5em;
  }
`;
const ReadMore = styled.span`
  border: 0.1rem solid var(--color-grey);
  padding: 0.4rem 1.3rem;
  border-radius: 100px;
  color: var(--color-dark);
  /* margin-top: 3rem; */
  transition: all 0.3s ease;
  &:hover {
    border-color: var(--color-primary);
    color: var(--color-light);
    background-color: var(--color-primary);
  }
  @media (max-width: 991.98px) {
      font-size: calc(0.4em + 0.9vw);
  }
`;
