import { Row } from "react-bootstrap";
import PropTypes from "prop-types";
import ProjectCard from "../Cards/ProjectsCard";
import projectsdata from "../../../../public/data/Projectdata";
import studentsdata from "../../../../public/data/Studentdata";
import StudentCard from "../Cards/StudentsCard";


const TabContent = ({
  activeTab,
  updatedProjects,
  updatedStudents,
}) => (
  <div className="tab-content">
    {activeTab === 1 && (
      <Row xs={2} xl={3} className="g-4">
        {updatedProjects.length === 0
          ? projectsdata.map((proj) => (
              <ProjectCard key={proj.id} project={proj} />
            ))
          : updatedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </Row>
    )}
    {activeTab === 2 && (
      <Row xs={2} md={3} xl={4} className="g-4">
        {updatedStudents.length === 0
          ? studentsdata.map((std) => (
              <StudentCard key={std.id} student={std} />
            ))
          : updatedStudents.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
      </Row>
    )}
  </div>
);

TabContent.propTypes = {
  activeTab: PropTypes.number.isRequired,
  updatedProjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  updatedStudents: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TabContent;
