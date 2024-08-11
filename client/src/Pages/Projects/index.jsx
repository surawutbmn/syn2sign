import { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";
import { Link, useParams } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Accordions from "./Accordion/Accordion";
import projectsdata from "/public/data/Projectdata";
import Creators from "./AccordionContent/Creator";
import { Container } from "react-bootstrap";
import SectionTitle from "../../component/SectionTitle";
import studentsdata from "../../../public/data/Studentdata";
import PageElement from "../../component/Element/PageElement";
import SocialApproved from "./AccordionContent/SocialApproved"
import CardThreePictureProject from "./AccordionContent/TopPicture";
import LinkButton from "../../component/Button/LinkButton";
import CardIdeaConcept from "../../component/card/CardIdeaConcept";
import CardKeyword from "../../component/card/CardKeyword";
import CardMainFunction from "../../component/card/CardMainFunction";
import CardToolDevelopment from "../../component/card/CardToolDevelopment";
import CardToolPresentation from "../../component/card/CardToolDesignPresentation";
import CardToolDesignPresentation from "../../component/card/CardToolDesignPresentation";
import CardDesignProcess from "../../component/card/CardDesignProcess";
import CardTargetGroup from "../../component/card/CardTargetGroup";
import CardFeedback from "../../component/card/CardFeedback";
import DesignProcessSlider from "../../component/Slider/DesignProcessSlider";
import styled from "styled-components";
import { FaArrowLeft } from "react-icons/fa";

function Project() {
  const [project, setProject] = useState(null);
  const [students, setStudents] = useState([]);
  const { prj_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keywords, setKeywords] = useState([]);

  const [activeProject, setActiveProject] = useState(
    localStorage.getItem("activeProject") || null
  );
  // console.log(projectsdata);
  // const prj_id = "cpl01";

  const findProjectById = (project_id) => {
    return (
      projectsdata.find((project) => project.project_id === project_id) || null
    );
  };
  const fetchProject = async (project_id) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost/syn2sign/projects/${project_id}`
      );
      const projectData = response.data;
      setProject(projectData);

      if (projectData.keyword) {
        const parsedKeywords = JSON.parse(projectData.keyword);
        setKeywords(parsedKeywords);
      }

      setActiveProject(project_id);
      localStorage.setItem("activeProject", project_id);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error fetching project data", error);
      setError("Error fetching project data");

      const localProject = findProjectById(project_id);
      if (localProject) {
        setProject(localProject);
        const keyword = localProject.keyword;
        setKeywords(keyword);

        setActiveProject(project_id);
        localStorage.setItem("activeProject", project_id);
        setError(null); // Clear any previous errors
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`http://localhost/syn2sign/students`);
      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else {
        console.error("Expected an array but received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching student data", error);
      setStudents(studentsdata);
    }
  };

  useEffect(() => {
    fetchProject(prj_id);
    fetchStudents();
  }, [prj_id]);

  useEffect(() => {
    if (project) {
      document.title = `${project.name_en} / ${project.fullname_th} - Syn2sign senior project exhibition 2024`;
    }
  }, [project]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!project) return <div>No project data available</div>;

  const getMatchedStudents = () => {
    return students.filter(
      (student) => student.project_id === project.project_id
    );
  };

  const matchedStudents = getMatchedStudents();
  // console.log(students);
  const items = [
    {
      title: "idea concept",
      subtitle: "แนวคิดของผลงาน",
      content: <CardIdeaConcept proj_id={prj_id} />,
    },
    {
      title: "KeyWORDS",
      subtitle: "คำค้นหา / คำสำคัญ ",
      content: <CardKeyword proj_id={prj_id} />,
    },
    {
      title: "MAIN Function",
      subtitle: "ฟังก์ชันหลัก",
      content: <CardMainFunction proj_id={prj_id} />,
    },
    {
      title: "DEVELOPMENT TOOLs",
      subtitle: "เครื่องมือในการพัฒนาผลงาน",
      content: <CardToolDevelopment />,
    },
    {
      title: "DESIGN & PRESENTATION TOOLs",
      subtitle: "เครื่องมือในการออกแบบ และนำเสนอผลงาน",
      content: <CardToolDesignPresentation />,
    },
    {
      title: "Design PROCESS",
      subtitle: "กระบวนการออกแบบผลงาน",
      content: <CardDesignProcess />,
    },
    {
      title: "target group",
      subtitle: "กลุ่มเป้าหมาย",
      content: <CardTargetGroup />,
    },
    {
      title: "Testing & Feedback",
      subtitle: "ทดสอบจากผู้ใช้งาน และผลตอบรับ",
      content: <CardFeedback />,
    },
    {
      title: "creator",
      subtitle: "ผู้สร้างผลงาน",
      content: " ",
    },
  ];
  const itemsWithStudents = items.map((item) => {
    if (item.title === "creator") {
      return {
        ...item,
        content: (
          <>
            <ul>
              {matchedStudents.length > 0 ? (
                matchedStudents.map((student) => (
                  <li key={student.id}>
                    <div>
                      <Creators
                        nameEN={student.name_en}
                        email={student.email}
                        linkedin={student.linkin}
                        qoutes={student.qoutes}
                        profileImg={`/creator_img/078-card.png`}
                        stdID={student.std_id}
                      />
                    </div>
                  </li>
                ))
              ) : (
                <p>No students found</p>
              )}
            </ul>
          </>
        ),
      };
    }
    return item;
  });

  return (
    <>
      <Helmet>
        {project
          ? `${project.name_en} ${project.name_th} - Syn2sign senior project exhibition 2024`
          : "Loading..."}
      </Helmet>
      <PageElement />
      <Container className="mt-5 position-relative">
        <BackBtn className="text-start link-txt txt-upper">
          <Link to={`/showcase#project`}>
            <FaArrowLeft className="me-2" size={20} />
            <strong>back</strong>
          </Link>
        </BackBtn>
        <div className="d-flex justify-content-around">
          <img
            src={`/icon/prj/${project.icon}`}
            alt="project icon"
            className="prj-sec-icon"
          />
          <div className="text-start mx-3">
            <h1 className="txt-pru-head ">
              <strong>{project.name_en}</strong>
            </h1>
            <p>({project.name_th})</p>
          </div>
          <hr className="prj-name-line" />
          <h1 className="outlined-text mx-3">#{project.id}</h1>
          <img
            src={`/icon/prj/${project.icon_std}`}
            alt="creator icon"
            className="prj-sec-icon"
          />
        </div>
        <div
          className="d-flex flex-column text-start mb-3 txt-body1 mt-3"
          style={{ width: "75%" }}
        >
          <span>
            <p>{project.fullname_th}</p>
          </span>
        </div>
        <div className="text-start txt-grey mb-1">Social Approved</div>
      </Container>

      <SocialApproved className="mb-4" />
      <Container>
        <CardThreePictureProject />
        <div className="mx-auto ratio ratio-16x9">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.shreel_link}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video-box"
          ></iframe>
        </div>
        <LinkButton className="mt-4" name={project.name_en} />
        <Accordions items={itemsWithStudents} />

        <div className="mt-4">
          <div className="col">
            <SectionTitle
              title="Other Projects"
              subtitle="ผลงานอื่นๆ"
              className="header-wline"
            />
            <div className="d-flex justify-content-around text-center mb-6">
              {projectsdata.map((proj) => (
                <div
                  key={proj.project_id}
                  className={`list-group-item ${
                    activeProject === proj.project_id ? "active" : ""
                  }`}
                >
                  <Link
                    to={`/showcase/projects/${proj.project_id}`}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default behavior of Link
                      setActiveProject(proj.project_id);
                      localStorage.setItem("activeProject", proj.project_id);
                      window.location.href = `/showcase/projects/${proj.project_id}`; // Force a full page reload
                    }}
                    className="link-txt"
                  >
                    <div
                      className="d-flex flex-column align-items-center"
                      style={{ width: "140px" }}
                    >
                      <div className="link-prj-con">
                        <div className="prj-check-i">
                          <BsCheckLg />
                        </div>
                        <div className="icon-prj-ovl"></div>
                        <img
                          className="icon-img-link"
                          src={`/icon/prj/${proj.icon_sqr}`}
                          alt={`${proj.name_en} icon`}
                        />
                      </div>
                      <div className="mt-3 fs-5 txt-upper">
                        <span>{proj.name_en}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
export default Project;

const BackBtn = styled.h3`
  a {
    &:hover {
      color: var(--color-primary);
    }
  }
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--color-light);
    transition: all 300ms ease;
  }
`;