import React from "react";
import styled from "styled-components";
import { BiSolidCommentDetail } from "react-icons/bi";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";
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

const SocialApproved = () => {
  const location = useLocation();
  const projectId = location.pathname.split("/").pop(); // Get the project identifier from the URL
  const projectData = dataMapping[projectId]?.find(
    (item) => item.type === "table" && item.name === "social_approved"
  );

  return (
    <Container fluid>
      <Row>
        <CardBox className="d-flex text-center">
          {projectData &&
            projectData.data.map((item) => (
              <StyledSpan className="gap-1" key={item.id} hasBorder={item.id === "2"}>
                <BiSolidCommentDetail /> {item.socialApproved}
              </StyledSpan>
            ))}
        </CardBox>
      </Row>
    </Container>
  );
};

SocialApproved.propTypes = {
  // Define any required prop types here if needed
};

export default SocialApproved;

const CardBox = styled.div`
  width: 100%;
  height: 100px;
  border: solid var(--color-primary);
  border-left: none;
  border-right: none;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
`;

// If you still need this style, keep it, or remove it if unnecessary
const CardBoxSub = styled.span`
  width: 33.33%;
  height: 60%;
  border-right: 3px solid var(--color-primary);
  border-left: 3px solid var(--color-primary);
  align-items: center;
  justify-content: center;
`;
const StyledSpan = styled.span`
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px; /* Adjust the padding as needed */
  ${(props) =>
    props.hasBorder &&
    `
    border-right: 3px solid var(--color-primary);
    border-left: 3px solid var(--color-primary);
  `}
`;
