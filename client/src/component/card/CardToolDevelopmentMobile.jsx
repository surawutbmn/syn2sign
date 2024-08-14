import React from "react";
import styled from "styled-components";
import { useLocation } from 'react-router-dom';
import cpl01Data from '/src/Pages/Projects/database_Json/cpl01_project.json';
import cpl02Data from '/src/Pages/Projects/database_Json/cpl02_project.json';
import cpl03Data from '/src/Pages/Projects/database_Json/cpl03_project.json';
import cpl04Data from '/src/Pages/Projects/database_Json/cpl04_project.json';
import cpl05Data from '/src/Pages/Projects/database_Json/cpl05_project.json';
import cpl06Data from '/src/Pages/Projects/database_Json/cpl06_project.json';
import cpl07Data from '/src/Pages/Projects/database_Json/cpl07_project.json';
import cpl08Data from '/src/Pages/Projects/database_Json/cpl08_project.json';

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

const CardToolDevelopmentMobile = () => {
  const location = useLocation();
  const projectId = location.pathname.split('/').pop();
  const projectData = dataMapping[projectId] || {};

  const codingLanguages = projectData.find(item => item.name === 'coding_launguage')?.data || [];
  const codingPlugins = projectData.find(item => item.name === 'coding_plugin')?.data || [];
  const codingTools = projectData.find(item => item.name === 'coding_tool')?.data || [];
  const databaseSystems = projectData.find(item => item.name === 'database_system')?.data || [];

  return (
    <Container >
      <LeftColumn>
        <Section className="coding-language text-start">
          <div className="txt-prim txt-head3 txt-upper">Coding Language</div>
          <FlexContainer>
            {codingLanguages.map((item) => (
              <ItemBox key={item.id}>
                <img src = {`${import.meta.env.VITE_BASE_URL}icon/prj/codingTools/${item.coding_launguage.toLowerCase()}.svg`} alt={item.coding_launguage} />
                {item.coding_launguage}
              </ItemBox>
            ))}
          </FlexContainer>
        </Section>
        <Section className="coding-plugin text-start">
          <div className="txt-prim txt-head3 txt-upper">Coding Plugin / Library</div>
          <FlexContainer>
            {codingPlugins.map((item, index) => (
              <ItemBox key={item.id} className={index >= 4 ? "second-row" : ""}>
                <img src = {`${import.meta.env.VITE_BASE_URL}icon/prj/codingTools/${item.coding_plugin.toLowerCase().replace(/\s+/g, '-')}.svg`} alt={item.coding_plugin} />
                {item.coding_plugin}
              </ItemBox>
            ))}
          </FlexContainer>
        </Section>
        <Section className="database-system text-start">
          <div className="txt-prim txt-head3 txt-upper">Database System</div>
          <FlexContainer>
            {databaseSystems.map((item) => (
              <ItemBox key={item.id}>
                <img src = {`${import.meta.env.VITE_BASE_URL}icon/prj/codingTools/${item.database_system.toLowerCase()}.svg`} alt={item.database_system} />
                {item.database_system}
              </ItemBox>
            ))}
          </FlexContainer>
        </Section>

        <Section className="coding-tools text-start">
          <div className="txt-prim txt-head3 txt-upper">Coding Tools</div>
          <FlexContainer>
            {codingTools.map((item) => (
              <ItemBox key={item.id}>
                <img src = {`${import.meta.env.VITE_BASE_URL}icon/prj/codingTools/${item.coding_tool.toLowerCase().replace(/\s+/g, '-')}.svg`} alt={item.coding_tool} />
                {item.coding_tool}
              </ItemBox>
            ))}
          </FlexContainer>
        </Section>
      </LeftColumn>
      

    </Container>
  );
};

export default CardToolDevelopmentMobile;

const Container = styled.div`
  display: flex;
  gap: 20px; /* Adjust the gap between columns */
  margin-top: -50px;
`;

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Adjust the gap between sections */
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px; /* Adjust the gap between sections */
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-height: 250px; /* Default minimum height */
  height: auto; /* Allow height to adjust based on content */
  width: 100%;

  &.coding-language {
    min-height: fit-content; /* Specific minimum height for Coding Language */
  }

  &.database-system {
    min-height: fit-content; /* Specific minimum height for Database System */
  }

  &.coding-plugin {
    min-height: fit-content; /* Specific minimum height for Coding Plugin / Library */
  }

  &.coding-tools {
    min-height: fit-content; /* Specific minimum height for Coding Tools */
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: flex-start;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100px;
  height: auto;

  img {
    width: 40px;
    height: 40px;
  }

  &.second-row {
    margin-top: 20px; /* Adjust the margin for items in the second row */
  }
`;
