import { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";

function Project() {
  const prj_id = "cpl01";
  const [project, setProject] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/projects/${prj_id}`)
      .then((response) => response.data)
      .then((projectData) => {
        setProject({
          id: projectData[0].id,
          project_id: projectData[0].project_id,
          name_en: projectData[0].name_en,
          name_th: projectData[0].name_th,
          type: projectData[0].type,
          icon: projectData[0].icon,
        });
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);
  return (
    <>
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
    </>
  );
}
export default Project;
