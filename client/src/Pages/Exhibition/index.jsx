import "./exhibition.css";
import syn_ele from "./img/s2s-ele.svg";
import paper_plane from "./img/paper-plane.png";
import { MdLocationOn, MdPerson } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaFilePdf, FaArrowRightLong } from "react-icons/fa6";
import { RxFigmaLogo } from "react-icons/rx";
import Knowslide from "./KnowledgeSlide";
import { VdoSlide } from "./VdoSlide";
import { VdoExh } from "./VdoExhSlide";

function Exhibition() {
  return (
    <>
      <div className="exh-banner exh-banner-bg mt-5">
        <div className="exh-banner-overlay"></div>
        <img src={syn_ele} alt="syn2sign element" className="exh-banner-ele" />
        <div className="git-link">
          <a
            href="https://syn2sign-test.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoGithub className="fs-4" /> Syn2sign Website Repo
          </a>
        </div>
        <div className="exh-banner-content exh-txt-shadow">
          <h1 className="txt-upper exh-txt-shadow">
            The combination of art <br />
            and technology has lead to Syn2sign
          </h1>
          <h5>
            <strong>
              <MdLocationOn style={{ fontSize: "1.5rem" }} /> SPHERE GALLERY 1,
              M FLOOR, EMSPHERE
            </strong>
          </h5>
          <p>จำนวนผู้เข้าชมนิทรรศการ Syn2sign 26-29 June 2024 ~140 persons</p>
        </div>
      </div>
      <div className="container my-6">
        <div className="exh-report-sec mb-6">
          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="link-txt"
              >
                <div className="card  text-start">
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
                      <div className="card-exh-desc"> 4.61</div>
                      <div className="card-exh-icon d-flex align-items-end">
                        <div className="crl-icon-line"></div>
                        <MdPerson />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col">
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="link-txt"
              >
                <div className="card text-start">
                  <div className="exh-ovl"></div>
                  <div className="card-body">
                    <h3 className="card-exh-title txt-upper">
                      <strong>brife report</strong>
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
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="link-txt"
              >
                <div className="card text-start">
                  <div className="exh-ovl"></div>
                  <div className="card-body">
                    <h3 className="card-exh-title txt-upper">
                      <strong>entry booklet</strong>
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
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="link-txt"
              >
                <div className="card text-start">
                  <div className="exh-ovl"></div>
                  <div className="card-body">
                    <h3 className="card-exh-title txt-upper">
                      <strong>brife report</strong>
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
          </div>
        </div>
        <div className="exh-vdo-sec">
          <div className="exh-vdosec-title text-start">
            <h2>VIDEO Syn2sign</h2>
            <span>ความรู้สึกหลังการจัดงานนิทรรศการ</span>
          </div>
          <div className="exh-vdosec-content mt-4">
            <VdoSlide />
          </div>
          <div className="exh-vdosec-title text-start mt-5">
            <h2>VIDEO Syn2sign</h2>
            <span>ภาพบรรยากาศภายในงาน</span>
          </div>
          <div className="exh-vdosec-content mt-4">
            <VdoExh />
          </div>
        </div>
        <div className="exh-content-sec my-5">
          <div className="exh-content-card">
            <div className="row row-cols-1 row-cols-lg-2 g-4">
              <div className="col">
                <div className="card-exh-link">
                  <a
                    href="https://youtube.com/playlist?list=PLiCmIB88gkWQyzpusqxE8uaydKCTN-dij&si=xomeDL8DZmFDNhkO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="exh-card-ovl"></div>
                    <div className="row g-4 card-exh-con">
                      <div className="col-4">
                        <div className="exh-img-pl"></div>
                      </div>
                      <div className="col-8 d-flex flex-column text-start">
                        <h4 className="card-exh-title">
                          Youtube playlist • Senior Project Showreel, Academic
                          Year 2023
                        </h4>
                        <p className="card-exh-text">
                          เราได้จัดทำ Youtube playlist รวบรวมคลิป Showreel
                          ของแต่ละผลงาน จุลนิพนธ์ ประจำปีการศึกษา 2566
                          เพื่อให้ทุกคนเข้าถึงได้ง่ายขึ้น
                        </p>
                        <div className="card-foot">
                          <span className="btn-icon">
                            Watch now <FaArrowRightLong />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col">
                <div className="card-exh-link">
                  <a
                    href="https://www.facebook.com/media/set/?set=a.808621128076703&type=3"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="exh-card-ovl"></div>
                    <div className="row g-4 card-exh-con">
                      <div className="col-4">
                        <div className="exh-img-ph"></div>
                      </div>
                      <div className="col-8 d-flex flex-column text-start">
                        <h4 className="card-exh-title">
                          Exhibition Onsite Photo #syn2sign
                        </h4>
                        <p className="card-exh-text">
                          รวบรวมภาพบรรยากาศภายในงานนิทรรศการ #syn2sign
                          ที่นอกจากการจัด
                          แสดงโชว์ผลงานจุลนิพนธ์แล้วภายในงานยังมีจุดที่น่าสนใจอีกมากมายด้วย
                        </p>
                        <div className="card-foot">
                          <span className="btn-icon">
                            SEE MORE <FaArrowRightLong />
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="exh-knowledge-sec mt-5">
              <Knowslide />
            </div>
            <div className="exh-feedback-sec mt-5">
              <div className="feedback-con">
                <div className="paper-plane">
                  <img src={paper_plane} alt="paper plane" loading="lazy" />
                </div>
                <h3 className="text-start txt-second">
                  ข้อความส่งพลังและให้กำลังใจจากผู้ร่วมงาน
                </h3>
                <div className="txt-bubble-con mt-6">
                  <span className="txt-bubble">น้องๆ เก่งกันมาก</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exhibition;
