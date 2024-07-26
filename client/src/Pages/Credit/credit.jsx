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
import graphic from "./img/icon/graphic.svg";
import thx from "./img/icon/thx.svg";
import sp from "./img/icon/spon.svg";
import web from "./img/icon/web.svg";
import int from "./img/icon/interact.svg";
import pr from "./img/icon/pr.svg";
import knb from "./img/icon/knowboard.svg";
import lo from "./img/icon/location.svg";
import led from "./img/icon/led.svg";
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";
import "./credit.css";

function Credit() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    gsap.fromTo(
      ".logo",
      2,
      { y: 0 },
      { y: -10, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 0.4 }
    );
  }, []);
  return (
    <div style={{}}>
      <img src="/icon/ele-head-l.svg" className="ele-head-l" alt="" />
      <img src="/icon/ele-head-r.svg" className="ele-head-r" alt="" />
      <div className="container">
        <div className="text-center mt-5">
          <h1 className="txt-second txt-sbold">CREDIT Syn2sign</h1>
          <div className="mt-3">
            <span className="txt-sbold txt-upper">
              <h3 className="mb-2">SENIOR PROJECT ACADEMIC YEAR 2023</h3>
              Senior Project Exhibition 2024 • FROM 802408 SENIOR PROJECT
              PREPARATION AND 802409 SENIOR PROJECT
              <p>
                INTERACTIVE APPLICATION PROGRAMME DIGITAL TECHNOLOGY FOR DESIGN{" "}
                <br />
                INFORMATION AND COMMUNICATION TECHNOLOGY SILPAKORN UNIVERSITY
              </p>
            </span>
          </div>
          <img
            src="../../s2s-logo/syn2sign_logo_cl.svg"
            alt=""
            style={{ width: "20vw" }}
            className="logo"
          />
        </div>
        <div className="mt-3">
          <h2 className="txt-scdhead mb-4">
            Silpakorn University Administration Committee
          </h2>
          <span>
            <h5>
              <strong>Nathaporn Karnjanapoomi</strong>
            </h5>
            <p>Dean Of Faculty Of Information And Communication Technology</p>
          </span>
          <span>
            <h5>
              <strong>Yuwaboon Thamrongsombatsakul</strong>
            </h5>
            <p>
              Chairman Of Academic Disciplines, Digital Technology For Design
            </p>
          </span>
        </div>
        <div className="my-5">
          <h2 className="txt-scdhead mb-3">Project Advisory Committee</h2>
          <div
            className="row justify-content-center"
            style={{ fontSize: "1.2em" }}
          >
            <div className="col d-flex justify-content-center advice-con">
              <div className="text-start">
                <span>
                  <strong>ADVISORS GROUP 1</strong>
                </span>
                <p>
                  Rakchanok Sukagalanan (Chairman) <br />
                  Nattavut Luenthaisong <br />
                  Sranya Maraprygsavan <br />
                  Sarayut Thibhodee
                </p>
              </div>
            </div>
            <div className="col d-flex justify-content-center advice-con">
              <div className="text-start">
                <span>
                  <strong>ADVISORS GROUP 2</strong>
                </span>
                <p>
                  Orawan Praphruetdee (Chairman) <br />
                  Methin Pingsutthiwong <br />
                  Kittinon Oywongpaisan <br />
                  Nathapong Masathien
                </p>
              </div>
            </div>
            <div className="col d-flex justify-content-center advice-con">
              <div className="text-start">
                <span>
                  <strong>ADVISORS GROUP 3</strong>
                </span>
                <p>
                  Kachornpon Hiranchotepaisan (Chairman) <br />
                  Kalumpahaiti <br />
                  Chuladid Suntitoranee <br />
                  Pasupong Prasertroongrueng
                </p>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <div className="">
                <h2 className="txt-scdhead mb-4">
                  Introducing the ICT:SILPAKORN
                </h2>
                <p>
                  <a
                    href="https://ict.su.ac.th/?page_id=30"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    หลักสูตรเทคโนโลยีดิจิทัลเพื่อธุรกิจ (Digital Technology for
                    Business),
                  </a>
                </p>
                <p>
                  <a
                    href="https://ict.su.ac.th/?page_id=32"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    หลักสูตรเทคโนโลยีดิจิทัลเพื่อการออกแบบ (Digital Technology
                    for Design),
                  </a>
                </p>
                <p>
                  <a
                    href="https://ict.su.ac.th/?page_id=34"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    หลักสูตรนิเทศศาสตร์ (Communication Arts)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 su-line">
        <div className="container">
          <img
            src="../../s2s-logo/su_logo.svg"
            alt=""
            style={{ marginLeft: ".5em" }}
          />
        </div>
      </div>
      <div className="container mt-5">
        <div className="mb-5">
          <h2 className="mb-3 txt-scdhead">syn2sign exhibition venue</h2>
          <span>
            <strong>DIRECTED BY:</strong> FACULTY OF INFORMATION AND
            COMMUNICATION TECHNOLOGY, SILPAKORN UNIVERSITY
            <p>
              <strong>EXHIBITION VENUE & DATE:</strong> 26-29 JUNE 2024 • SPHERE
              GALLERY 1, M FLOOR, EMSPHERE
            </p>
          </span>
        </div>
        <div className="my-4">
          <h2 className="txt-scdhead mb-5">INSI(gn)DER</h2>
          <div className="grid grid-cols-2 ml-20 gap-4">
            <div className="d-flex">
              <div className="ele-icon">
                <img src={graphic} alt="" />
              </div>
              <div className="text-start ">
                <span>
                  <h5 className="txt-upper">
                    <strong>ART DIRection & Graphic team</strong>
                  </h5>
                </span>
                <p>
                  <strong>Leader:</strong> Panyada Suxruxsa
                  <br />
                  Chalida Ingkapattanakul <br />
                  Methasit Sitthametha <br />
                  Onranpha Morsamarn <br />
                  Pattawan Srattatam <br />
                  Pattarawan Srattatam
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="ele-icon">
                <img src={sp} alt="" />
              </div>
              <div className="text-start ">
                <span>
                  <h5 className="txt-upper">
                    <strong>Sponsor relation & Financial Team</strong>
                  </h5>
                </span>
                <p>
                  <strong>Leader:</strong> Panita Lainananuku
                  <br />
                  Chanamon Kewsomnuk <br /> Natthanan Vaowkhajon <br />
                  Nattharnunt Zooriyarzazithum <br />
                  Natthatida Sritulanontha <br />
                  Sasikan Tianchanthuek
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="ele-icon">
                <img src={web} alt="" />
              </div>
              <div className="text-start ">
                <span>
                  <h5 className="txt-upper">
                    <strong>WebSITE</strong>
                  </h5>
                </span>
                <p>
                  <strong>Designer: </strong> Chalida Ingkapattanakul
                  <br /> Panita Lainananukul
                  <br /> Sasikan Tianchanthuek
                  <br />
                  <strong>Developer: </strong>
                  Chawakorn Jitpathak <br /> Surawut Binmamud
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="ele-icon">
                <img src={int} alt="" />
              </div>
              <div className="text-start ">
                <span>
                  <h5 className="txt-upper">
                    <strong>Interactive</strong>
                  </h5>
                </span>
                <p>
                  <strong>Designer: </strong>
                  Chalida Ingkapattanakul
                  <br /> Natthanan Vaowkhajon
                  <br /> Sasikan Tianchanthuek
                  <br />
                  <strong>Developer: </strong>
                  Chawakorn Jitpathak <br /> Surawut Binmamud
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="ele-icon">
                <img src={pr} alt="" />
              </div>
              <div className="text-start ">
                <span>
                  <h5 className="txt-upper">
                    <strong>Public relation & marketing</strong>
                  </h5>
                </span>
                <p>
                  <strong>Leader:</strong> Chanamon Kewsomnuk
                  <br />
                  Chawakorn Jitpathak <br />
                  Panita Lainananukul <br />
                  Panyada Suxruxsa <br />
                  Piyapat Homkrajay <br />
                  Sasikan Tianchanthuek <br />
                  Surawut Binmamud
                  <br /> Supakorn Achcha
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="ele-icon">
                <img src={knb} alt="" />
              </div>
              <div className="text-start ">
                <span>
                  <h5 className="txt-upper">
                    <strong>exhibition knowledge board</strong>
                  </h5>
                </span>
                <p>
                  <strong>Leader:</strong> Nattharnunt Zooriyarzazithum <br />{" "}
                  Chanamon Kewsomnuk <br />
                  Natthanan Vaowkhajon <br />
                  Natthatida Sritulanontha <br />
                  Panita Lainananukul <br />
                  Sasikan Tianchanthuek
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="ele-icon">
                <img src={lo} alt="" />
              </div>
              <div className="text-start ">
                <span>
                  <h5 className="txt-upper">
                    <strong>Location and equipments</strong>
                  </h5>
                </span>
                <p>
                  <strong>Leader:</strong> Surawut Binmamud <br />
                  Methasit Sitthametha <br />
                  Panita Lainananukul <br />
                  Pattawan Srattatam <br />
                  Piyapat Homkrajay Supakorn Achcha
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="ele-icon">
                <img src={led} alt="" />
              </div>
              <div className="text-start ">
                <span>
                  <h5 className="txt-upper">
                    <strong>Animated media screen on LED pillar</strong>
                  </h5>
                </span>
                <p>
                  Chanamon Kewsomnuk <br />
                  Panita Lainananukul <br />
                  Piyapat Homkrajay <br />
                  Supakorn Achcha
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h2 className="mb-3 txt-scdhead">Thank you for your support</h2>
          <div className="grid grid-cols-2 ml-20 gap-4">
            <div className="d-flex">
              <div className="ele-icon">
                <img src={thx} alt="" />
              </div>
              <div className="text-start ">
                <span>
                  <h5 className="txt-upper">
                    <strong>Supporter in counseling and assistance</strong>
                  </h5>
                </span>
                <p>
                  Wutiporn Fungkajorn <br />
                  Nattakit Jaruyotin <br />
                  Chanchon Pansuwan
                  <br />
                  Alongkron Worasuit
                </p>
              </div>
            </div>
            <div className="d-flex">
              <div className="ele-icon">
                <img src={thx} alt="" />
              </div>
              <div className="text-start">
                <span>
                  <h5 className="txt-upper">
                    <strong>EQUIPMENTs, FOODs AND OTHER</strong>
                  </h5>
                </span>
                <p>
                  Methin Pingsutthiwong <br /> Sarayut Thibhodee
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mtop-6">
          <div className="row sponser-con justify-content-center">
            <h2 className="txt-scdhead mb-5">exhibition sponsored by</h2>
            <div className="col-12 mb-5">
              <a
                href="http://https://emdistrict.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="txt-link"
              >
                <img
                  src={em}
                  alt=""
                  loading="lazy"
                  className="spon-logo"
                  style={{ maxHeight: "6rem" }}
                />
                <p>
                  <u>The Em District</u> <br /> ดิ เอ็มดิสทริค
                </p>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-5">
              <div className="d-flex justify-content-center">
                <a
                  href="https://www.ddproperty.com/en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="txt-link"
                >
                  <img
                    src={dd}
                    alt=""
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
                    alt=""
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
                    alt=""
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
                    alt=""
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
                    alt=""
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
                    alt=""
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
                    alt=""
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
                    alt=""
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
                  href="https://www.facebook.com/ApologizeCh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={m7}
                    alt=""
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
          </div>
        </div>
        <div className="my-5">
          <h2 className="mb-3 txt-scdhead">onsite supporter</h2>
          <span>
            <strong>ONSITE PHOTOGRAPHY TEAM:</strong>
            <p>
              Kantaphod Phumphruek, Kissana Suwannawong and Thitiwat Chormanee
            </p>
          </span>
          <div className="grid grid-cols-2 ml-30 gap-4">
            <div className="d-flex">
              <p>
                <strong>LIGHTING & SOUND:</strong> Q Light & Sound
              </p>
            </div>
            <div className="d-flex">
              <p>
                <strong>CARPET INSTALLATION:</strong> DILO PRODUCTS
              </p>
            </div>
            <div className="d-flex">
              <p>
                <strong>MEDIA PRINTING:</strong> IMP factory
              </p>
            </div>
            <div className="d-flex">
              <p>
                <strong>Board service provider:</strong> Thumnaksilp Advertising
              </p>
            </div>
            <div className="d-flex">
              <p>
                <strong>T-SHIRT SUPPLIER:</strong> INDYt-shirt
              </p>
            </div>
            <div className="d-flex">
              <p>
                <strong>EQUIPMENT TRANSPORT PROVIDER:</strong> Bualoi
                Roongrueangsub Transport
              </p>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="mb-3 txt-scdhead">EXHIBITION PROJECT MANAGER</h2>
          <p>
            <strong>Project Manager:</strong> Chalida Ingkapattanakul{" "}
          </p>
          <p>
            <strong>Assistant Project Manager:</strong> Panita Lainananukul
          </p>
          <h2 className="mt-5 mb-3 txt-scdhead">SUPPORTER AND ADVISOR</h2>
          <p>
            <strong>Project Consultant:</strong> Kowit Meboon
          </p>
          <p>
            <strong>SUPPORTER:</strong> Methin Pingsutthiwong
          </p>
          <p>
            <strong>SUPPORTER:</strong> Orawan Praphruetdee
          </p>
          <p>
            <strong>SUPPORTER:</strong> Sarayut Thibhodee
          </p>
          <h2 className="mt-5 txt-scdhead">Publicize Project BY</h2>
          <span>
            <a
              href="https://ict.su.ac.th/func/"
              target="_blank"
              rel="noopener noreferrer"
              className="txt-link"
            >
              <u>
                <strong>FUNC/ (FUNCSLASH)</strong>
              </u>
            </a>
            <br /> INTERACTIVE APPLICATION PROGRAMME <br /> ICT SILPAKORN
            UNIVERSITY
          </span>
        </div>
      </div>
    </div>
  );
}

export default Credit;
