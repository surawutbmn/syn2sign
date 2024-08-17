import { useEffect, useState } from "react";
import "./exhibition.css";
import { useSpring, animated } from "@react-spring/web";
// import syn_ele from "/img/s2s-ele.svg";
// import paper_plane from "./img/paper-plane.png";
import messagesData from "./messages.json";
import { MdLocationOn, MdPerson } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaFilePdf } from "react-icons/fa6";
import { RxFigmaLogo } from "react-icons/rx";
import { LuArrowUpRight } from "react-icons/lu";
import Knowslide from "./KnowledgeSlide";
import { VdoSlide } from "./VdoSlide";
// import CardAdditional from "../../component/card/CardAdditional";
import PlaylistSlider from "../../component/Slider/PlaylistSlider";
import { Container, Row } from "react-bootstrap";
import SectionTitle from "../../component/SectionTitle";
import styled from "styled-components";
// import { FaYoutube } from "react-icons/fa";
//
function Exhibition() {
  const [messages, setMessages] = useState([]);
  const [displayMessages, setDisplayMessages] = useState([]);
  const [score, setScore] = useState(4.61);
  const props = useSpring({
    number: score,
    from: { number: 0 },
    config: { duration: 1500 },
  });

  useEffect(() => {
    const initialMessages = messagesData[2].data.map((item) => item.message);
    setMessages(initialMessages);
  }, []);

  useEffect(() => {
    const shuffleMessages = () => {
      if (messages.length > 0) {
        const shuffledMessages = messages.sort(() => 0.5 - Math.random());
        setDisplayMessages(shuffledMessages.slice(0, 9));
      }
    };

    shuffleMessages(); // Initial shuffle

    const intervalId = setInterval(shuffleMessages, 5000); // Shuffle every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [messages]);

  return (
    <>
      <div className="bg-gd-btr"></div>
      <BannerBox className="exh-banner-bg">
        <div className="exh-banner-overlay"></div>

        <img
          src={`${import.meta.env.VITE_BASE_URL}img/s2s-ele.svg`}
          alt="syn2sign element"
          className="exh-banner-ele"
        />
        <div className="git-link">
          <a
            href="https://github.com/surawutbmn/syn2sign"
            target="_blank"
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
        <div className="exh-banner-content exh-txt-shadow mt-5">
          {/* <h1 className="txt-upper exh-txt-shadow">
            The combination of art <br />
            and technology has lead to Syn2sign
          </h1> */}
          <h5>
            <strong>
              <MdLocationOn /> SPHERE GALLERY 1, M FLOOR, EMSPHERE
            </strong>
          </h5>
          <p>จำนวนผู้เข้าชมนิทรรศการ Syn2sign 26-29 June 2024 ~140 persons</p>
         
        </div>
      </BannerBox>
      <Container className="">
        <div className="exh-report-sec mb-5">
          <Row xs={1} md={2} className=" g-4">
            <div className="col">
              <div className="card text-start">
                <div className="exh-ovl"></div>
                <div className="card-body">
                  <h3 className="card-exh-title mb-2">
                    <span className="txt-upper">Evaluate exhibition </span>
                    Syn2sign
                  </h3>
                  <p className="card-text txt-grey fs-5">
                    <MdPerson className="me-2 fs-4 d-lg-block d-none" />
                    ผลการประเมินความพึงพอใจ จากผู้เข้าชมงาน 150 ท่าน
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="card-exh-desc">
                      {" "}
                      <animated.div>
                        {props.number.to((n) => n.toFixed(2))}
                      </animated.div>
                    </div>
                    <div className="card-exh-icon d-flex align-items-end">
                      <div className="crl-icon-line"></div>
                      <MdPerson />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <a
                href="https://silpakorn-my.sharepoint.com/personal/meboon_k_su_ac_th/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Fmeboon%5Fk%5Fsu%5Fac%5Fth%2FDocuments%2F%5F%5F%5F2024%5F%5FSYN2SIGN%5FRESOURCES%2FWebsite%2FFile%20Details%20for%20Website%2F2024%2D08%2Dsyn2sign%2Dcomplete%2Dreport%2Epdf&parent=%2Fpersonal%2Fmeboon%5Fk%5Fsu%5Fac%5Fth%2FDocuments%2F%5F%5F%5F2024%5F%5FSYN2SIGN%5FRESOURCES%2FWebsite%2FFile%20Details%20for%20Website&ga=1"
                target="_blank"
                rel="noopener noreferrer"
                className="link-txt"
              >
                <div className="card text-start">
                  <div className="exh-ovl"></div>
                  <div className="card-body">
                    <h3 className="card-exh-title txt-upper">
                      <strong>Exhibition brife report</strong>
                      <LuArrowUpRight size={20} />
                    </h3>
                    <span className="txt-grey">(Data Collection, PDF)</span>

                    <p className="card-text mt-4">
                      รายงานฉบับย่อ ที่เกี่ยวข้องกับนิทรรศการแสดง
                      ผลงานสำเร็จการศึกษาของนักศึกษา syn2sign Senior Project
                      Exhibition 2024
                    </p>
                    <br className="d-xl-none d-block" />
                    <div className="card-exh-icon text-end">
                      <div className="crl-icon-line"></div>
                      <FaFilePdf />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.figma.com/design/271FigZHhsvQ3aZz6ivp55/2024-Syn2sign-entry-booklet-draft?node-id=2019-320&t=lpSO2hfUPHLPE10b-1"
                target="_blank"
                rel="noopener noreferrer"
                className="link-txt"
              >
                <div className="card text-start">
                  <div className="exh-ovl"></div>
                  <div className="card-body">
                    <h3 className="card-exh-title txt-upper">
                      <strong>entry booklet</strong>
                      <LuArrowUpRight size={20} />
                    </h3>
                    <span className="txt-grey">(Senior Project, FIGMA)</span>
                    <p className="card-text mt-4">
                      หนังสือรวบรวมผลงานจุลนิพนธ์ ของนักศึกษา สาขา
                      วิชาเอกการออกแบบอินเทอร์แอคทีฟแอปพลิเคชัน คณะไอซีที
                      รุ่นที่ 18 ม.ศิลปากร ปีการศึกษา 2566
                    </p>
                    <br className="d-xxl-block d-none" />
                    <div className="card-exh-icon text-end">
                      <div className="crl-icon-line"></div>
                      <RxFigmaLogo />
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                href="https://silpakorn-my.sharepoint.com/:b:/g/personal/meboon_k_su_ac_th/EXlWmJMxO3RJp3p5d30oPsABb-mZTBkp3nv0dxtWO-BIIA?e=QWnDry"
                target="_blank"
                rel="noopener noreferrer"
                className="link-txt"
              >
                <div className="card text-start">
                  <div className="exh-ovl"></div>
                  <div className="card-body">
                    <h3 className="card-exh-title txt-upper">
                      <strong>T-Shirt brife report</strong>
                      <LuArrowUpRight size={20} />
                    </h3>
                    <span className="txt-grey">(Data Collection, PDF)</span>

                    <p className="card-text mt-4">
                      รายงานฉบับย่อ การเปิดจำหน่ายเสื้อยืดโอกาสพิเศษ
                      ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน ชั้นปีที่ 4
                      ปีการศึกษา 2566
                    </p>
                    <br />
                    <div className="card-exh-icon text-end">
                      <div className="crl-icon-line"></div>
                      <FaFilePdf />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </Row>
        </div>
      </Container>
      <Container className="mb-6">
        <VdoSlide />
      </Container>
      <Container className="mb-5">
        <PlaylistSlider />
      </Container>
      <Container className="mb-">
        <Knowslide />
      </Container>
      <Container className="">
        <div className="feedback-con">
          <div className="paper-plane">
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/paper-plane.png`}
              alt="paper plane"
              loading="lazy"
            />
          </div>
          <div className="text-start" style={{ fontSize: "0.7em" }}>Review Records (20)</div>
          <span className="txt-prim feedback-title">
            ส่งมอบพลังและกำลังใจถึงผู้จัดงาน (จากผู้ร่วมงาน)
          </span>
          <div className="txt-con-feedback">
            {displayMessages.map((message, index) => (
              <div
                className={`txt-bubble-con position-${index + 1}`}
                key={index}
              >
                <div className="txt-bubble">
                  <span>{message}</span>
                </div>
              </div>
            ))}
            {/* <div className="mt-6">
              {displayMessages.slice(0, 3).map((message, index) => (
                <span key={index} className="txt-bubble me-5">
                  {message}
                </span>
              ))}
            </div>

            <div className="mt-6">
              {displayMessages.slice(3, 6).map((message, index) => (
                <span key={index} className="txt-bubble me-5">
                  {message}
                </span>
              ))}
            </div>

            <div className="mt-6">
              {displayMessages.slice(6, 9).map((message, index) => (
                <span key={index} className="txt-bubble me-5">
                  {message}
                </span>
              ))}
            </div> */}
          </div>
        </div>
        <div className="mb-4">
        <IoLogoGithub className="giticon" /> Syn2sign Website Repo (GitHub)
        </div>

      </Container>
    </>
  );
}

export default Exhibition;

const BannerBox = styled.div`
  position: relative;
  width: 100%;
  height: 40dvw;
  margin-top: -5.5em;
  margin-bottom: 2em;
  a {
    color: var(--color-light);
  }
  &.exh-banner-bg {
    background-image: url(${import.meta.env.VITE_BASE_URL}img/exh-banner.webp);
    background-size: 100%;
  }
  @media (max-width: 575.98px) {
    margin-top: 0.8em;
    margin-bottom: 1.5em;
    &.exh-banner-bg {
      height: 55dvw;
      background-size: cover;
      background-position: top center;
    }
  }
`;
