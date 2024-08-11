import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import { useEffect, useState } from "react";

function ProjectCard({ project }) {
  const [gradientDegree, setGradientDegree] = useState(180); // Default value

  useEffect(() => {
    const degrees = [150, 180, 80];
    const randomIndex = Math.floor(Math.random() * degrees.length);
    setGradientDegree(degrees[randomIndex]);
  }, []);

  return (
    <Col>
      <CardProjects gradientDegree={gradientDegree}>
        <Link
          to={`/showcase/projects/${project.project_id}`}
          className="card-link"
        >
          <div className="d-flex align-items-start pt-3 px-3">
            <div className="projects-card-icon me-3">
              <img
                src={`/icon/prj/${project.icon_sqr}`}
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
          <div className="px-3">
            <hr />
          </div>
          <CreatorSec className="px-3">
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
              src={`/project_img/prj_thumb/${project.img_thumb}`}
              alt="project thumbnail"
              loading="lazy"
            />
          </ImgThumb>
        </Link>
      </CardProjects>
    </Col>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    project_id: PropTypes.string.isRequired,
    name_en: PropTypes.string.isRequired,
    fullname_th: PropTypes.string.isRequired,
    icon_card: PropTypes.string.isRequired,
    icon_sqr: PropTypes.string.isRequired,
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
  img {
    width: 100%;
  }
`;
const HeadText = styled.div`
  text-align: left;
  color: var(--color-grey);
`;
const Title = styled.h4`
  color: var(--color-primary);
  font-weight: var(--txt-sbold);
`;
const ImgThumb = styled.div`
  overflow: hidden;
  /* border-radius: 1.2rem; */
  img {
    width: 100%;
  }
`;
const CardProjects = styled.div`
  background-color: var(--color-light);
  /* padding: 20px 0 0 0; */
  border-radius: 1.2rem;
  overflow: hidden;
  &:hover {
    transform: scale3d(1.02, 1.02, 1.02);
    transition: transform 0.3s cubic-bezier(0.37, -0.59, 0.71, 1.44);
  }
  hr {
    margin: 0.1em 0 1em 0;
    border: 0.05em solid;
  }
  .creators-icon {
    min-width: 5em;
  }
  .projects-card-icon img {
    width: 3.5em;
    border-radius: 1.2rem;
  }
  .projects-card-icon {
    position: relative;
    width: 5em;
    background: rgb(255, 255, 255);
    border-radius: 1.2rem;
    font-size: 1.4em;
    &::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 1.2rem;
      padding: 0.2rem;
      background: ${({ gradientDegree }) =>
        `linear-gradient(${gradientDegree}deg,rgba(5, 186, 100, 1) 30%, rgba(67, 67, 67, 1) 100%)`};
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }
  }
  @media (max-width: 575.98px) {
    padding: 10px 15px;
    .projects-card-icon img {
      width: 4em;
    }
  }
`;
