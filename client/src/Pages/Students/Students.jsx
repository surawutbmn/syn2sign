import { useState, useEffect } from "react";
import axios from "axios";

function Students() {
  const [student, setStudent] = useState(null);
  const [project, setProject] = useState({});
  const [otherStudents, setOtherStudents] = useState([]);

  const Getstudents = async () => {
    try {
      const std_id = 631310081;
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

  if (!student) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-start">
              Get to know N ํ {student.nickname_en}, <br />
              Maker of{" "}
              <img
                src={`/icon/prj/${project.icon}`}
                alt=""
                style={{ maxWidth: "5vw", width: "100%" }}
                loading="lazy"
              />{" "}
              {project.name_en} {project.type}
            </h2>
            <h3 className="text-start">{student.qoutes}</h3>
          </div>
          <div className="col">
            <div className="text-start">
              <img
              loading="lazy"
                src={`/profile_img/${student.profile_img}`}
                alt=""
                style={{ maxWidth: "30vw", width: "100%", borderRadius: "5%" }}
              />
              <h3>
                {student.name_en} ({student.nickname_en})
              </h3>
              <h3>
                {student.name_th}({student.nickname_th})
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h1>collaborate</h1>
            <img
              src={`/profile_img/${otherStudents.profile_img}`}
              alt=""
              style={{ maxWidth: "20vw", width: "100%", borderRadius: "5%" }}
              loading="lazy"
            />
          </div>
          <div className="col">
            <p>
              ({otherStudents.nickname_en}) {otherStudents.name_en}
              {otherStudents.name_th}({otherStudents.nickname_th})
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Students;
