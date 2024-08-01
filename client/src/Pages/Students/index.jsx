import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoDocument } from "react-icons/io5";
import projectdata from "../../../public/data/Projectdata";
import studentsdata from "../../../public/data/Studentdata";



function Students() {
  const [student, setStudent] = useState(null);
  const [project, setProject] = useState({});
  const [otherStudents, setOtherStudents] = useState([]);
  const { std_id } = useParams();

  const Getstudents = async () => {
    try {
      // const std_id = 631310081;
      const studentResponse = await axios.get(
        `http://localhost/syn2sign/students/${std_id}`
      );
      const studentData = studentResponse.data;
      setStudent(studentData);

      const project_id = studentData.project_id;
      const projectResponse = await axios.get(
        `http://localhost/syn2sign/projects/${project_id}`
      );
      const projectData = projectResponse.data;
      setProject({
        id: projectData.id,
        project_id: projectData.project_id,
        name_en: projectData.name_en,
        name_th: projectData.name_th,
        type: projectData.type,
        icon: projectData.icon,
      });

      const otherStudentsResponse = await axios.get(
        `http://localhost/syn2sign/otherstudents/${project_id}/${std_id}`
      );
      const otherStudentsData = otherStudentsResponse.data;
      setOtherStudents({
        name_th: otherStudentsData.name_th,
        name_en: otherStudentsData.name_en,
        nickname_th: otherStudentsData.nickname_th,
        nickname_en: otherStudentsData.nickname_en,
        profile_img: otherStudentsData.profile_img,
        thumb_img: otherStudentsData.thumb_img,
        qoutes: otherStudentsData.qoutes,
        email: otherStudentsData.email,
        linkin: otherStudentsData.linkin,
        portfolio_link: otherStudentsData.portfolio_link,
        resume_filename: otherStudentsData.resume_filename,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    Getstudents();
  }, []);

  useEffect(() => {
    if (student && project) {
      document.title = `${student.nickname_en} ${student.name_en} / ${project.name_en} - Syn2sign senior project exhibition 2024`;
    }
  }, [student, project]);

  if (!student) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Helmet>
        <title>
          {student
            ? `${student.name_en} - ${project.name_en} - Syn2sign senior project exhibition 2024`
            : "Loading..."}
        </title>
      </Helmet>
      <div className="container mt-5">
        <div className="d-flex justify-content-between">
          <div className="text-start">
            <hr
              style={{
                width: "15dvw",
                border: ".3rem solid var(--color-secondary)",
                opacity: "1",
              }}
            />
            <h2 className="txt-scu-head">Get to know {student.nickname_en},</h2>
            <h3>Maker of {project.name_en}</h3>
            <img
              src={`/icon/prj/${project.icon}`}
              alt="project icon"
              style={{ maxWidth: "5vw", width: "100%" }}
              loading="lazy"
            />
            <img
              src={`/icon/double-qoute.svg`}
              alt="double qoute"
              style={{ maxWidth: "5vw", width: "100%" }}
              loading="lazy"
            />
            <h3 className="text-start">{student.qoutes}</h3>
          </div>
          <div className="">
            <img
              loading="lazy"
              src={`/profile_img/${student.profile_img}`}
              alt="creator profile"
              style={{
                maxWidth: "35vw",
                width: "100%",
                borderRadius: "1.2rem",
              }}
            />
            <div className="text-start">
              <h3 className="txt-upper">
                {student.name_en} ({student.nickname_en})
              </h3>
              <h5>
                {student.name_th}({student.nickname_th})
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="text-start mb-4 header-wline">
              <h3 className="txt-upper">
                <strong>{student.nickname_en} collaborate</strong>
              </h3>
              <span className="txt-grey">
                ผู้ที่ทำงานร่วมกับ{student.nickname_th}
              </span>
            </div>
            <img
              src={`/profile_img/${otherStudents.profile_img}`}
              alt="other creator profile"
              style={{
                maxWidth: "20vw",
                width: "100%",
                borderRadius: "1.2rem",
              }}
              loading="lazy"
            />
            <p>
              ({otherStudents.nickname_en}) {otherStudents.name_en}
              {otherStudents.name_th}({otherStudents.nickname_th})
            </p>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}
export default Students;
