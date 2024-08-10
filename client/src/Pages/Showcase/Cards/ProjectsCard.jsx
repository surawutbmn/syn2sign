import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import styled from "styled-components";


const ProjectCard = ({ project }) => (
  <Col>
    <CardProjects>
      <Link
        to={`/showcase/projects/${project.project_id}`}
        className="card-link"
      >
        <div className="d-flex align-items-start">
          <div className="projects-card-icon me-3">
            <img
              src={`/icon/prj/${project.icon_card}`}
              alt="project icon"
              loading="lazy"
            />
          </div>
          <HeadText>
            <Title>
              <strong>
                #{project.id} {project.name_en}
              </strong>
            </Title>
            <p className="line-clamp-2">{project.fullname_th}</p>
          </HeadText>
        </div>
        <hr />
        <CreatorSec>
          <div className="creators-icon">
            <img
              src={`/icon/prj/${project.icon_std}`}
              alt="creators icon"
              loading="lazy"
            />
          </div>
          <CreatorName className="text-start">
            Sync to Creator
            <br />
            {project.students && project.students.length > 0 ? (
              project.students.map((student) => (
                <span className="txt-dark" key={student.id}>
                  {student.name_en} ({student.nickname_en})
                  <br />
                </span>
              ))
            ) : (
              <p>No creators listed.</p>
            )}
          </CreatorName>
        </CreatorSec>
        <ImgThumb className="card-prj-thumb d-none d-md-flex">
          <img
            src={`/icon/prj/${project.img_thumb}`}
            alt="project thumbnail"
            loading="lazy"
          />
        </ImgThumb>
      </Link>
    </CardProjects>
  </Col>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    project_id: PropTypes.string.isRequired,
    name_en: PropTypes.string.isRequired,
    fullname_th: PropTypes.string.isRequired,
    icon_card: PropTypes.string.isRequired,
    icon_std: PropTypes.string.isRequired,
    img_thumb: PropTypes.string.isRequired,
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name_en: PropTypes.string.isRequired,
        nickname_en: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default ProjectCard;

const CreatorName = styled.div`
  margin-left: 1rem;
  font-size: 0.7rem;
  line-height: 1.3;
`;
const CreatorSec = styled.div`
  display: flex;
  color: var(--color-grey);
  margin-bottom: 1rem;
  img{width: 100%;}
`;
const HeadText = styled.div`
  text-align: left;
  color: var(--color-grey);
`;
const Title = styled.h4`
  color: var(--color-secondary);
  font-weight: var(--txt-sbold);
`;
const ImgThumb = styled.div`
  overflow: hidden;
  border-radius: 1.2rem;
  img {
    width: 100%;
  }
`;
const CardProjects = styled.div`
  background-color: var(--color-light);
  padding: 20px 15px;
  border-radius: 16px;
  &:hover .card-prj-thumb img {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }
  hr {
    margin: -0.3rem 0 1rem 0;
  }
  .creators-icon {
    min-width: 5dvw;
  }
  .projects-card-icon img {
    width: 5.3dvw;
  }
`;