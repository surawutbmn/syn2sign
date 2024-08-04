import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";
import { Col, Row } from "react-bootstrap";
import "../../Pages/StayTune/staytuneCustome.css";


const CardPastExhibit = (props) => {
  const Link = props.href ? LinkExhibition : "div";
  return (
    <Link className="" href={props.href || "#"} target="_blank">
      <Row className="justify-content-between hover-card-overlay">
        <Col xs={3} className="p-0">
          <PosterExhibition src={props.poster} />
        </Col>

        <Col xs={8} className="text-start">
          <h2 className="txt-head2 txt-bold">
            <span className=" txt-dark-outline">20</span>
            <span className="sub-year">{props.year}</span>
          </h2>

          <div className="d-flex align-items-center gap-4  my-4">
            <LogoExhibition src={props.logo} />
            <div className="txt-head3 txt-bold">{props.name}</div>
          </div>
          <div className="txt-body2 txt-grey">{props.description}</div>
        </Col>
      </Row>
    </Link>
  );
};

CardPastExhibit.propTypes = {
  href: propTypes.string,
  poster: propTypes.string,
  year: propTypes.string,
  name: propTypes.string,
  description: propTypes.string,
  logo: propTypes.string,
};

export default CardPastExhibit;

const PosterExhibition = styled.img`
  width: 100%;
  object-fit: cover;
`;
const LogoExhibition = styled.img`
  width: 70px;
  height: 50px;
  object-fit: contain;
  /* background-color: rebeccapurple; */
`;
const LinkExhibition = styled.a`
  text-decoration: none;
  color: inherit;
`;