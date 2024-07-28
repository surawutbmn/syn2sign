import ReactDOM from 'react-dom'

import "./staytune.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { faGlobe, faCirclePlay} from '@fortawesome/free-solid-svg-icons'

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
            <img src="public/staytune/dotwishion-poster.png" alt="Transparent" className="staytune-poster" />
            <div className="staytune-year txt-bold">
              <div className=" txt-dark-outline">20</div>
              <div className='sub-year' >23</div>
            </div>
          </div>

          <img src="public/other/line.png" alt="Transparent" className="staytune-image" />
          

          <div className="staytune-right-box">
            <div className="logo-box">
              <img src="public/staytune/dotwishion-logo.svg" alt="dotwishion-logo" className="staytune-logo" />
            </div>

            <div className="title-exhibitionName-box">
              <p className="txt-second txt-bold txt-head3">DOTWISH/*ON (2023)</p>
            </div>

            <div className="title-exhibitionName-box">
              
              <div className="link-box">
               <a className="txt-body3 link-icon" href='https://funcslash.com/dotwishion/' target="_blank"><FontAwesomeIcon icon={faGlobe} size="xl"/> https://funcslash.com/dotwishion/</a>
              </div>
              
            </div>

            <div className="title-exhibitionName-box">
              <div className='description-box txt-grey txt-body1'>เว็บไซต์รวบรวมจัดแสดง 21 ผลงานสำเร็จการศึกษา
              ปีการศึกษา 2023 ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟ
              แอปพลิเคชัน รุ่น 17 มหาวิทยาลัยศิลปากร</div>
            </div>

            <div className='video-box'>
              <p className='txt-body1 txt-seniorProjectName txt-bold'>DOTWISH/*ON • Video • View on Youtube</p>
              <div className='tab-video'>
                
                <a className='video-bg' href="https://funcslash.com/dotwishion/" target="_blank">
                  <p className='txt-video-preview txt-body3'>คลิกเพื่อรับชม</p>
                  <h2 className='txt-video-preview2  txt-bold'>บรรยากาศ</h2>
                  <img className='video-preview' src="public/staytune/dotwishion-video-preview.png" alt="preview"></img>
                  <div className="overlay" ></div>
                  <div className='icon-play'><FontAwesomeIcon icon={faCirclePlay} /></div>
                </a>
                
              </div>
              
              <div className='tab-video'>
                
                <a className='video-bg' href="https://funcslash.com/dotwishion/" target="_blank">
                  <p className='txt-video-preview txt-body3'>คลิกเพื่อรับชม</p>
                  <h2 className='txt-video-preview2  txt-bold'>บรรยากาศ</h2>
                  <img className='video-preview' src="public/staytune/dotwishion-video-preview.png" alt="preview"></img>
                  <div className="overlay" ></div>
                  <div className='icon-play'><FontAwesomeIcon icon={faCirclePlay} /></div>
                </a>
                
              </div>
            </div>
            
          </div>
        </div>

        <div className="staytune-sub-box">
          <div className="staytune-left-box">
            <p className="staytune-poster-text txt-body1 txt-grey">Poster</p>
            <img src="public/staytune/STY}E_YEET-poster.png" alt="Transparent" className="staytune-poster" />
            <div className="staytune-year txt-bold">
              <div className=" txt-dark-outline">20</div>
              <div className='sub-year' >22</div>
            </div>
          </div>

          {/* <div className='line-box'><img src="public/other/line.png" alt="Transparent" className="staytune-image" /></div> */}

          <div className="staytune-right-box"  style={{paddingLeft:"6rem"}}>
            <div className="logo-box">
              <img src="public/staytune/STY}E_YEET-logo.svg" alt="STY}E_YEET-logo-logo" className="staytune-logo" />
            </div>

            <div className="title-exhibitionName-box">
              <p className="txt-second txt-bold txt-head3">STY&#125;E:YEET (2022)</p>
            </div>

            <div className="title-exhibitionName-box">
              <div  className="link-box">
               <a className="txt-body3 link-icon" href='https://funcslash.com/styleyeet/' target="_blank"><FontAwesomeIcon icon={faGlobe} size="xl"/> https://funcslash.com/styleyeet/</a>
              </div>
              
            </div>

            <div className="title-exhibitionName-box">
              <div className='description-box txt-grey txt-body1'>การจัดรวบรวม 17 ผลงานสำเร็จการศึกษา ปีการศึกษา 2022 
              ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 16 
              มหาวิทยาลัยศิลปากร</div>
            </div>

            <div className='video-box'>
              <p className='txt-body1 txt-seniorProjectName txt-bold'>STY&#125;E:YEET • Video • View on Youtube</p>
              <div className='tab-video'>
                
                <a className='video-bg' href="https://funcslash.com/dotwishion/" target="_blank">
                  <p className='txt-video-preview txt-body3'>คลิกเพื่อรับชม</p>
                  <h2 className='txt-video-preview2  txt-bold'>บรรยากาศ</h2>
                  <img className='video-preview' src="public/staytune/dotwishion-video-preview.png" alt="preview"></img>
                  <div className="overlay" ></div>
                  <div className='icon-play'><FontAwesomeIcon icon={faCirclePlay} /></div>
                </a>
                
              </div>
              
              <div className='tab-video'>
                
                <a className='video-bg' href="https://funcslash.com/dotwishion/" target="_blank">
                  <p className='txt-video-preview txt-body3'>คลิกเพื่อรับชม</p>
                  <h2 className='txt-video-preview2  txt-bold'>บรรยากาศ</h2>
                  <img className='video-preview' src="public/staytune/dotwishion-video-preview.png" alt="preview"></img>
                  <div className="overlay" ></div>
                  <div className='icon-play'><FontAwesomeIcon icon={faCirclePlay} /></div>
                </a>
                
              </div>
            </div>
            
          </div>
        </div>

        <div className="staytune-sub-box">
          <div className="staytune-left-box">
            <p className="staytune-poster-text txt-body1 txt-grey">Poster</p>
            <img src="public/staytune/&TIVIRUS-poster.png" alt="Transparent" className="staytune-poster" />
            <div className="staytune-year txt-bold">
              <div className=" txt-dark-outline">20</div>
              <div className='sub-year' >21</div>
            </div>
          </div>

          {/* <div className='line-box'><img src="public/other/line.png" alt="Transparent" className="staytune-image" /></div> */}

          <div className="staytune-right-box" style={{paddingLeft:"6rem"}}>
            <div className="logo-box">
              <img src="public/staytune/&TIVIRUS-logo.svg" alt="&TIVIRUS-logo-logo" className="staytune-logo" />
            </div>

            <div className="title-exhibitionName-box">
              <p className="txt-second txt-bold txt-head3">&TIVIRUS (2021)</p>
            </div>

            <div className="title-exhibitionName-box">
              <div className="link-box" style={{visibility:"hidden"}}>
               <a className="txt-body3 link-icon" href='https://funcslash.com/dotwishion/' target="_blank"><FontAwesomeIcon icon={faGlobe} size="xl"/> https://funcslash.com/dotwishion/</a>
              </div>
              
            </div>

            <div className="title-exhibitionName-box">
              <div className='description-box txt-grey txt-body1'>การจัดรวบรวม 21 ผลงานสำเร็จการศึกษา ปีการศึกษา 2021 
              ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 15 
              มหาวิทยาลัยศิลปากร</div>
            </div>

            <div className='video-box'>
              <p className='txt-body1 txt-seniorProjectName txt-bold'>&TIVIRUS • Video • View on Youtube</p>
              <div className='tab-video'>
                
                <a className='video-bg' href="https://funcslash.com/dotwishion/" target="_blank">
                  <p className='txt-video-preview txt-body3'>คลิกเพื่อรับชม</p>
                  <h2 className='txt-video-preview2  txt-bold'>บรรยากาศ</h2>
                  <img className='video-preview' src="public/staytune/dotwishion-video-preview.png" alt="preview"></img>
                  <div className="overlay" ></div>
                  <div className='icon-play'><FontAwesomeIcon icon={faCirclePlay} /></div>
                </a>
                
              </div>
              
              <div className='tab-video'>
                
                <a className='video-bg' href="https://funcslash.com/dotwishion/" target="_blank">
                  <p className='txt-video-preview txt-body3'>คลิกเพื่อรับชม</p>
                  <h2 className='txt-video-preview2  txt-bold'>บรรยากาศ</h2>
                  <img className='video-preview' src="public/staytune/dotwishion-video-preview.png" alt="preview"></img>
                  <div className="overlay" ></div>
                  <div className='icon-play'><FontAwesomeIcon icon={faCirclePlay} /></div>
                </a>
                
              </div>
            </div>
            
          </div>
        </div>

        <div className="staytune-other-box d-flex row">
          <h2 className='txt-bold title-exhibitionName-box'>นิทรรศการที่ผ่านมา ปี 2015-2020</h2>

          <div className="d-flex align-items-start">
            <div className="col-6 left-content">
              <img className='mini-poster' src="public/staytune/POSTER2020.png" alt="preview" />
            </div>

            <div className="col-6 txt-head3 right-content">
              <span className='txt-dark-outline'>20</span><span className='sub-year'>20</span><br />
              <img className='other-logo' src="public/staytune/EX;TRACT-logo.svg" alt="preview" /><span>EX;TRACT</span>
              <p className='txt-body1 d-flex flex-column justify-content-start'>
                การจัดรวบรวม 31 ผลงานสำเร็จการศึกษา ปีการศึกษา 2020 ของนักศึกษาวิชาเอกอินเทอร์แอคทีฟแอปพลิเคชัน รุ่น 14 มหาวิทยาลัยศิลปากร
              </p>
            </div>
          </div>
        </div>


        
    
    
        

      </div>

      

    </div>
  );
}
//push
export default StayTune;
