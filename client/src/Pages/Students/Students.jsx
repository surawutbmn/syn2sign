import { useState, useEffect } from "react";
import axios from "axios";

function Students() {
  const [student, setStudent] = useState(null);
  const [project, setProject] = useState({});
  const [otherStudents, setOtherStudents] = useState([]);

  useEffect(() => {
    // Fetch the primary student data
    const std_id = 631310081;
    axios
      .get(`http://localhost:3001/students/${std_id}`)
      .then((response) => {
        setStudent(response.data);

        const project_id = response.data.project_id;
        fetch(`http://localhost:3001/projects/${project_id}`)
          .then((response) => response.json())
          .then((projectData) => {
            setProject({
              id: projectData[0].id,
              project_id: projectData[0].project_id,
              name_en: projectData[0].name_en,
              name_th: projectData[0].name_th,
              type: projectData[0].type,
              icon: projectData[0].icon,
            });

            fetch(`http://localhost:3001/Otherstudents/${project_id}/${std_id}`)
              .then((response) => response.json())
              .then((otherStudentsData) => {
                setOtherStudents({
                  name_th: otherStudentsData[0].name_th,
                  name_en: otherStudentsData[0].name_en,
                  nickname_th: otherStudentsData[0].nickname_th,
                  nickname_en: otherStudentsData[0].nickname_en,
                  profile_img: otherStudentsData[0].profile_img,
                  qoutes: otherStudentsData[0].qoutes,
                  email: otherStudentsData[0].email,
                  linkin: otherStudentsData[0].linkin,
                  portfolio_link: otherStudentsData[0].portfolio_link,
                  resume_filename: otherStudentsData[0].resume_filename,
                });
              })
              .catch((error) => {
                console.error("Error fetching other students:", error);
              });
          })
          .catch((error) => {
            console.error("Error fetching project data:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);
  if (!student) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="row">
        <div className="col">
          <h2 className="text-start">
            Get to know N ํ {student.nickname_en}, <br />
            Maker of{" "}
            <img
              src={`/icon/prj/${project.icon}`}
              alt=""
              style={{ maxWidth: "5vw", width: "100%" }}
            />{" "}
            {project.name_en} {project.type}
          </h2>
          <h3 className="text-start">{student.qoutes}</h3>
        </div>
        <div className="col">
          <div className="text-start">
            <img
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
          />
        </div>
        <div className="col">
          <p>
            ({otherStudents.nickname_en}) {otherStudents.name_en}
            {otherStudents.name_th}({otherStudents.nickname_th})
          </p>
        </div>
      </div>
    </>
  );
}
export default Students;
