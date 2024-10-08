import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import studentsdata from "../../../public/data/Studentdata";
import { FaReadme } from "react-icons/fa6";

const CardCreator = () => {
  const [studentData, setStudentData] = useState([]);
  const { prj_id } = useParams();

  
  useEffect(() => {
    const projectId = prj_id;
    if (projectId) {
      // Find all student data by project ID
      const filteredData = studentsdata.filter(
        (data) => data.project_id === projectId
      );
      setStudentData(filteredData);
    }
  }, [prj_id]);

  if (studentData.length === 0) {
    return <div>Loading...</div>; // or a loading spinner
  }
  
  // Split the data into two halves
  const midIndex = Math.ceil(studentData.length / 2);
  const firstHalf = studentData.slice(0, midIndex);
  const secondHalf = studentData.slice(midIndex);

  return (
    <div className="d-flex row" style={{ marginTop: "-50px" }}>
      <div className="col-5 d-none d-md-block">
        {/* Assuming the same image for demonstration purposes */}
        <CreatorImg
          src={`${import.meta.env.VITE_BASE_URL}images/creator_img/${studentData[0].project_id}.png`}
          //   style={{ marginTop: "-60px" }}
        />
      </div>
      <div className="col-7 d-none d-md-block">
        {studentData.map((student, index) => (
          <DetailBox key={index}>
            <div className="d-flex align-items-start text-start">
              <DoubleQoute
                src={`${import.meta.env.VITE_BASE_URL}icon/double-qoute.svg`}
                alt="double quote"
                loading="lazy"
                className="me-4"
              />
              <span className="txt-body2">{student.qoutes}</span>
            </div>
            <Boxline />
            <div className="text-start">
              <IconImage src= {import.meta.env.VITE_BASE_URL+"images/creator_img/email.svg"} alt="email" />
              <span className="ms-3">
                <a href={`mailto:${student.email}`} className="txt-link">
                  {student.email}
                </a>
              </span>
            </div>
            <div className="text-start mt-3">
              <IconImage
                src={import.meta.env.VITE_BASE_URL+"images/creator_img/linkedin.svg"}
                alt="linkedin"
              />
              <span className="ms-3">
                <a
                  href={
                    student.linkin.startsWith("http")
                      ? student.linkin
                      : `https://${student.linkin}`
                  }
                  className="txt-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {student.name_en}
                </a>
              </span>
            </div>
            <BtnBox>
              <Link
                to={`/showcase/creators/${student.std_id}`}
                className="txt-link"
              >
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

      <div className="col-12 d-block d-md-none">
        <CreatorImg
          src={`${import.meta.env.VITE_BASE_URL}images/creator_img/project/${studentData[0].std_id}.png`}
        />
      </div>

      <div className="col-12 mt-5 d-block d-md-none">
        {firstHalf.map((student, index) => (
          <DetailBox key={index}>
            <div className="d-flex align-items-start text-start">
              <DoubleQoute
                src={`${import.meta.env.VITE_BASE_URL}icon/double-qoute.svg`}
                alt="double quote"
                loading="lazy"
                className="me-4"
              />
              <span className="txt-body2">{student.qoutes}</span>
            </div>
            <Boxline />
            <div className="text-start">
              <IconImage src= {import.meta.env.VITE_BASE_URL+"images/creator_img/email.svg"} alt="email" />
              <span className="ms-3 ">
                <a href={`mailto:${student.email}`} className="txt-link txt-body3">
                  {student.email}
                </a>
              </span>
            </div>
            <div className="text-start mt-3">
              <IconImage
                src={import.meta.env.VITE_BASE_URL+"images/creator_img/linkedin.svg"}
                alt="linkedin"
              />
              <span className="ms-3">
                <a
                  href={
                    student.linkin.startsWith("http")
                      ? student.linkin
                      : `https://${student.linkin}`
                  }
                  className="txt-link txt-body3 txt-body3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {student.name_en}
                </a>
              </span>
            </div>
            <BtnBox>
              <Link
                to={`/showcase/creators/${student.std_id}`}
                className="txt-link txt-body3"
              >
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

      <div className="col-12 mt-5 d-block d-md-none">
        <CreatorImg
          src={`${import.meta.env.VITE_BASE_URL}images/creator_img/project/${studentData[1].std_id}.png`}
        />
      </div>

      <div className="col-12 mt-5 d-block d-md-none">
        {secondHalf.map((student, index) => (
          <DetailBox key={index}>
            <div className="d-flex align-items-start text-start">
              <DoubleQoute
                src={`${import.meta.env.VITE_BASE_URL}icon/double-qoute.svg`}
                alt="double quote"
                loading="lazy"
                className="me-4"
              />
              <span className="txt-body2">{student.qoutes}</span>
            </div>
            <Boxline />
            <div className="text-start">
              <IconImage src={import.meta.env.VITE_BASE_URL+"images/creator_img/email.svg"} alt="email" />
              <span className="ms-3">
                <a href={`mailto:${student.email}`} className="txt-link txt-body3">
                  {student.email}
                </a>
              </span>
            </div>
            <div className="text-start mt-3">
              <IconImage
                src={import.meta.env.VITE_BASE_URL+"images/creator_img/linkedin.svg"}
     
                alt="linkedin"
              />
              <span className="ms-3">
                <a
                  href={
                    student.linkin.startsWith("http")
                      ? student.linkin
                      : `https://${student.linkin}`
                  }
                  className="txt-link txt-body3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {student.name_en}
                </a>
              </span>
            </div>
            <BtnBox>
              <Link
                to={`/showcase/creators/${student.std_id}`}
                className="txt-link txt-body3"
              >
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
  max-width: 1.5rem;
  width: 100%;
`;

const CreatorImg = styled.img`
  width: 100%;
  height: auto;
`;

const Boxline = styled.hr`
  border: 0.07rem solid var(--color-grey);
  opacity: 1;
`;

const DoubleQoute = styled.img`
  max-width: 4vw;
  width: 100%;
`;

const DetailBox = styled.div`
  padding: 2rem;
  border: 0.08rem solid var(--color-grey);
  border-radius: 1rem;
  margin-bottom: 1rem; /* Add margin to separate multiple DetailBoxes */
`;

const BtnBox = styled.div`
  padding: 1.8rem 0 0.5rem 0rem;
`;

const ReadMore = styled.span`
  width: fit-content;
  border: 0.1rem solid;
  padding: 0.4rem 0.4rem;
  border-radius: 100px;
  transition: all 0.3s ease;
  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
  }
`;
