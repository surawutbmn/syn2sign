import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import studentsdata from "../../../public/data/Studentdata";
import { FaReadme } from "react-icons/fa6";

const CardCreator = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // Extract project_id from URL
    const url = window.location.href;
    const projectIdMatch = url.match(/\/showcase\/projects\/([^\/]+)/);
    const projectId = projectIdMatch ? projectIdMatch[1] : null;

    if (projectId) {
      // Find all student data by project ID
      const filteredData = studentsdata.filter((data) => data.project_id === projectId);
      setStudentData(filteredData);
    }
  }, []);

  if (studentData.length === 0) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <div className='d-flex row'>
      <div className="col-5">
        {/* Assuming the same image for demonstration purposes */}
        <CreatorImg src={`/creator_img/${studentData[0].project_id}.png`} style={{ marginTop: "-60px" }} />
      </div>
      <div className="col-7">
        {studentData.map((student, index) => (
          <DetailBox key={index}>
            <div className="d-flex align-items-start text-start">
              <DoubleQoute
                src={`/icon/double-qoute.svg`}
                alt="double quote"
                loading="lazy"
                className="me-4"
              />
              <span className="txt-body1">{student.qoutes}</span>
            </div>
            <Boxline />
            <div className="text-start">
              <IconImage src="/creator_img/email.svg" alt="email" />
              <span className="ms-3">
                <a href={`mailto:${student.email}`} className="txt-link">
                  {student.email}
                </a>
              </span>
            </div>
            <div className="text-start mt-3">
              <IconImage src="/creator_img/linkedin.svg" alt="linkedin" />
              <span className="ms-3">
                <a href={student.linkin} className="txt-link" target="_blank" rel="noopener noreferrer">
                  {student.linkin}
                </a>
              </span>
            </div>
            <BtnBox>
              <Link to={`/showcase/creators/${student.std_id}`} className="txt-link">
                <ReadMore className="d-flex">
                  <span className="txt-upper">
                    <strong>read more</strong>
                  </span>
                  <span className="ms-2">
                    <FaReadme />
                  </span>
                </ReadMore>
              </Link>
            </BtnBox>
          </DetailBox>
        ))}
      </div>
    </div>
  );
};

export default CardCreator;

const IconImage = styled.img`
  max-width: 2.25rem;
  width: 100%;
`;

const CreatorImg = styled.img`
  width: 100%;
  height: auto;
`;

const Boxline = styled.hr`
  border: .07rem solid var(--color-grey);
  opacity: 1;
`;

const DoubleQoute = styled.img`
  max-width: 4vw;
  width: 100%;
`;

const DetailBox = styled.div`
  padding: 2rem;
  border: .08rem solid var(--color-grey);
  border-radius: 1rem;
  margin-bottom: 1rem; /* Add margin to separate multiple DetailBoxes */
`;

const BtnBox = styled.div`
  padding: 1.8rem 0 0.5rem 0rem;
`;

const ReadMore = styled.span`
  width: fit-content;
  border: 0.1rem solid;
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  transition: all 0.3s ease;
  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
  }
`;
