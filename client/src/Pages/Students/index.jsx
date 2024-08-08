import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { LuMail } from "react-icons/lu";
import { FaHandshakeSimple, FaLinkedinIn } from "react-icons/fa6";
import projectdata from "../../../public/data/Projectdata";
import studentsdata from "../../../public/data/Studentdata";
import SectionTitle from "../../component/SectionTitle";
import PageElement from "../../component/Element/PageElement";
import Creators from "../Projects/AccordionContent/Creator";
import InterviewCard from "./InterviewCard";
import { Col, Container, Row } from "react-bootstrap";
import RecTools from "./RecTools";
import ExhibitImg from "./ExhibitImg";


function Students() {
  const [student, setStudent] = useState(null);
  const [project, setProject] = useState({});
  const [otherStudents, setOtherStudents] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [role, setRole] = useState([]);
  const [dev, setDev] = useState([]);
  const [design, setDesign] = useState([]);
  const { std_id } = useParams();
  const navigate = useNavigate();

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
      const studentData = response.data; // Assuming response.data is the student data

      if (studentData.question) {
        const parsedQuestion = JSON.parse(studentData.question);
        setQuestions(parsedQuestion); // Assuming setQuestions is a state setter function
      }
      
      if (studentData.roles) {
        const parsedRole = JSON.parse(studentData.roles); // Parse the role JSON string
        setRole(parsedRole); // Set the parsed role
      }
      if (studentData.devtool) {
        const parsedDev = JSON.parse(studentData.devtool); // Parse the role JSON string
        setDev(parsedDev); // Set the parsed role
      }
      if (studentData.designtool) {
        const parsedDesign = JSON.parse(studentData.designtool); // Parse the role JSON string
        setDesign(parsedDesign); // Set the parsed role
      }

      return studentData; // Return the fetched student data
    } catch (error) {
      console.error("Error fetching student data:", error);
      const localStudent = findStudentById(std_id);
      if (localStudent) {
        if (localStudent.roles) {
          setRole(localStudent.roles); // Directly set the roles if available
        }
        if (localStudent.question) {
          setQuestions(localStudent.question); // Directly set the roles if available
        }
        return localStudent; // Return local data if the API call fails
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
      const localOtherStudent = findOtherStudentsByProjectId(
        project_id,
        std_id
      );
      if (localOtherStudent) {
        return localOtherStudent;
      }
    }
  };

  const GetData = async () => {
    try {
      // const std_id = 631310081;
      const studentData = await fetchStudentData(std_id);
      setStudent(studentData);

      const project_id = studentData.project_id;

      const otherStudentsData = await fetchOtherStudentsData(
        project_id,
        std_id
      );
      const dataToUse =
        otherStudentsData.length > 0
          ? otherStudentsData
          : findOtherStudentsByProjectId(project_id, std_id);
      setOtherStudents(dataToUse);
      // console.log("Data to use for other students:", dataToUse);

      const projectData = await fetchProjectData(project_id);
      setProject(projectData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    GetData();
  }, [std_id]);
  
  const handleStudentClick = (studentId) => {
    navigate(`/showcase/creators/${studentId}`);
    window.scrollTo(0, 0); // Scroll to top after navigation
  };

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

      <Container className="mt-5 position-relative">
        <div className="d-flex">
          <div className="text-start col-7">
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
            <div className="d-flex align-items-baseline justify-content-end my-5">
              <img
                src={`/icon/double-qoute.svg`}
                alt="double qoute"
                style={{ maxWidth: "5vw", width: "100%" }}
                loading="lazy"
              />
              <h3 className="text-start ms-3">{student.qoutes}</h3>
            </div>
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
              src={`/creator_img/profile/${student.profile_img}`}
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
        <ExhibitImg name={student.nickname_en} />
        <SectionTitle
          title={`${student.nickname_en}\u2019s INTERVIEWS`}
          subtitle={`บทสัมภาษณ์ของ${student.nickname_th}`}
          className=""
        />
        <Row xs={1} className="g-5 mb-5">
          {questions.length > 0 &&
            questions.map((question, index) => (
              <Col key={index}>
                <InterviewCard
                  id={question.id}
                  img={question.img}
                  std={`${student.nickname_th}`}
                  ig={question.ig || "C9wRgcMMBlJ"}
                  yt={question.yt || "Uy9GKzld7jI"}
                  time={question.time}
                  title1={question.title1}
                  title2={question.title2}
                />
              </Col>
            ))}
          {dev.length > 0 &&
            dev.map((devItem, index) => (
              <Col key={index}>
                <img src={`/tools/devTool/${devItem.icon}`} alt="" />
                {devItem.name} {devItem.desc}
              </Col>
            ))}
          {design.length > 0 &&
            design.map((designItem, index) => (
              <Col key={index}>
                <img src={`/tools/designTool/${designItem.icon}`} alt="" />

                {designItem.icon}
                {designItem.name}
                {designItem.desc}
              </Col>
            ))}
          <Col>
            <RecTools />
          </Col>
        </Row>
        <SectionTitle
          title={`${student.nickname_en}\u2019s role in Syn2sign`}
          subtitle={`บทบาทของ${student.nickname_th}ใน Syn2sign`}
        />
        <Row>
          {role.length > 0 &&
            role.map((roleItem, index) => {
              return (
                <Col key={index}>
                  <img src={`/icon/roles/${roleItem.icon}`} alt="" />
                  {roleItem.name}
                </Col>
              );
            })}
        </Row>

        <SectionTitle
          title={`${student.nickname_en} collaborate`}
          subtitle={`ผู้ที่ทำงานร่วมกับ${student.nickname_th}`}
          className={"header-wline mt-5"}
        />
        <div className="row">
          {otherStudents.map((student, index) => (
            <div className="row" key={index}>
              <Creators
                nameEN={student.name_en}
                email={student.email}
                linkedin={student.linkin}
                qoutes={student.qoutes}
                profileImg={`/creator_img/078-card.png`}
                stdID={student.std_id}
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}
export default Students;
