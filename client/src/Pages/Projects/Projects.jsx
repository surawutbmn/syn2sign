import { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";

function Project() {
  const [project, setProject] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const prj_id = "cpl01";
        const response = await axios.get(
          `http://localhost/syn2sign/projects/${prj_id}`
        );
        const projectData = response.data;
        setProject(projectData);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex align-items-center">
              <img
                src={`/icon/prj/${project.icon}`}
                alt=""
                style={{ maxWidth: "5vw", width: "100%" }}
              />
              <h1 className="txt-second ms-3">
                <span>
                  {project.name_en} <p>({project.name_th})</p>
                </span>
              </h1>
              <hr style={{ width: "2px" }} />
              <h3>ลดความเสี่ยงในการหกล้ม ด้วยการออกกำลังกาย</h3>
            </div>
            <div className="d-flex flex-column">
              <span>
                <p>
                  การออกแบบและพัฒนาแอปพลิเคชันประเมินสมรรถภาพทางกายเพื่อลดความเสี่ยง
                  ในการหกล้ม
                  และออกกำลังกายเพื่อเสริมสร้างความแข็งแรงของกล้ามเนื้อในผู้สูงอายุ
                  บนระบบปฏิบัติการไอโอเอส
                </p>
              </span>
              <div className="">MEDICAL AND HEALTH</div>
            </div>
          </div>
          <div className="mx-auto ratio ratio-16x9">
            <iframe
              src="https://www.youtube-nocookie.com/embed/_41WQgd5qKw?si=W2b0PFntsp9OpYss"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="video-border"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
