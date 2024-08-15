import "./staytuneCustome.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { faGlobe, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FaGlobe , FaYoutube } from "react-icons/fa";

import CardPastExhibit from "../../component/card/CardPastExhibit";
// import TwoABC from "../../component/card/TwoABC";
// import {CardMainThree,CardPastExhibit } from "../../component/card/index";
import CardMainThree from "../../component/card/CardMainThree";
import { Col, Row } from "react-bootstrap";
import CardMainThreeMobile from "../../component/card/CardMainThreeMobile";
// const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

// ReactDOM.render(element, document.body)

function StayTune() {
  return (
    <>
      <img
        src={import.meta.env.VITE_BASE_URL+"icon/ele-head-l.svg"}
        className="ele-head-l"
        alt=""
      />
      <img
        src={import.meta.env.VITE_BASE_URL+"icon/ele-head-r.svg"}
        className="ele-head-r"
        alt=""
      />

      <div style={{ height: "fit-content", backgroundColor: "" }}>
        <div className="container my-5 position-relative d-none d-md-block">
          <h2 className="txt-upper txt-prim txt-bold mb-5">
            stay tuned at previous year&rsquo;s exhibition
          </h2>
          {/* Syn2sign (2024) */}
          <CardMainThree
            poster="/staytune/syn2sign_poster.png"
            logo="/staytune/syn2sign-logo.svg"
            name="SYN2SIGN (2024)"
            year="24"
            NameVideo="SYN2SIGN"
            Icon={<FaGlobe size="1.3em" className="me-2" />}
            linkText="Syn2sign's Website"
            link="https://funcslash.com/syn2sign/"
            linkVideo="https://youtu.be/Kkvge3HhIZc?si=H0Yt_MX1pG71z5Kg"
            linkImage="https://www.facebook.com/share/r/Pp4m3Udo4x34FXPH/"
            description1="การจัดรวบรวม 8 ผลงานสำเร็จการศึกษา ปีการศึกษา 2566"
            description2="ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 18 "
            description3="มหาวิทยาลัยศิลปากร"
            line="/other/line.png"
            imgPreview1="/staytune/syn2sign-video-preview.png"
            imgPreview2="/staytune/syn2sign-video-preview2.png"
          />

          {/* Dotwisihon (2023) */}
          <CardMainThree
            poster="/staytune/dotwishion-poster.png"
            logo="/staytune/dotwishion-logo.svg"
            name="DOTWISH/*ON (2023)"
            year="23"
            NameVideo="DOTWISH/*ON"
            link="https://funcslash.com/dotwishion/"
            Icon={<FaGlobe size="1.3em" className="me-2" />}
            linkText="Dotwishion's Website"
            linkVideo="https://www.facebook.com/reel/797297252002902?rdid=0lROPLGnkYxdfZTX"
            linkImage="https://youtu.be/ovDdRpS3pns?si=m8xALqy3pihyRFP1"
            description1="เว็บไซต์รวบรวมจัดแสดง 21 ผลงานสำเร็จการศึกษา ปีการศึกษา 2565 "
            description2="ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 17 "
            description3="มหาวิทยาลัยศิลปากร"
            line="/other/line.png"
            imgPreview1="/staytune/dotwishion-video-preview.png"
            imgPreview2="/staytune/dotwishion-video-preview2.png"
          />
          {/* STY}E:YEET (2022) */}
          <CardMainThree
            poster="/staytune/STY}E_YEET-poster.png"
            logo="/staytune/STY}E_YEET-logo.svg"
            name="STY}E:YEET (2022)"
            year="22"
            NameVideo="STY}E:YEET"
            link="https://funcslash.com/styleyeet/"
            Icon={<FaGlobe size="1.3em" className="me-2" />}
            linkText="STY}E:YEET's Website"
            linkVideo="https://youtu.be/FF2HUOdQqgM?si=aaR8zeR6Bz8IEtrl"
            linkImage="https://youtu.be/7Qm-h_boM5c?si=rTU3qJ7IxxDWgYqN"
            description1="เว็บไซต์รวบรวม 17 ผลงานสำเร็จการศึกษา ปีการศึกษา 2564 "
            description2="ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 16 "
            description3="มหาวิทยาลัยศิลปากร"
            imgPreview1="/staytune/styleyeet-video-preview.png"
            imgPreview2="/staytune/styleyeet-video-preview2.png"
          />
          {/* &TIVIRUS (2021) */}
          <CardMainThree
            poster="/staytune/&TIVIRUS-poster.png"
            logo="/staytune/&TIVIRUS-logo.svg"
            name="&TIVIRUS (2021)"
            year="21"
            NameVideo="&TIVIRUS"
            link="https://www.youtube.com/playlist?list=PLiCmIB88gkWSOhh-DCS-kF6LqRvJS5Aay"
            Icon={<FaYoutube size="1.3em" className="me-2" />}
            linkText="&TIVIRUS's Youtube Playlist"
            linkVideo="https://fb.watch/tSyyX6yz5w/"
            linkImage="https://fb.watch/tSyAiGZuTM/"
            description1="การจัดรวบรวม 21 ผลงานสำเร็จการศึกษา ปีการศึกษา 2563"
            description2="ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 15 "
            description3="มหาวิทยาลัยศิลปากร"
            imgPreview1="/staytune/&TIVIRUS-video-preview.png"
            imgPreview2="/staytune/&TIVIRUS-video-preview2.png"
          />
        </div>

        {/* Mobile */}
        <div className="container mt-5 d-block d-md-none">
          <h2 className="txt-upper txt-prim txt-bold mb-5">
            stay tuned at previous year&rsquo;s exhibition
          </h2>
          {/* syn2sign */}
          <CardMainThreeMobile
            logo="/staytune/syn2sign-logo.svg"
            name="SYN2SIGN (2020)"
            link="#"
            linkText="SYN2SIGN's Website"
            Icon={<FaGlobe size="1.3em" className="me-2" />}
            description1="เว็บไซต์รวบรวมจัดแสดง 8 ผลงานสำเร็จการศึกษาปีการศึกษา 2566 ของ นักศึกษาวิชาเอกอินเทอร์แอคทีฟ แอปพลิเคชัน รุ่น 18 มหาวิทยาลัยศิลปากร"
            NameVideo="SYN2SIGN"
            imgPreview1="/staytune/syn2sign-video-preview.png"
            imgPreview2="/staytune/syn2sign-video-preview2.png"
            linkVideo="https://youtu.be/Kkvge3HhIZc?si=H0Yt_MX1pG71z5Kg"
            linkImage="https://www.facebook.com/share/r/Pp4m3Udo4x34FXPH/"
            poster="/staytune/syn2sign_poster.png"
          />

          {/* dotwishion */}
          <CardMainThreeMobile
            logo="/staytune/dotwishion-logo.svg"
            name="DOTWISH/*ON (2023)"
            link="https://funcslash.com/dotwishion/"
            Icon={<FaGlobe size="1.3em" className="me-2" />}
            linkText="DOTWISH/*ON's Website"
            description1="เว็บไซต์รวบรวมจัดแสดง 21 ผลงานสำเร็จการศึกษาปีการศึกษา 2565 ของ นักศึกษาวิชาเอกอินเทอร์แอคทีฟ แอปพลิเคชัน รุ่น 17 มหาวิทยาลัยศิลปากร"
            NameVideo="DOTWISH/*ON"
            imgPreview1="/staytune/dotwishion-video-preview.png"
            imgPreview2="/staytune/dotwishion-video-preview2.png"
            linkVideo="https://www.facebook.com/share/r/csUy6m53PFJvAQzq/"
            linkImage="https://youtu.be/ovDdRpS3pns?si=m8xALqy3pihyRFP1"
            poster="/staytune/dotwishion-poster.png"
          />

          {/* styleyeet */}
          <CardMainThreeMobile
            logo="/staytune/STY}E_YEET-logo.svg"
            name="STY}E:YEET (2022)"
            link="https://funcslash.com/styleyeet/"
            Icon={<FaGlobe size="1.3em" className="me-2" />}
            linkText="STY}E:YEET's Website"
            description1="เว็บไซต์รวบรวมจัดแสดง 17 ผลงานสำเร็จการศึกษาปีการศึกษา 2564 ของ นักศึกษาวิชาเอกอินเทอร์แอคทีฟ แอปพลิเคชัน รุ่น 16 มหาวิทยาลัยศิลปากร"
            NameVideo="STY}E:YEET"
            imgPreview1="/staytune/styleyeet-video-preview.png"
            imgPreview2="/staytune/styleyeet-video-preview2.png"
            linkVideo="https://youtu.be/FF2HUOdQqgM?si=aaR8zeR6Bz8IEtrl"
            linkImage="https://youtu.be/7Qm-h_boM5c?si=rTU3qJ7IxxDWgYqN"
            poster="/staytune/STY}E_YEET-poster.png"
          />

          {/* &TIVIRUS  */}
          <CardMainThreeMobile
            logo="/staytune/&TIVIRUS-logo.svg"
            name="&TIVIRUS (2021)"
            link="https://www.youtube.com/playlist?list=PLiCmIB88gkWSOhh-DCS-kF6LqRvJS5Aay"
            Icon={<FaYoutube size="1.3em" className="me-2" />}
            linkText="&TIVIRUS 's Youtube Playlist"
            description1="เว็บไซต์รวบรวมจัดแสดง 21 ผลงานสำเร็จการศึกษาปีการศึกษา 2563 ของ นักศึกษาวิชาเอกอินเทอร์แอคทีฟ แอปพลิเคชัน รุ่น 15 มหาวิทยาลัยศิลปากร"
            NameVideo="&TIVIRUS"
            imgPreview1="/staytune/&TIVIRUS-video-preview.png"
            imgPreview2="/staytune/&TIVIRUS-video-preview2.png"
            linkVideo="https://fb.watch/tSyyX6yz5w/"
            linkImage="https://fb.watch/tSyAiGZuTM/"
            poster="/staytune/&TIVIRUS-poster.png"
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
                description="การจัดรวบรวม 31 ผลงานสำเร็จการศึกษา ปีการศึกษา 2562 ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 14 มหาวิทยาลัยศิลปากร"
                logo="/staytune/EX;TRACT-logo.svg"
              />
            </Col>
            <Col>
              {" "}
              <CardPastExhibit
                poster="/staytune/POSTER2019.png"
                name="SHORTCUT 13.5"
                year="19"
                description="การจัดรวบรวม 35 ผลงานสำเร็จการศึกษา ปีการศึกษา 2561 ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 13 มหาวิทยาลัยศิลปากร"
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
                description="เว็บไซต์รวบรวมจัดแสดง 46 ผลงานสำเร็จการศึกษา ปีการศึกษา 2560 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 12 มหาวิทยาลัยศิลปากร"
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
                description="เว็บไซต์รวบรวมจัดแสดง 40 ผลงานสำเร็จการศึกษา ปีการศึกษา 2559 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 11 มหาวิทยาลัยศิลปากร"
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
                description="เว็บไซต์รวบรวมจัดแสดง 32 ผลงานสำเร็จการศึกษา ปีการศึกษา 2558 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 10 มหาวิทยาลัยศิลปากร"
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
                description="เว็บไซต์รวบรวมจัดแสดง 43 ผลงานสำเร็จการศึกษา ปีการศึกษา 2557 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 9 มหาวิทยาลัยศิลปากร"
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
