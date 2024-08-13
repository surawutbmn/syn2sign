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
    </>
  );
}

export default HomeElement;

const EleHomer = styled.div`
  position: absolute;
  top: 0;
  right: -5%;
  opacity: 1;
`;
const EleHomel = styled.div`
  position: absolute;
  opacity: 1;
  top: 0;
  left: -10%;
`;
const EleHomehl = styled.div`
  position: absolute;
  top: -45%;
  left: -20%;
  opacity: 1;
`;
const EleHomehr = styled.div`
  position: absolute;
  top: -45%;
  right: -15%;
`;
const EleHomebl = styled.div`
  position: absolute;
  bottom: -20%;
  left: 0%;
  opacity: 1;
`;
const EleHomebr = styled.div`
  position: absolute;
  bottom: -40%;
  right: 0%;
`;
const Eleimg = styled.img`
  width: 100%;
`;
