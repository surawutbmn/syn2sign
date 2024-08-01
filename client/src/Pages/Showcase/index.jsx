import { useState, useEffect } from "react";
import "./showcase.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import projectdata from "../../../public/data/Projectdata";
import studentsdata from "../../../public/data/Studentdata";


function Showcase() {
  const [activeTab, setActiveTab] = useState(
    parseInt(localStorage.getItem("activeTab")) || 1
  );
  const [projects, setProjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [updatedStudents, setUpdatedStudents] = useState([]);
  const [updatedProjects, setUpdatedProjects] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`http://localhost/syn2sign/students`);
      // console.log("API response for students:", response.data);
      if (Array.isArray(response.data)) {
        setStudents(response.data);
      } else {
        console.error("Expected an array but received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`http://localhost/syn2sign/projects`);
      // console.log("API response:", response.data);
      if (Array.isArray(response.data)) {
        setProjects(response.data);
      } else {
        console.error("Expected an array but received:", response.data);
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchStudents();
  }, []);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    localStorage.setItem("activeTab", tabIndex);
  };

  useEffect(() => {
    if (projects.length && students.length) {
      // Update students with project data
      const updatedStudents = students.map((student) => {
        const project = projects.find(
          (proj) => proj.project_id === student.project_id
        );
        return project ? { ...student, project } : student;
      });
      setUpdatedStudents(updatedStudents);

      // Update projects with student data
      const updatedProjects = projects.map((project) => {
        const projectStudents = students.filter(
          (student) => student.project_id === project.project_id
        );
        return { ...project, students: projectStudents };
      });
      setUpdatedProjects(updatedProjects);
    }
  }, [projects, students]);

  return (
    <>
      {/* <div className="bg-gd-btr"></div>
      <img src="/icon/ele-head-l.svg" className="ele-sch-l" alt="" />
      <img src="/icon/ele-head-r.svg" className="ele-sch-r" alt="" /> */}
      <Container className="position-relative my-5">
        <div className="tabs">
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="/icon/prj-tab.svg"
                alt="tab icon"
                className={`me-3 tab-icon ${
                  activeTab === 1 ? "active-icon" : ""
                }`}
              />
              8 Projects
            </div>
          </div>
          <div
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            <div className="d-flex align-items-center justify-content-center">
              <img
                src="/icon/creator-tab.svg"
                className={`me-3 tab-icon ${
                  activeTab === 2 ? "active-icon" : ""
                }`}
                alt="tab icon"
              />
              8*2 Creators
            </div>
          </div>
        </div>
        <div className="tab-content">
          {activeTab === 1 && (
            <Row xs={2} xl={3} className="g-4">
              {updatedProjects.length === 0 &&
                projectdata.map((proj) => (
                  <Col key={proj.id}>
                    <div className="card-prj">
                      <Link
                        to={`/showcase/projects/${proj.project_id}`}
                        className="card-link"
                      >
                        <div className="card-prj-head">
                          <div className="card-prj-icon">
                            <img
                              src={`/icon/prj/${proj.icon_card}`}
                              alt="project icon"
                              loading="lazy"
                            />
                          </div>
                          <div className="card-prj-htxt">
                            <h4 className="card-prj-title">
                              #{proj.id} {proj.name_en}
                            </h4>
                            <p className="line-clamp-2">{proj.fullname_th}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="card-prj-body">
                          <div className="card-prj-body-img">
                            <img
                              src={`/icon/prj/${proj.icon_std}`}
                              alt="creator icon"
                              loading="lazy"
                            />
                          </div>
                          <div className="text-start card-prj-name">
                            Sync to Creator
                            <br />
                            <span>
                              {proj.ceator_1} <br />
                              {proj.ceator_2}
                            </span>
                          </div>
                        </div>
                        <div className="card-prj-btimg">
                          <img
                            src={`/icon/prj/${proj.img_thumb}`}
                            alt="project thumbnail"
                            loading="lazy"
                          />
                        </div>
                      </Link>
                    </div>
                  </Col>
                ))}
              {updatedProjects.map((project) => (
                <Col key={project.id}>
                  <div className="card-prj">
                    <Link
                      to={`/showcase/projects/${project.project_id}`}
                      className="card-link"
                    >
                      <div className="card-prj-head">
                        <div className="card-prj-icon">
                          <img
                            src={`/icon/prj/${project.icon_card}`}
                            alt="project icon"
                            loading="lazy"
                          />
                        </div>
                        <div className="card-prj-htxt">
                          <h4 className="card-prj-title">
                            #{project.id} {project.name_en}
                          </h4>
                          <p className="line-clamp-2">{project.fullname_th}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="card-prj-body">
                        <div className="card-prj-body-img">
                          <img
                            src={`/icon/prj/${project.icon_std}`}
                            alt="creator icon"
                            loading="lazy"
                          />
                        </div>
                        <div className="text-start card-prj-name">
                          Sync to Creator
                          <br />
                          {project.students && project.students.length > 0 ? (
                            project.students.map((student) => (
                              <span key={student.id}>
                                {student.name_en} ({student.nickname_en})
                                <br />
                              </span>
                            ))
                          ) : (
                            <p>No creators listed.</p>
                          )}
                        </div>
                      </div>
                      <div className="card-prj-btimg">
                        <img
                          src={`/icon/prj/${project.img_thumb}`}
                          alt="project thumbnail"
                          loading="lazy"
                        />
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          )}
          {activeTab === 2 && (
            <Row xs={3} xl={4} className="g-4">
              {updatedStudents.length === 0 &&
                studentsdata.map((std) => (
                  <Col xs={3} key={std.id}>
                    <div className="card-std">
                      <Link to={`/showcase/creators/${std.std_id}`} className="card-link">
                        <div className="read-more d-flex">
                          <img
                            src="/icon/read-more.svg"
                            alt="readmore icon"
                            className="rdm-icon"
                          />
                          <div className="rdm-text">READ MORE</div>
                        </div>
                        <div className="card-std-img">
                          <img
                            src={`/profile_img/${std.profile_img}`}
                            loading="lazy"
                            alt="creator profile"
                          />
                          <div className="card-std-overlay">
                            <div className="card-std-txt">
                              <span className="card-std-title">
                                {std.name_en}
                              </span>
                              <p className="card-std-cap">
                                Chanamon Kaewsomnuk (Mook)
                                <br />
                                เจ้าของผลงาน: #{std.project_id}{" "}
                                {std.project_name}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </Col>
                ))}
              {updatedStudents.map((student) => (
                <Col key={student.id}>
                  <div className="card-std">
                    <Link
                      to={`/showcase/creators/${student.std_id}`}
                      className="card-link"
                    >
                      <div className="read-more d-flex">
                        <img
                          src="/icon/read-more.svg"
                          alt="readmore icon"
                          className="rdm-icon"
                        />
                        <div className="rdm-text">READ MORE</div>
                      </div>
                      <div className="card-std-img">
                        <img
                          src={`/profile_img/${student.profile_img}`}
                          loading="lazy"
                          alt="creator profile"
                        />
                        <div className="card-std-txt">
                          <span className="card-std-title">
                            {student.name_en} ({student.nickname_en})
                          </span>
                          <p className="card-std-cap">
                            {student.name_th} ({student.nickname_th})
                            <br />
                            เจ้าของผลงาน: #{student.project?.id}{" "}
                            {student.project?.name_en || "Unknown"}
                          </p>
                        </div>
                        <div className="card-std-overlay"></div>
                      </div>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </Container>
    </>
  );
}

export default Showcase;
