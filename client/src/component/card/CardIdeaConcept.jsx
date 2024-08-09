import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { FaMicrochip } from "react-icons/fa6";
import { MdOutlineCategory } from "react-icons/md";
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

// Text mappings based on project identifier
const textMapping = {
  cpl01: "EVAL Balance",
  cpl02: "WAIWAN",
  cpl03: "ARTIST MATCH",
  cpl04: "MORYTECH",
  cpl05: "FULL FILL",
  cpl06: "YOUNG & CHIC",
  cpl07: "TENT CARE",
  cpl08: "TINY THAI",
};

const CardIdeaConcept = (props) => {
  const [projectData, setProjectData] = useState({
    preview_img: "",
    technology: "",
    category: "",
    concept_th: "",
    concept_en: "",
  });

  // Extract part of the URL to determine which data to use
  const url = window.location.href;
  const projectIdentifier = url.match(/cpl0\d+/)
    ? url.match(/cpl0\d+/)[0]
    : "default";

  useEffect(() => {
    // Select the appropriate data based on the identifier
    const selectedData = dataMapping[props.proj_id] || [];

    if (selectedData.length > 0) {
      // Extract the necessary data from the JSON file
      const conceptData = selectedData.find(
        (entry) => entry.type === "table" && entry.name === "concept"
      ).data[0];
      setProjectData({
        preview_img: conceptData.preview_img,
        technology: conceptData.technology,
        category: conceptData.category,
        concept_th: conceptData.concept_th,
        concept_en: conceptData.concept_en,
      });
    }
  }, [props.proj_id]); // Add projectIdentifier as a dependency to re-run effect on URL change

  return (
    <div className="d-flex row text-start" style={{ marginTop: "-60px" }}>
      <div className="col-5">
        <DeviceContainer className="">
          <DeviceImage
            className="text-end"
            src={`/showcase/Project/${projectIdentifier}/${projectData.preview_img}`}
          />
        </DeviceContainer>
        <div className="mt-3 txt-upper">
          <FaMicrochip /> TECHNOLOGY: {projectData.technology} <br />
          <MdOutlineCategory /> CATEGORY: {projectData.category}
        </div>
      </div>
      <div className="col-7">
        <div className="txt-upper txt-second txt-head2">connect IDEA w/</div>
        <div className="txt-upper txt-head2">
          {textMapping[projectIdentifier] || "EVAL Balance"}
        </div>
        <div className="txt-body2">{projectData.concept_th}</div>
        <Line className="txt-body3 mt-3">
          <span className="">{projectData.concept_en}</span>
        </Line>
      </div>
    </div>
  );
};

CardIdeaConcept.propTypes = {
  proj_id: PropTypes.string.isRequired,
};
export default CardIdeaConcept;

const DeviceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 350px;
`;

const DeviceImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const Line = styled.div`
  position: relative;
  padding-left: 25px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      rgb(5, 186, 100),
      rgb(0, 0, 0)
    );
  }
`;

