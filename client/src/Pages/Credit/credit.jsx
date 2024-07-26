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
import gsap, { Power1 } from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { useLayoutEffect } from "react";


function Credit() {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(()=>{
    gsap.fromTo(
      ".logo",
      2,
      { y: 0 },
      { y: -10, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 0.4 }
    );

  },[]);
  return (
    <div style={{}}>
      <div className="container">
        <div className="text-center mt-3">
          <h1>CREDIT syn2sign</h1>
          <div className="my-5">
            <span className="">
              <h2>SENIOR PROJECT ACADEMIC YEAR 2023</h2>
              Senior Project Exhibition 2024 • FROM 802408 SENIOR PROJECT
              PREPARATION AND 802409 SENIOR PROJECT
              <p>
                INTERACTIVE APPLICATION PROGRAMME <br /> DIGITAL TECHNOLOGY FOR
                DESIGN INFORMATION AND COMMUNICATION TECHNOLOGY SILPAKORN
                UNIVERSITY
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
        <div className="mt-5">
          <h2>Silpakorn University Administration Committee</h2>
          <span>
            Nathaporn Karnjanapoomi
            <p>Dean Of Faculty Of Information And Communication Technology</p>
          </span>
          <span>
            Nathaporn Karnjanapoomi
            <p>Dean Of Faculty Of Information And Communication Technology</p>
          </span>
        </div>
        <div className="my-5">
          <h1>Project Advisory Committee</h1>
          <div className="row" style={{ fontSize: "1.3em" }}>
            <div className="col d-flex justify-content-center">
              <div className="text-start">
                <span>ADVISORS GROUP 1</span>
                <p>Rakchanok Sukagalanan (Chairman)</p>
                <p>Nattavut Luenthaisong</p>
                <p>Sranya Maraprygsavan</p>
                <p>Sarayut Thibhodee</p>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="text-start">
                <span>ADVISORS GROUP 2</span>
                <p>Rakchanok Sukagalanan (Chairman)</p>
                <p>Nattavut Luenthaisong</p>
                <p>Sranya Maraprygsavan</p>
                <p>Sarayut Thibhodee</p>
              </div>
            </div>
            <div className="col d-flex justify-content-center">
              <div className="text-start">
                <span>ADVISORS GROUP 3</span>
                <p>Rakchanok Sukagalanan (Chairman)</p>
                <p>Nattavut Luenthaisong</p>
                <p>Sranya Maraprygsavan</p>
                <p>Sarayut Thibhodee</p>
              </div>
            </div>
            <div className="col-12 text-center mt-5">
              <div className="">
                <h2>Introducing the ICT:SILPAKORN</h2>
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
      <div
        className="w-100"
        style={{ background: "rgb(57 57 57)", padding: ".5em 0" }}
      >
        <div className="container">
          <img
            src="../../s2s-logo/su_logo.svg"
            alt=""
            style={{ marginLeft: ".5em" }}
          />
        </div>
      </div>
      <div className="container mt-5">
        <div className="">
          <h2 className="mb-3">syn2sign exhibition venue</h2>
          <span>
            DIRECTED BY: FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY,
            SILPAKORN UNIVERSITY
            <p>
              DIRECTED BY: FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY,
              SILPAKORN UNIVERSITY
            </p>
          </span>
        </div>
        <div className="my-5">
          <h2>INSI(gn)DER</h2>
          <div className="row mt-3">
            <div className="col-6 d-flex justify-content-center justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="mb-3">Thank you for your support</h2>
          <div className="row ">
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>Creative, strategy, MOTION and designer</span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center">
              <div className="">
                <img
                  src={graphic}
                  alt=""
                  style={{ width: "3vw", marginRight: "1rem" }}
                />
              </div>
              <div className="text-start ">
                <span>
                  <strong> Creative, strategy, MOTION and designer</strong>
                </span>
                <p>Leader: Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
                <p>Panyada Suxruxsa</p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h2 className="mb-4">Thank you to all sponsors</h2>
          <div className="row gy-4">
            <div className="col-12">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <img
                  src={em}
                  alt=""
                  loading="lazy"
                  style={{ marginBottom: "1.3em" }}
                />
              </a>
              <p>The Em District</p>
              <p>ดิ เอ็มดิสทริค</p>
            </div>
            <div className="col-4">
              <img
                src={dd}
                alt=""
                loading="lazy"
                style={{ marginBottom: "1.3em" }}
              />
              <p>DDproperty</p>
              <p>บริษัท ออลพร็อพเพอร์ตี้ มีเดีย จำกัด</p>
            </div>
            <div className="col-4">
              <img
                src={st}
                alt=""
                loading="lazy"
                style={{ marginBottom: "1.3em" }}
              />
              <p>EMDISTRICT</p>
              <p>ศิษย์เก่าเอกออกแบบเว็บและสื่อโต้ตอบ รุ่น 16</p>
            </div>
            <div className="col-4">
              <img
                src={dl}
                alt=""
                loading="lazy"
                style={{ marginBottom: "1.3em" }}
              />
              <p>DUCK LAB</p>
              <p>บริษัท ดัค แล็บ จำกัด</p>
            </div>
            <div className="col-4">
              <img
                src={meg}
                alt=""
                loading="lazy"
                style={{ marginBottom: "1.3em" }}
              />
              <p>MERGE DIGITAL AGENCY</p>
              <p>บริษัท เมิร์จ ดิจิตอล เอเจนซี่ จำกัด</p>
            </div>
            <div className="col-4">
              <img
                src={nb}
                alt=""
                loading="lazy"
                style={{ marginBottom: "1.3em" }}
              />
              <p>NABLA DIGITAL COMPANY LIMITED</p>
              <p>บริษัท แนบบลา ดิจิตอล จำกัด</p>
            </div>
            <div className="col-4">
              <img
                src={dm}
                alt=""
                loading="lazy"
                style={{ marginBottom: "1.3em" }}
              />
              <p>Deemmi AI and Tech Consultant</p>
              <p>บริษัท ดีมมี่ คอนซัลแตนท์ จำกัด</p>
            </div>
            <div className="col-4">
              <img
                src={dlo}
                alt=""
                loading="lazy"
                style={{ marginBottom: "1.3em" }}
              />
              <p>DILO PRODUCTS GROUP</p>
              <p>บริษัท ดิโล โปรดักส์ กรุ๊ป จำกัด</p>
            </div>
            <div className="col-4">
              <img
                src={ql}
                alt=""
                loading="lazy"
                style={{ marginBottom: "1.3em" }}
              />
              <p>Q Light & Sound</p>
              <p>บริษัท คิว ไลท์ แอนด์ ซาวด์ จำกัด</p>
            </div>
            <div className="col-4">
              <img
                src={m7}
                alt=""
                loading="lazy"
                style={{ marginBottom: "1.3em" }}
              />
              <p>Manggo07 Official</p>
              <p>แมงโก้ เซเว่น ออฟฟิศเชียล</p>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h2 className="mb-3">onsite supporter</h2>
          <span>
            ONSITE PHOTOGRAPHY TEAM:
            <p>
              Kantaphod Phumphruek, Kissana Suwannawong and Thitiwat Chormanee
            </p>
          </span>
          <span>
            EQUIPMENT TRANSPORT PROVIDER:
            <p>Bualoi Roongrueangsub Transport</p>
          </span>
          <div className="row">
            <div className="col-6">
              <p>LIGHTING & SOUND: Q Light & Sound</p>
            </div>
            <div className="col-6">
              <p>CARPET INSTALLATION: DILO PRODUCTS</p>
            </div>
            <div className="col-6">
              <p>MEDIA PRINTING: IMP factory</p>
            </div>
            <div className="col-6">
              <p>Board service provider: Thumnaksilp Advertising</p>
            </div>
            <div className="col-6">
              <p>T-SHIRT SUPPLIER: INDYt-shirt</p>
            </div>
            <div className="col-6">
              <p>Attachments and more: Company Name</p>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h2 className="mb-3">EXHIBITION PROJECT MANAGER</h2>
          <p>Project Manager: Chalida Ingkapattanakul </p>
          <p>Assistant Project Manager: Panita Lainananukul</p>
          <h2 className="mt-5 mb-3">SUPPORTER AND ADVISOR</h2>
          <p>Project Consultant: Kowit Meboon</p>
          <p>SUPPORTER: Methin Pingsutthiwong</p>
          <p>SUPPORTER: Orawan Praphruetdee</p>
          <p>SUPPORTER: Sarayut Thibhodee</p>
          <h4 className="mt-5">Publicize Project BY:</h4>
          <span>
            FUNC/ (funcslash) <br /> INTERACTIVE APPLICATION PROGRAMME <br />{" "}
            ICT SILPAKORN UNIVERSITY
          </span>
        </div>
      </div>
    </div>
  );
}

export default Credit;
