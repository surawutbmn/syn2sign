import ReactDOM from 'react-dom'

import "./staytune.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faGlobe} from '@fortawesome/free-solid-svg-icons'

// const element = <FontAwesomeIcon icon={byPrefixAndName.fas['house']} />

// ReactDOM.render(element, document.body)

function StayTune() {
  return (
    <div style={{ height: "fit-content", backgroundColor: "" }}>
      <h2 className="txt-upper txt-second txt-bold">
        stay tuned at other years' exhibition
      </h2>

      <div className="staytune-main-box" style={{ backgroundColor: "", padding: "15vh" }}>
        <div className="staytune-sub-box">
          <div className="staytune-left-box">
            <p className="staytune-poster-text txt-body1 txt-grey">Poster</p>
            <img src="public/staytune/dotwishion-poster.png" alt="Transparent" className="staytune-dotwision-poster" />
            <div className="staytune-year txt-bold">
              <div className="txt-dark-outline">20</div>
              <div >23</div>
            </div>
          </div>

          <img src="public/other/line.svg" alt="Transparent" className="staytune-image" />

          <div className="staytune-right-box">
            <div className="logo-box">
              <img src="public/staytune/dotwishion-logo.svg" alt="dotwision-logo" className="staytune-dotwision-logo" />
            </div>

            <div className="title-exhibitionName-box">
              <p className="txt-second txt-bold txt-head3">DOTWISH/*ON (2023)</p>
            </div>

            <div className="title-exhibitionName-box">
              <div className="link-box">
               <a className="txt-body1 link-icon" href='https://funcslash.com/dotwishion/' target="_blank"><FontAwesomeIcon icon={faGlobe} size="xl"/> https://funcslash.com/dotwishion/</a>
              </div>
              
            </div>

            <div className="title-exhibitionName-box">
              <div className='description-box txt-grey txt-body1'>เว็บไซต์รวบรวมจัดแสดง 21 ผลงานสำเร็จการศึกษา<br></br>
              ปีการศึกษา 2023 ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟ<br></br>
              แอปพลิเคชัน รุ่น 17 มหาวิทยาลัยศิลปากร</div>
            </div>

            <div className='video-box'> </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default StayTune;
