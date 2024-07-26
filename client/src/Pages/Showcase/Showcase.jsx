import { useState, useEffect } from "react";
import "./showcase.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
    <div className="container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <div className="d-flex align-items-center">
            <img
              src="/icon/prj-tab.svg"
              alt=""
              className={`me-3 tab-icon ${
                activeTab === 1 ? "active-icon" : ""
              }`}
            />
            8 Project
          </div>
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          <div className="d-flex align-items-center">
            <img
              src="/icon/creator-tab.svg"
              className={`me-3 tab-icon ${
                activeTab === 2 ? "active-icon" : ""
              }`}
              alt=""
            />
            8*2 Creator
          </div>
        </div>
      </div>
      <div className="tab-content">
        {activeTab === 1 && (
          <div className="row g-4">
            {updatedProjects.length === 0 && <p>No projects available.</p>}
            {updatedProjects.map((project) => (
              <div className="col-4" key={project.id}>
                <div className="card-prj">
                  <Link
                    to={`/showcase/project/${project.project_id}`}
                    className="card-link"
                  >
                    <div className="card-prj-head">
                      <div className="card-prj-icon">
                        <img
                          src={`/icon/prj/${project.icon_card}`}
                          alt=""
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
                          alt=""
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
                    <div className="card-prj-imgbt">
                      <img
                        src={`/icon/prj/${project.img_thumb}`}
                        className="card-img-bottom"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        {activeTab === 2 && (
          <div className="row g-4">
            {updatedStudents.length === 0 && <p>No students available.</p>}
            {updatedStudents.map((student) => (
              <div className="col-3" key={student.id}>
                <div className="card-std">
                  <Link
                    to={`/showcase/student/${student.std_id}`}
                    className="card-link"
                  >
                    <div className="card-std-img">
                      <img
                        src={`/profile_img/${student.thumb_img}`}
                        loading="lazy"
                        alt=""
                      />
                      <div className="card-std-overlay">
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
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Showcase;
