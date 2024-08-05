import { useState, useEffect } from "react";
import "./showcase.css";
// import { Link } from "react-router-dom";
import axios from "axios";
import { Container } from "react-bootstrap";
import projectdata from "../../../public/data/Projectdata";
import studentsdata from "../../../public/data/Studentdata";
import PageElement from "../../component/Element/PageElement";
import Tabs from "./Tabs/Tabs";
import TabContent from "./Tabs/TabContents";


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
      if (studentsdata) {
        setStudents(studentsdata);
      }
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
      if (projectdata) {
        setStudents(projectdata);
      }
    }
  };

  useEffect(() => {
    fetchProjects();
    fetchStudents();
  }, []);

  
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#project") {
      setActiveTab(1);
    } else if (hash === "#creator") {
      setActiveTab(2);
    }
  }, []);

  // Handle tab changes in state and update URL hash
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
    if (tabIndex === 1) {
      window.location.hash = "project";
    } else if (tabIndex === 2) {
      window.location.hash = "creator";
    }
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
      <PageElement />
      <Container className="position-relative my-5">
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
        <TabContent
          activeTab={activeTab}
          updatedProjects={updatedProjects}
          updatedStudents={updatedStudents}
          projects={projects}
          students={students}
        />
      </Container>
    </>
  );
}

export default Showcase;