import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import cpl01Data from '/src/Pages/Projects/database_Json/cpl01_project.json';
import cpl02Data from '/src/Pages/Projects/database_Json/cpl02_project.json';
import cpl03Data from '/src/Pages/Projects/database_Json/cpl03_project.json';
import cpl04Data from '/src/Pages/Projects/database_Json/cpl04_project.json';
import cpl05Data from '/src/Pages/Projects/database_Json/cpl05_project.json';
import cpl06Data from '/src/Pages/Projects/database_Json/cpl06_project.json';
import cpl07Data from '/src/Pages/Projects/database_Json/cpl07_project.json';
import cpl08Data from '/src/Pages/Projects/database_Json/cpl08_project.json';
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

const CardTargetGroup = () => {
  const location = useLocation();
  const urlPath = location.pathname;
  const projectId = urlPath.split('/').pop(); // Extract projectId from URL

  const projectData = dataMapping[projectId] || {}; // Select the data based on the project ID

  // Extract target_group table data
  const targetGroupTable = projectData.find(
    (item) => item.type === 'table' && item.name === 'target_group'
  );

  const targetGroupData = targetGroupTable ? targetGroupTable.data[0] : {}; // Extract the data

  return (
    <div className='d-flex row text-start txt-body1 ' style={{ marginTop: "-50px" }}>
        <div className="Demography"><span className='txt-prim txt-sbold'>Demography: </span><span className='txt-body2'>{targetGroupData.Demography}</span></div>
        <div className="Group"><span className='txt-prim txt-sbold'>Group: </span><span className='txt-body2'>{targetGroupData.Group}</span></div>
        <div className="Personality"><span className='txt-prim txt-sbold'>Personality: </span><span className='txt-body2'>{targetGroupData.Personality}</span></div>
        <div className="Behavior"><span className='txt-prim txt-sbold'>Behavior: </span><span className='txt-body2'>{targetGroupData.Behavior}</span></div>
    </div>
  )
}

export default CardTargetGroup;
