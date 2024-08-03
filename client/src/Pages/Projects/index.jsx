import { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";
import { Link, useParams } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Accordions from "./Accordion/Accordion";
import projectsdata from "/public/data/Projectdata";
import Creators from "./Creators/Creator";
import { Container } from "react-bootstrap";


function Project() {
  const [project, setProject] = useState(null);
  const [students, setStudents] = useState([]);
  const { prj_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeProject, setActiveProject] = useState(
    localStorage.getItem("activeProject") || null
  );
  // console.log(projectsdata);
  // const prj_id = "cpl01";
  
  const items = [
    {
      title: "idea concept",
      subtitle: "แนวคิดของผลงาน",
      content: "Content for section 1",
    },
    {
      title: "Key WORD",
      subtitle: "คำค้นหา / คำสำคัญ ",
      content: "Content for section 2",
    },
    {
      title: "MAIN Function",
      subtitle: "ฟังก์ชันหลัก",
      content: "Content for section 3",
    },
    {
      title: "DEVELOPMENT TOOLs",
      subtitle: "เครื่องมือในการพัฒนาผลงาน",
      content: "Content for section 3",
    },
    {
      title: "DESIGN & PRESENTATION TOOLs",
      subtitle: "เครื่องมือในการออกแบบ และนำเสนอผลงาน",
      content: "Content for section 3",
    },
    {
      title: "Design PROCESS",
      subtitle: "กระบวนการออกแบบผลงาน",
      content: "Content for section 3",
    },
    {
      title: "target group",
      subtitle: "กลุ่มเป้าหมาย",
      content: "Content for section 3",
    },
    {
      title: "Testing & Feedback",
      subtitle: "ทดสอบจากผู้ใช้งาน และผลตอบรับ",
      content: "Content for section 3",
    },
    {
      title: "video demo",
      subtitle: "คลิปวิดีโอสาธิตการใช้งาน",
      content: "Content for section 3",
    },
    {
      title: "creator",
      subtitle: "ผู้สร้างผลงาน",
      content: " ",
    },
  ];

   const fetchProject = async () => {
     setLoading(true);
     try {
       if (prj_id) {
         const response = await axios.get(
           `http://localhost/syn2sign/projects/${prj_id}`
         );
         setProject(response.data);
         setActiveProject(prj_id);
         localStorage.setItem("activeProject", prj_id);
       } else {
         setError("Project ID is missing");
       }
     } catch (error) {
       setError("Error fetching project data");
       console.error(error);
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
      setError("Error fetching student data");
      console.error(error);
    }
  };
  useEffect(() => {
    fetchProject();
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
                     <Link
                       to={`/showcase/creators/${student.std_id}`}
                       className="txt-link"
                     >
                       <Creators
                         nameEN={student.name_en}
                         nicknameEN={student.nickname_en}
                         nameTH={`${student.name_th} (${student.nickname_th})`}
                         email={student.email}
                         linkedin={student.linkin}
                         qoutes={student.qoutes}
                         profileImg={`/profile_img/${student.profile_img}`}
                       />
                     </Link>
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
      <img src="/icon/ele-head-l.svg" className="ele-head-l" alt="" />
      <img src="/icon/ele-head-r.svg" className="ele-head-r" alt="" />
      <div className="bg-gd-btr"></div>

      <Container className="mt-5 position-relative">
        <div>
          {matchedStudents.length > 0 ? (
            matchedStudents.map((student) => (
              <div key={student.id}>
                <Creators
                  stdID={student.std_id}
                  nameEN={student.name_en}
                  nicknameEN={student.nickname_en}
                  nameTH={`${student.name_th} (${student.nickname_th})`}
                  email={student.email}
                  linkedin={student.linkin}
                  qoutes={student.qoutes}
                  profileImg={`/profile_img/${student.profile_img}`}
                />
              </div>
            ))
          ) : (
            <p>No students found</p>
          )}
        </div>
        <div className="project-content-sec">
          <div className="row">
            <div className="col">
              <div className="d-flex">
                <img
                  src={`/icon/prj/${project.icon}`}
                  alt="project icon"
                  className="prj-sec-icon"
                />
                <div className="text-start mx-4">
                  <h1 className="txt-scu-head ">
                    <strong>{project.name_en}</strong>
                  </h1>
                  <p>({project.name_th})</p>
                </div>
                <hr className="prj-name-line" />
                <h1 className="outlined-text">#{project.id}</h1>
                <img
                  src={`/icon/prj/${project.icon_std}`}
                  alt="creator icon"
                  className="prj-sec-icon"
                />
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
                className="video-box"
              ></iframe>
            </div>
          </div>
          <Accordions items={itemsWithStudents} />
          <div className="mt-4">
            <div className="col">
              <div className="text-start mb-4 header-wline">
                <h3 className="txt-upper">
                  <strong>Other Projects</strong>
                </h3>
                <span className="txt-grey">ผลงานอื่นๆ</span>
              </div>
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
                      onClick={() => {
                        setActiveProject(proj.project_id);
                        localStorage.setItem("activeProject", proj.project_id);
                      }}
                      className="link-txt"
                    >
                      <div className="d-flex flex-column align-items-center">
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
        </div>
      </Container>
    </>
  );
}
export default Project;
