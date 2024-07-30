import ReactDOM from "react-dom";

import "./staytune.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faGlobe, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import CardPastExhibit from "../../component/card/CardPastExhibit";
import TwoABC from "../../component/card/TwoABC";
// import {CardMainThree,CardPastExhibit } from "../../component/card/index";
import CardMainThree from "../../component/card/CardMainThree"
// const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

// ReactDOM.render(element, document.body)

function StayTune() {
  return (
    <div style={{ height: "fit-content", backgroundColor: "" }}>
     

      <div className="container mb-5 mt-5">
      <h2 className="txt-upper txt-second txt-bold mb-5">
        stay tuned at other years' exhibition
      </h2>

        {/* Dotwisihon (2023) */}
        <CardMainThree
          poster="public/staytune/dotwishion-poster.png"
          logo="public/staytune/dotwishion-logo.svg"
          name="DOTWISH/*ON (2023)"
          year="23"
          NameVideo="DOTWISH/*ON"
          link="https://funcslash.com/dotwishion/"
          linkVideo=""
          linkImage=""
          description1="เว็บไซต์รวบรวมจัดแสดง 21 ผลงานสำเร็จการศึกษา ปีการศึกษา 2023 "
          description2="ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 17 "
          description3="มหาวิทยาลัยศิลปากร"
          line="public/other/line.png"
        />
        {/* STY}E:YEET (2022) */}
        <CardMainThree
          poster="public/staytune/STY}E_YEET-poster.png"
          logo="public/staytune/STY}E_YEET-logo.svg"
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
          poster="public/staytune/&TIVIRUS-poster.png"
          logo="public/staytune/&TIVIRUS-logo.svg"
          name="&TIVIRUS (2021)"
          year="21"
          NameVideo="&TIVIRUS"
          link=""
          linkVideo=""
          linkImage=""
          description1="การจัดรวบรวม 21 ผลงานสำเร็จการศึกษา ปีการศึกษา 2021"
          description2="ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 15 "
          description3="มหาวิทยาลัยศิลปากร"
        />


      </div>

      <div className="container mb-5">
          <h2 className="txt-bold title-exhibitionName-box">
            นิทรรศการที่ผ่านมา ปี 2015-2020
          </h2>
          <div className="row">
            <div className="col-12 col-lg-6">
              <CardPastExhibit
            
                poster="/public/staytune/POSTER2020.png"
                name="EX;TRACT"
                year="20"
                description="การจัดรวบรวม 31 ผลงานสำเร็จการศึกษา ปีการศึกษา 2020 ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 14 มหาวิทยาลัยศิลปากร"
                logo="/public/staytune/EX;TRACT-logo.svg"
              />
            </div>
            <div className="col-12 col-lg-6">
              {" "}
              <CardPastExhibit
                poster="/public/staytune/POSTER2019.png"
                name="SHORTCUT 13.5"
                year="19"
                description="การจัดรวบรวม 35 ผลงานสำเร็จการศึกษา ปีการศึกษา 2019 ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 13 มหาวิทยาลัยศิลปากร"
                logo="/public/staytune/shortcut-logo-v2 1.svg"
              />
            </div>
            <div className="col-12 col-lg-6">
              {" "}
              <CardPastExhibit
                href="https://funcslash.com/comeraam/"
                poster="/public/staytune/POSTER2018.png"
                name="COMERAAM 12.4"
                year="18"
                description="เว็บไซต์รวบรวมจัดแสดง 46 ผลงานสำเร็จการศึกษา ปีการศึกษา 2018 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 12 มหาวิทยาลัยศิลปากร"
                logo="/public/staytune/COMERAAM 12.4-logo.svg"
              />
            </div>
            <div className="col-12 col-lg-6">
              {" "}
              <CardPastExhibit
               href="https://funcslash.com/ultraline/portfolio/new_index.php"
                poster="/public/staytune/POSTER2017.png"
                name="ULTRA-LINE 11.3"
                year="17"
                description="เว็บไซต์รวบรวมจัดแสดง 40 ผลงานสำเร็จการศึกษา ปีการศึกษา 2017 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 11 มหาวิทยาลัยศิลปากร"
                logo="/public/staytune/ULTRA-LINE 11.3-logo.svg"
              />
            </div>

            <div className="col-12 col-lg-6">
              {" "}
              <CardPastExhibit
                href="https://funcslash.com/oathlon/"
                poster="/public/staytune/POSTER2016.png"
                name="OATHLON 10.2"
                year="16"
                description="เว็บไซต์รวบรวมจัดแสดง 32 ผลงานสำเร็จการศึกษา ปีการศึกษา 2016 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 10 มหาวิทยาลัยศิลปากร"
                logo="/public/staytune/OATHLON 10.2-logo.svg"
              />
            </div>

            <div className="col-12 col-lg-6">
              {" "}
              <CardPastExhibit
                href="https://funcslash.com/suraround/"
                poster="/public/staytune/POSTER2015.png"
                name="SURAROUND 9.1"
                year="15"
                description="เว็บไซต์รวบรวมจัดแสดง 43 ผลงานสำเร็จการศึกษา ปีการศึกษา 2015 ของนักศึกษาวิชาเอกอินเทอร์ แอคทีฟแอปพลิเคชัน รุ่น 9 มหาวิทยาลัยศิลปากร"
                logo="/public/staytune/SURAROUND 9.1-logo.svg"
              />
            </div>

            <div className="col-12 blank">

              
              
            </div>
          </div>
        </div>
    </div>
  );
}
//push
export default StayTune;
