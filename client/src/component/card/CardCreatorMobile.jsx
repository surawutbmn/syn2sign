import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import studentsdata from "../../../public/data/Studentdata";
import { FaReadme } from "react-icons/fa6";

const CardCreatorMobile = () => {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    // Extract project_id from URL
    const url = window.location.href;
    const projectIdMatch = url.match(/\/showcase\/projects\/([^\/]+)/);
    const projectId = projectIdMatch ? projectIdMatch[1] : null;

    if (projectId) {
      // Find all student data by project ID
      const filteredData = studentsdata.filter(
        (data) => data.project_id === projectId
      );
      setStudentData(filteredData);
    }
  }, []);

  if (studentData.length === 0) {
    return <div>Loading...</div>; // or a loading spinner
  }

  return (
    <div className="d-flex row">
     
    </div>
  );
};

export default CardCreatorMobile;

const IconImage = styled.img`
  max-width: 2.25rem;
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
  padding: 0.4rem 0.8rem;
  border-radius: 100px;
  transition: all 0.3s ease;
  &:hover {
    border-color: var(--color-primary);
    background-color: var(--color-primary);
  }
`;
