import gsap, { Power1 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./credit.css";
import { Container } from "react-bootstrap";
import PageElement from "../../component/Element/PageElement";
import LastSec from "./section/LastSec";
import FirstSec from "./section/FirstSec";
import RoleAndThx from "./section/RoleAndThx";
import Sponser from "./section/Sponser";
import styled from "styled-components";

function Credit() {
  // gsap.registerPlugin(ScrollTrigger);
  
  return (
    <>
      <PageElement />
      <FirstSec />
      <div className="w-100 su-line mt-5">
        <div className="container">
          <Logo
            src="../../s2s-logo/su_logo.svg"
            alt="ict slipakorn logo"
          />
        </div>
      </div>
      <Container className="mt-5">
        <RoleAndThx />
        <Sponser/>
        <LastSec />
      </Container>
    </>
  );
}

export default Credit;

const Logo = styled.img`margin-left:.5em;`