import { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";
import { useParams } from "react-router-dom";

function Project() {
  const [project, setProject] = useState({});
  const { prj_id } = useParams();
  // const prj_id = "cpl01";

  const Getprojects = async () => {
    try {
      console.log(
        `Fetching project from URL: http://localhost/syn2sign/projects/${prj_id}`
      );
      if (prj_id) {
        const response = await axios.get(
          `http://localhost/syn2sign/projects/${prj_id}`
        );
        const projectData = response.data;
        setProject(projectData);
      } else {
        console.error("Project ID is missing");
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };
  useEffect(() => {
    console.log("Project ID:", prj_id);
    if (prj_id) {
      Getprojects();
    }
  }, [prj_id]);

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
                <p>{project.fullname_th}</p>
              </span>
            </div>
          </div>
          <div className="mx-auto ratio ratio-16x9">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${project.shreel_link}`}
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
