import ReactDOM from "react-dom";

// import "./staytune.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { faGlobe, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
// import { FaGlobe, FaCirclePlay, FaUserSecret } from "react-icons/fa";

import CardPastExhibit from "../../component/card/CardPastExhibit";
// import TwoABC from "../../component/card/TwoABC";
// import {CardMainThree,CardPastExhibit } from "../../component/card/index";
import CardMainThree from "../../component/card/CardMainThree"
import { Col, Row } from "react-bootstrap";
// const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

// ReactDOM.render(element, document.body)

function StayTune() {
  return (
    <>
      <img src="/icon/ele-head-l.svg" className="ele-head-l" alt="" />
      <img src="/icon/ele-head-r.svg" className="ele-head-r" alt="" />
      <div className="bg-gd-btr"></div>

      <div style={{ height: "fit-content", backgroundColor: "" }}>
        <div className="container my-5 position-relative">
          <h2 className="txt-upper txt-second txt-bold mb-5">
            stay tuned at other year&rsquo;s exhibition
          </h2>

          {/* Dotwisihon (2023) */}
          <CardMainThree
            poster="/staytune/dotwishion-poster.png"
            logo="/staytune/dotwishion-logo.svg"
            name="DOTWISH/*ON (2023)"
            year="23"
            NameVideo="DOTWISH/*ON"
            link="https://funcslash.com/dotwishion/"
            linkVideo=""
            linkImage=""
            description1="เว็บไซต์รวบรวมจัดแสดง 21 ผลงานสำเร็จการศึกษา ปีการศึกษา 2023 "
            description2="ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 17 "
            description3="มหาวิทยาลัยศิลปากร"
            line="/other/line.png"
          />
          {/* STY}E:YEET (2022) */}
          <CardMainThree
            poster="/staytune/STY}E_YEET-poster.png"
            logo="/staytune/STY}E_YEET-logo.svg"
            name="STY}E:YEET (2022)"
            year="22"
            NameVideo="STY}E:YEET"
            link="https://funcslash.com/styleyeet/"
            linkVideo=""
            linkImage=""
            description1="เว็บไซต์รวบรวม 17 ผลงานสำเร็จการศึกษา ปีการศึกษา 2022 "
            description2="ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 16 "
            description3="มหาวิทยาลัยศิลปากร"
          />
          {/* &TIVIRUS (2021) */}
          <CardMainThree
            poster="/staytune/&TIVIRUS-poster.png"
            logo="/staytune/&TIVIRUS-logo.svg"
            name="&TIVIRUS (2021)"
            year="21"
            NameVideo="&TIVIRUS"
            link="https://www.youtube.com/playlist?list=PLiCmIB88gkWSOhh-DCS-kF6LqRvJS5Aay"
            linkVideo=""
            linkImage=""
            description1="การจัดรวบรวม 21 ผลงานสำเร็จการศึกษา ปีการศึกษา 2021"
            description2="ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 15 "
            description3="มหาวิทยาลัยศิลปากร"
          />
        </div>

        <div className="container mb-5">
          <h2 className="txt-bold title-exhibitionName-box text-start">
            นิทรรศการที่ผ่านมา ปี 2015-2020
          </h2>
          <Row xs={1} lg={2} className="gx-5 gy-4 mt-1">
            <Col>
              <CardPastExhibit
                poster="/staytune/POSTER2020.png"
                name="EX;TRACT"
                year="20"
                description="การจัดรวบรวม 31 ผลงานสำเร็จการศึกษา ปีการศึกษา 2020 ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 14 มหาวิทยาลัยศิลปากร"
                logo="/staytune/EX;TRACT-logo.svg"
              />
            </Col>
            <Col>
              {" "}
              <CardPastExhibit
                poster="/staytune/POSTER2019.png"
                name="SHORTCUT 13.5"
                year="19"
                description="การจัดรวบรวม 35 ผลงานสำเร็จการศึกษา ปีการศึกษา 2019 ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 13 มหาวิทยาลัยศิลปากร"
                logo="/staytune/shortcut-logo-v2 1.svg"
              />
            </Col>
            <Col>
              {" "}
              <CardPastExhibit
                href="https://funcslash.com/comeraam/"
                poster="/staytune/POSTER2018.png"
                name="COMERAAM 12.4"
                year="18"
                description="เว็บไซต์รวบรวมจัดแสดง 46 ผลงานสำเร็จการศึกษา ปีการศึกษา 2018 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 12 มหาวิทยาลัยศิลปากร"
                logo="/staytune/COMERAAM 12.4-logo.svg"
              />
            </Col>
            <Col>
              {" "}
              <CardPastExhibit
                href="https://funcslash.com/ultraline/portfolio/new_index.php"
                poster="/staytune/POSTER2017.png"
                name="ULTRA-LINE 11.3"
                year="17"
                description="เว็บไซต์รวบรวมจัดแสดง 40 ผลงานสำเร็จการศึกษา ปีการศึกษา 2017 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 11 มหาวิทยาลัยศิลปากร"
                logo="/staytune/ULTRA-LINE 11.3-logo.svg"
              />
            </Col>

            <Col>
              {" "}
              <CardPastExhibit
                href="https://funcslash.com/oathlon/"
                poster="/staytune/POSTER2016.png"
                name="OATHLON 10.2"
                year="16"
                description="เว็บไซต์รวบรวมจัดแสดง 32 ผลงานสำเร็จการศึกษา ปีการศึกษา 2016 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 10 มหาวิทยาลัยศิลปากร"
                logo="/staytune/OATHLON 10.2-logo.svg"
              />
            </Col>

            <Col>
              {" "}
              <CardPastExhibit
                href="https://funcslash.com/suraround/"
                poster="/staytune/POSTER2015.png"
                name="SURAROUND 9.1"
                year="15"
                description="เว็บไซต์รวบรวมจัดแสดง 43 ผลงานสำเร็จการศึกษา ปีการศึกษา 2015 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 9 มหาวิทยาลัยศิลปากร"
                logo="/staytune/SURAROUND 9.1-logo.svg"
              />
            </Col>

            {/* <div className="col-12 blank"></div> */}
          </Row>
        </div>
      </div>
    </>
  );
}
//push
export default StayTune;
