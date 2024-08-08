import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaMicrochip } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
import cpl01Data from '/src/Pages/Projects/database_Json/cpl01_project_full.json';
import cpl02Data from '/src/Pages/Projects/database_Json/cpl02_project.json'; // Add more imports as necessary

const dataMapping = {
  cpl01: cpl01Data,
  cpl02: cpl02Data,
  // Add more mappings as necessary
};

const CardIdeaConcept = () => {
  const [projectData, setProjectData] = useState({
    preview_img: '',
    technology: '',
    category: '',
    concept_th: '',
    concept_en: ''
  });

  // Extract part of the URL to determine which data to use
  const url = window.location.href;
  const projectIdentifier = url.match(/cpl0\d+/) ? url.match(/cpl0\d+/)[0] : 'default';

  useEffect(() => {
    // Select the appropriate data based on the identifier
    const selectedData = dataMapping[projectIdentifier] || [];

    if (selectedData.length > 0) {
      // Extract the necessary data from the JSON file
      const conceptData = selectedData.find(entry => entry.type === 'table' && entry.name === 'concept').data[0];
      setProjectData({
        preview_img: conceptData.preview_img,
        technology: conceptData.technology,
        category: conceptData.category,
        concept_th: conceptData.concept_th,
        concept_en: conceptData.concept_en
      });
    }
  }, [projectIdentifier]); // Add projectIdentifier as a dependency to re-run effect on URL change

  return (
    <div className="d-flex row text-start" style={{ marginTop: "-60px" }}>
      <div className="col-4">
        <div className="col-4">
          <DeviceImage className="text-end" src={`/showcase/Project/${projectIdentifier}/${projectData.preview_img}`} />
        </div>
        <div className="col-4">
          <FaMicrochip />
          TECHNOLOGY: {projectData.technology}
        </div>
        <div className="col-4">
          <MdOutlineCategory />
          CATEGORY: {projectData.category}
        </div>
      </div>
      <div className="col-8">
        <div className="txt-upper txt-second txt-head2">connect IDEA w/</div>
        <div className="txt-upper txt-head2">EVAL Balance</div>
        <div className="txt-body2">
          {projectData.concept_th}
        </div>
        <Line className="txt-body3 mt-3">
          <span className="">
            {projectData.concept_en}
          </span>
        </Line>
      </div>
    </div>
  );
};

export default CardIdeaConcept;

const DeviceImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Line = styled.div`
  position: relative;
  padding-left: 25px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px; /* Adjust the width of the gradient border */
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgb(5, 186, 100),
      rgb(0, 0, 0)
    ); /* Adjust gradient colors as needed */
  }
`;
