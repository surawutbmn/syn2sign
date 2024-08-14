import gsap, { Power1, Power2 } from "gsap";
import { useEffect } from "react";
import styled from "styled-components";

function HomeElement() {
  useEffect(() => {
    gsap.fromTo(
      ".ele-l",
      4,
      { x: 0, y: -10 },
      {
        x: 50,
        y: 10,
        ease: Power2.easeInOut,
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      }
    );
    gsap.fromTo(
      ".ele-r",
      4,
      { x: 50, y: 10 },
      {
        x: 0,
        y: -10,
        ease: Power2.easeInOut,
        repeat: -1,
        yoyo: true,
        delay: 2,
      }
    );
    gsap.fromTo(
      ".ele-hl",
      3,
      { x: 0, y: 0, opacity: 0.8 },
      {
        x: 15,
        y: -10,
        opacity: 1,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
        delay: 0.4,
      }
    );
    gsap.fromTo(
      ".ele-hr",
      3,
      { x: 20, y: 10, opacity: 0.8 },
      {
        x: 0,
        y: -10,
        opacity: 1,
        ease: Power1.easeInOut,
        repeat: -1,
        yoyo: true,
        delay: 0.6,
      }
    );
  }, []);
  return (
    <>
      <EleHomehl className="ele-hl">
        <Eleimg src="/icon/ele-homeh-l.svg" alt="" />
      </EleHomehl>
      <EleHomehr className="ele-hr">
        <Eleimg src="/icon/ele-homeh-r.svg" alt="" />
      </EleHomehr>
      <EleHomel className="ele-l">
        <Eleimg src="/icon/ele-home-l.svg" alt="" />
      </EleHomel>
      <EleHomer className="ele-r">
        <Eleimg src="/icon/ele-home-r.svg" alt="" />
      </EleHomer>
      <EleHomebl>
        <Eleimg src="/icon/ele-btm-l.svg" alt="" />
      </EleHomebl>
      <EleHomebr>
        <Eleimg src="/icon/ele-btm-r.svg" alt="" />
      </EleHomebr>
      <Btmfw/>
    </>
  );
}

export default HomeElement;

const EleHomer = styled.div`
  position: absolute;
  top: 0;
  right: -5%;
  opacity: 1;
  @media (min-width: 1440.98px) {
    right: -5%;
    width: 50em;
  }
  @media (max-width: 1199.98px) {
    right: -5%;
    width: 35em;
  }
  @media (max-width: 1023.98px) {
    right: -10%;
    width: 30em;
  }
  @media (max-width: 575.98px) {
    width: 15em;
    top: 25%;
    right: -8%;
  }
`;
const EleHomel = styled.div`
  position: absolute;
  opacity: 1;
  top: 0;
  left: -10%;
  @media (min-width: 1440.98px) {
    left: -5%;
    width: 60em;
  }
  @media (max-width: 1199.98px) {
    left: -10%;
    width: 35em;
  }
  @media (max-width: 1023.98px) {
    width: 40em;
  }
  @media (max-width: 575.98px) {
    left: -18%;
    top: 20%;
    width: 20em;
  }
`;
const EleHomehl = styled.div`
  position: absolute;
  top: -45%;
  left: -20%;
  opacity: 1;
  @media (min-width: 1440.98px) {
    left: -8%;
    top: -30%;
    width: 80em;
  }
  @media (max-width: 575.98px) {
    left: -48%;
    top: -20%;
    width: 40em;
  }
`;
const EleHomehr = styled.div`
  position: absolute;
  top: -45%;
  right: -15%;
  @media (min-width: 1440.98px) {
    right: -8%;
    top: -20%;
    width: 80em;
  }
  @media (max-width: 575.98px) {
    display: none;
  }
`;
const EleHomebl = styled.div`
  position: absolute;
  bottom: -20%;
  left: 0%;
  opacity: 1;
  @media (min-width: 1440.98px) {
    left: 0%;
    bottom: -20%;
    width: 80em;
  }
  @media (max-width: 575.98px) {
    display: none;
  }
`;
const EleHomebr = styled.div`
  position: absolute;
  bottom: -40%;
  right: 0%;
  @media (min-width: 1440.98px) {
    right: 0%;
    bottom: -40%;
    width: 80em;
  }
  @media (max-width: 575.98px) {
    display: none;
  }
`;
const Eleimg = styled.img`
  width: 100%;
`;
const Btmfw = styled.div`
  position: absolute;
  bottom: -30%;
  transform: translateY(30%);
  left: 0;
  width: 100%;
  height: 90%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(5, 186, 100, 0.8) 100%
  );
  @media (min-width: 767.98px) {
    display: none;
  }
`;
