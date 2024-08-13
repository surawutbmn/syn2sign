import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import projectdata from "../../../public/data/Projectdata";
import studentsdata from "../../../public/data/Studentdata";
import SectionTitle from "../../component/SectionTitle";
import PageElement from "../../component/Element/PageElement";
import Creators from "../Projects/AccordionContent/Creator";
import InterviewCard from "./InterviewCard";
import { Container, Row } from "react-bootstrap";
import RecTools from "./RecTools";
import ExhibitImg from "./ExhibitImg";
import RoleCard from "./RoleCard";
import CreatorHeadSection from "./CreatorHeadSection";

function Students() {
  const [student, setStudent] = useState(null);
  const [project, setProject] = useState({});
  const [otherStudents, setOtherStudents] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [roles, setRole] = useState([]);
  const [tools, setTool] = useState([]);
  const { std_id } = useParams();

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
      const localStudent = findStudentById(std_id);
      if (localStudent) {
        if (localStudent.roles) {
          setRole(localStudent.roles); // Directly set the if available
        }
        if (localStudent.question) {
          setQuestions(localStudent.question); // Directly set the if available
        }
        if (localStudent.rectool) {
          setTool(localStudent.rectool); // Directly set the if available
        }

        return localStudent; // Return local data if the API call fails
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const fetchProjectData = async (project_id) => {
    try {
      const localProject = findProjectById(project_id);
      if (localProject) {
        return localProject;
      }
    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };

  const fetchOtherStudentsData = async (project_id, std_id) => {
    try {
      const localOtherStudent = findOtherStudentsByProjectId(
        project_id,
        std_id
      );
      if (localOtherStudent) {
        return localOtherStudent;
      }
    } catch (error) {
      console.error("Error fetching other sudent data:", error);
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

  // console.log(tools);

  // console.log(otherStudents);
  useEffect(() => {
    if (student && project) {
      document.title = `${student.nickname_en} (${student.name_en}) - Syn2sign senior project exhibition 2024`;
    }
    window.scrollTo(0, 0);
  }, [student, project, std_id]);

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
        <CreatorHeadSection student={student} project={project} />
        <ExhibitImg name={student.nickname_en} std_id={std_id} />
        <Container>
          <SectionTitle
            title={`${student.nickname_en}\u2019s INTERVIEWS`}
            subtitle={`บทสัมภาษณ์ของ${student.nickname_th}`}
            className=""
          />
          <InterviewCard question={questions} std={student.nickname_th} />
          <RecTools toolArr={tools} />
        </Container>
        <Container>
          <SectionTitle
            title={`${student.nickname_en}\u2019s role in Syn2sign`}
            subtitle={`บทบาทของ${student.nickname_th}ใน Syn2sign`}
          />
          <Row xs={2} md={3} className="gy-4 text-start">
            <RoleCard roleArr={roles} />
          </Row>
        </Container>
        <Container>
          <SectionTitle
            title={`${student.nickname_en}\u2019s collaborate`}
            subtitle={`ผู้ที่ทำงานร่วมกับ${student.nickname_th}`}
            className={"header-wline mt-5"}
          />
          <div className="my-5">
            {otherStudents.map((student, index) => (
              <Row key={index}>
                <Creators
                  nameEN={student.name_en}
                  email={student.email}
                  linkedin={student.linkin}
                  qoutes={student.qoutes}
                  profileImg={`/creator_img/078-card.png`}
                  stdID={student.std_id}
                />
              </Row>
            ))}
          </div>
        </Container>
      </Container>
    </>
  );
}
export default Students;
