import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn, FaReadme } from "react-icons/fa6";
import projectdata from "../../../public/data/Projectdata";
import studentsdata from "../../../public/data/Studentdata";
import SectionTitle from "../../component/SectionTitle";
import PageElement from "../../component/Element/PageElement";

function Students() {
  const [student, setStudent] = useState(null);
  const [project, setProject] = useState({});
  const [otherStudents, setOtherStudents] = useState([]);
  const { std_id } = useParams();

  const handleLinkClick = (event) => {
    event.preventDefault();
    const url = `/showcase/creators/${otherStudents.std_id}`;
    window.location.href = url;
  };

  const findProjectById = (project_id) => {
    return (
      projectdata.find((project) => project.project_id === project_id) || null
    );
  };
  const findStudentById = (std_id) => {
    return studentsdata.find((student) => student.std_id === std_id) || null;
  };
  const findOtherStudentsByProjectId = (project_id, std_id) => {
    return studentsdata.filter(
      (student) =>
        student.std_id !== std_id && student.project_id === project_id
    );
  };

  const fetchStudentData = async (std_id) => {
    try {
      const response = await axios.get(
        `http://localhost/syn2sign/students/${std_id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching project data:", error);
      const localStudent = findStudentById(std_id);
      if (localStudent) {
        return localStudent;
      }
    }
  };

  const fetchProjectData = async (project_id) => {
    try {
      const response = await axios.get(
        `http://localhost/syn2sign/projects/${project_id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching student data:", error);
      const localProject = findProjectById(project_id);
      if (localProject) {
        return localProject;
      }
    }
  };

  const fetchOtherStudentsData = async (project_id, std_id) => {
    try {
      const response = await axios.get(
        `http://localhost/syn2sign/otherstudents/${project_id}/${std_id}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching other sudent data:", error);
      const localOtherStudent = findOtherStudentsByProjectId( project_id, std_id);
      if (localOtherStudent) {
        return localOtherStudent;
      }
    }
  };

  const Getstudents = async () => {
    try {
      // const std_id = 631310081;
      const studentData = await fetchStudentData(std_id);
      setStudent(studentData);

      const project_id = studentData.project_id;

      const otherStudentsData = await fetchOtherStudentsData( project_id, std_id);
      const dataToUse = otherStudentsData.length > 0 ? otherStudentsData : findOtherStudentsByProjectId(project_id, std_id);
      setOtherStudents(dataToUse);
      // console.log("Data to use for other students:", dataToUse);

      const projectData = await fetchProjectData(project_id);
      setProject(projectData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    Getstudents();
  }, []);

  // console.log(otherStudents);
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
      <PageElement />

      <div className="container mt-5 position-relative">
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
            <h3 className="text-start">contact to {student.nickname_en}</h3>
            <div className="icon-link-con">
              <a
                href={`mailto:${student.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="txt-link"
              >
                <span className="icon-crl me-2">
                  <LuMail />
                </span>
                <span>{student.email}</span>
              </a>
            </div>
            <div className="icon-link-con">
              <a
                href={student.linkin}
                target="_blank"
                rel="noopener noreferrer"
                className="txt-link"
              >
                <span className="icon-crl me-2">
                  <FaLinkedinIn />
                </span>
                <span>{student.name_en}</span>
              </a>
            </div>
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
        <SectionTitle
          title={`${student.nickname_en}\u2019s INTERVIEWS`}
          subtitle={`บทสัมภาษณ์ของ${student.nickname_th}`}
        />
        <SectionTitle
          title={`${student.nickname_en}\u2019s role in Syn2sign`}
          subtitle={`บทสัมภาษณ์ของ${student.nickname_th}`}
        />
        <SectionTitle
          title={`${student.nickname_en} collaborate`}
          subtitle={`ผู้ที่ทำงานร่วมกับ${student.nickname_th}`}
          className={"header-wline"}
        />
        <div className="row">
          {otherStudents.map((student, index) => (
            <div className="row" key={index}>
              <div className="col">
                <img
                  src={`/profile_img/${student.profile_img}`}
                  alt="other creator profile"
                  style={{
                    maxWidth: "20vw",
                    width: "100%",
                    borderRadius: "1.2rem",
                  }}
                  loading="lazy"
                />
                <span className="d-flex flex-column">
                  ({student.nickname_en}) {student.name_en}
                  <span>
                    {student.name_th}({student.nickname_th})
                  </span>
                </span>
              </div>
              <div className="col">
                <div>
                  <img
                    src={`/icon/double-qoute.svg`}
                    alt="double qoute"
                    style={{ maxWidth: "5vw", width: "100%" }}
                    loading="lazy"
                  />
                  <span>{student.qoutes}</span>
                </div>
                <hr />
                <div className="icon-link-con">
                  <a
                    href={`mailto:${student.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="txt-link"
                  >
                    <span className="icon-crl me-2">
                      <LuMail />
                    </span>
                    <span>{student.email}</span>
                  </a>
                </div>
                <div className="icon-link-con">
                  <a
                    href={student.linkin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="txt-link"
                  >
                    <span className="icon-crl me-2">
                      <FaLinkedinIn />
                    </span>
                    <span>{student.name_en}</span>
                  </a>
                </div>
                <Link
                  to={`/showcase/creators/${student.std_id}`}
                  onClick={handleLinkClick}
                  className="txt-link"
                  style={{
                    border: ".1rem solid",
                    padding: ".4rem .8rem",
                    borderRadius: "100px",
                  }}
                >
                  <span className="txt-upper">
                    <strong>read more</strong>
                  </span>
                  <span className="ms-2">
                    <FaReadme />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Students;
