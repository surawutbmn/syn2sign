import React from "react";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn, FaReadme } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

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
  return (
    <Row className="align-items-center">
      <Col>
        <img
          src={profileImg}
          alt=""
          style={{ width: "100%", maxWidth: "25dvw" }}
        />
      </Col>
      <Col xs={7} className="text-start">
        <div style={{ padding: "1rem", border: "solid", borderRadius: "1rem" }}>
          <div className="d-flex">
            <img
              src={`/icon/double-qoute.svg`}
              alt="double quote"
              style={{ maxWidth: "5vw", width: "100%", marginRight:".8rem" }}
              loading="lazy"
            />
            <span>{qoutes}</span>
          </div>
          <hr />
          <div className="icon-link-con">
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="txt-link"
            >
              <span className="icon-crl me-2">
                <LuMail />
              </span>
              <span>{email}</span>
            </a>
          </div>
          <div className="icon-link-con">
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="txt-link"
            >
              <span className="icon-crl me-2">
                <FaLinkedinIn />
              </span>
              <span>{nameEN}</span>
            </a>
          </div>
          <div style={{ padding: "1.8rem 0 .5rem 0rem" }}>
            <Link
              to={`/showcase/creators/${stdID}`}
              className="txt-link"
              style={{
                border: ".1rem solid",
                padding: ".4rem .8rem",
                borderRadius: "100px",
              }}
            >
              <span className="txt-upper">
                <strong>read more</strong>
              </span>
              <span className="ms-2">
                <FaReadme />
              </span>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Creators;
