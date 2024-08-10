import React, { useEffect } from "react";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn, FaReadme } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import CircleLinkBtn from "../../../component/Button/CircleLinkBtn";

interface CreatorsProps {
  stdID: number;
  nameEN: string;
  email: string;
  linkedin: string;
  qoutes: string;
  profileImg: string;
}

const Creators: React.FC<CreatorsProps> = ({
  stdID,
  nameEN,
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

  const handleStudentClick = () => {
    navigate(`/showcase/creators/${stdID}`);
  };
  return (
    <Row className="align-items-center">
      <Col >
        <img
          src={profileImg}
          alt=""
          style={{ width: "100%", maxWidth: "30dvw" }}
        />
      </Col>
      <Col xs={12} md={7} className="text-start">
        <DetailBox>
          <div className="d-flex align-items-baseline">
            <DoubleQoute
              src={`/icon/double-qoute.svg`}
              alt="double quote"
              loading="lazy"
              className="me-4"
            />
            <h5>{qoutes}</h5>
          </div>
          <Boxline />
          <div className="mt-3">
            <CircleLinkBtn
              txt={email}
              link={`mailto:${email}`}
              icon={"mail"}
              bg={"light"}
            />
          </div>
          <div className="mt-2">
            <CircleLinkBtn
              txt={nameEN}
              link={linkedin}
              icon={"linkedin"}
              bg={"light"}
            />
          </div>

          <BtnBox>
            <Link
              to={`/showcase/creators/${stdID}`}
              className="txt-link"
              onClick={handleStudentClick}
            >
              <ReadMore>
                <span className="txt-upper">
                  <strong>read more</strong>
                </span>
                <span className="ms-2">
                  <FaReadme />
                </span>
              </ReadMore>
            </Link>
          </BtnBox>
        </DetailBox>
      </Col>
    </Row>
  );
};

export default Creators;

const Boxline = styled.hr`border: .07rem solid var(--color-grey); opacity: 1; `
const DoubleQoute = styled.img`
  max-width: 4vw;
  width: 100%;
`;
const DetailBox = styled.div`
  padding: 2rem;
  border: .08rem solid var(--color-grey);
  border-radius: 1rem;
`;
const BtnBox = styled.div`
  padding: 1.8rem 0 0.5rem 0rem;
`;
const ReadMore = styled.span`
  border: 0.1rem solid;
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  transition: all 0.3s ease;
  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
  }
`;
