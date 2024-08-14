import React from "react";
import styled from "styled-components";
import { BiSolidCommentDetail } from "react-icons/bi";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

// Import your JSON data
import cpl01Data from "/src/Pages/Projects/database_Json/cpl01_project.json";
import cpl02Data from "/src/Pages/Projects/database_Json/cpl02_project.json";
import cpl03Data from "/src/Pages/Projects/database_Json/cpl03_project.json";
import cpl04Data from "/src/Pages/Projects/database_Json/cpl04_project.json";
import cpl05Data from "/src/Pages/Projects/database_Json/cpl05_project.json";
import cpl06Data from "/src/Pages/Projects/database_Json/cpl06_project.json";
import cpl07Data from "/src/Pages/Projects/database_Json/cpl07_project.json";
import cpl08Data from "/src/Pages/Projects/database_Json/cpl08_project.json";
// Add more imports as needed

const dataMapping = {
  cpl01: cpl01Data,
  cpl02: cpl02Data,
  cpl03: cpl03Data,
  cpl04: cpl04Data,
  cpl05: cpl05Data,
  cpl06: cpl06Data,
  cpl07: cpl07Data,
  cpl08: cpl08Data,
  // Add more mappings as needed
};

const SocialApprovedMobile = () => {
  const location = useLocation();
  const projectId = location.pathname.split("/").pop(); // Get the project identifier from the URL
  const projectData = dataMapping[projectId]?.find(
    (item) => item.type === "table" && item.name === "social_approved"
  );

  return (
    <Container fluid className="d-block d-md-none">
      <div className="d-block">
        <CardBox>
          {projectData &&
            projectData.data.map((item) => (
              <StyledSpan key={item.id} hasBorder={item.id === "2"} className="gap-1">
                
                <BiSolidCommentDetail /> {item.socialApproved}
              </StyledSpan>
            ))}
        </CardBox>
      </div>
    </Container>
  );
};

export default SocialApprovedMobile;

const CardBox = styled.div`
  width: 100%;
  height: 100%;
  border: solid var(--color-primary);
  border-left: none;
  border-right: none;
  display: flex;
  flex-direction: column; /* Stack items vertically */
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
`;

const StyledSpan = styled.span`
  width: fit-content; /* Adjust width as needed */
  height: 60px; /* Adjust height as needed */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px; /* Adjust padding as needed */
  ${(props) =>
    props.hasBorder &&
    `
    border-top: 3px solid var(--color-primary);
    border-bottom: 3px solid var(--color-primary);
  `}
`;
