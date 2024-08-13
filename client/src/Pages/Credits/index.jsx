import em from "./img/logo_spon/em_cl.svg";
import dd from "./img/logo_spon/dd_cl.svg";
import st from "./img/logo_spon/st_cl.svg";
import dl from "./img/logo_spon/dl_cl.svg";
import meg from "./img/logo_spon/mg_cl.svg";
import nb from "./img/logo_spon/nb_cl.svg";
import dm from "./img/logo_spon/dm_cl.svg";
import dlo from "./img/logo_spon/dlo_cl.svg";
import ql from "./img/logo_spon/ql_cl.svg";
import m7 from "./img/logo_spon/m7_cl.svg";
import gsap, { Power1 } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import "./credit.css";
import { Col, Container } from "react-bootstrap";
import PageElement from "../../component/Element/PageElement";
import LastSec from "./section/LastSec";
import FirstSec from "./section/FirstSec";
import RoleAndThx from "./section/RoleAndThx";

function Credit() {
  // gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      ".s2s-logo",
      2,
      { y: 0 },
      { y: -10, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 0.4 }
    );
  }, []);
  return (
    <>
      <PageElement />
      <FirstSec />
      <div className="w-100 su-line mt-5">
        <div className="container">
          <img
            src="../../s2s-logo/su_logo.svg"
            alt="ict slipakorn logo"
            style={{ marginLeft: ".5em" }}
          />
        </div>
      </div>
      <Container className="mt-5">
        <RoleAndThx />
        <Container className="mt-6 sponsor-con justify-content-center">
          <h2 className="txt-prmhead mb-5">exhibition sponsored by</h2>
          <Col xs={12} className=" mb-5">
            <a
              href="http://https://emdistrict.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="txt-link"
            >
              <img
                src={em}
                alt="emdistrict logo"
                loading="lazy"
                className="spon-logo"
                style={{ maxHeight: "6rem" }}
              />
              <p>
                <u>The Em District</u> <br /> ดิ เอ็มดิสทริค
              </p>
            </a>
          </Col>
          <div className="grid grid-cols-3 grid-cols-md-1 gap-5">
            <div className="d-flex justify-content-center">
              <a
                href="https://www.ddproperty.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-link"
              >
                <img
                  src={dd}
                  alt="ddproperty logo"
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem", maxWidth: "18rem" }}
                />

                <p>
                  <u>DDproperty</u>
                  <br />
                  บริษัท ออลพร็อพเพอร์ตี้ มีเดีย จำกัด
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="https://funcslash.com/styleyeet/"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-link"
              >
                <img
                  src={st}
                  alt="styleyeet logo"
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem", maxWidth: "8em" }}
                />
                <p>
                  <u>sty&#125;e:yeet/</u>
                  <br />
                  ศิษย์เก่าเอกออกแบบเว็บและสื่อโต้ตอบ รุ่น 16
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="https://ducklab.co.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-link"
              >
                <img
                  src={dl}
                  alt="ducklab logo"
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem" }}
                />
                <p>
                  <u>DUCK LAB</u>
                  <br />
                  บริษัท ดัค แล็บ จำกัด
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="https://www.merge.co.th/"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-link"
              >
                <img
                  src={meg}
                  alt="merge logo"
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem", maxWidth: "10rem" }}
                />
                <p>
                  <u>MERGE DIGITAL AGENCY</u>
                  <br />
                  บริษัท เมิร์จ ดิจิตอล เอเจนซี่ จำกัด
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="https://nabladigital.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-link"
              >
                <img
                  src={nb}
                  alt="nabladigital logo"
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem", maxWidth: "9rem" }}
                />
                <p>
                  <u>NABLA DIGITAL COMPANY LIMITED</u>
                  <br />
                  บริษัท แนบบลา ดิจิตอล จำกัด
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a
                href="https://www.deemmi.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-link"
              >
                <img
                  src={dm}
                  alt="deemi logo"
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem", maxWidth: "4rem" }}
                />
                <p>
                  <u>Deemmi AI and Tech Consultant</u>
                  <br />
                  บริษัท ดีมมี่ คอนซัลแตนท์ จำกัด
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a
                className="txt-link"
                href="https://www.diloproducts.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={dlo}
                  alt="dilo logo"
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem", maxWidth: "8rem" }}
                />
                <p>
                  <u>DILO PRODUCTS GROUP</u>
                  <br />
                  บริษัท ดิโล โปรดักส์ กรุ๊ป จำกัด
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a
                className="txt-link"
                href="https://www.facebook.com/p/Q-Light-Sound-100063757264018/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={ql}
                  alt="qlight logo"
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem", maxWidth: "4rem" }}
                />
                <p>
                  <u>Q Light & Sound</u>
                  <br />
                  บริษัท คิว ไลท์ แอนด์ ซาวด์ จำกัด
                </p>
              </a>
            </div>
            <div className="d-flex justify-content-center">
              <a
                className="txt-link"
                href="https://www.youtube.com/@ApologizeCh122"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={m7}
                  alt="mango7 logo"
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem", maxWidth: "4rem" }}
                />
                <p>
                  <u>Manggo07 Official</u>
                  <br />
                  แมงโก้ เซเว่น ออฟฟิศเชียล
                </p>
              </a>
            </div>
          </div>
          <div className="mt-5">
            <p>Yanisa Hemprachitchai (คุณญาณิศา เหมประชิตชัย)</p>
            <p>dotwish/*on (ศิษย์เก่าเอกออกแบบเว็บและสื่อโต้ตอบ รุ่น 17)</p>
            <p>
              EXPERT PEST SYSTEM COMPANY LIMITED <br /> (บริษัท เอ็กซ์เปอร์ท
              เพสท์ ซิสเต็ม จำกัด)
            </p>
            <p>
              DEEP LOVE COMPANY LIMITED <br />
              (บริษัท ดีพ เลิฟ จำกัด)
            </p>
            <p>
              IMP FACTORY COMPANY LIMITED <br />
              (บริษัท ไอเอ็มพี แฟคทอรี่ จำกัด)
            </p>
          </div>
        </Container>

        <LastSec />
      </Container>
    </>
  );
}

export default Credit;
