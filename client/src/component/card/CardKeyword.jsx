import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import all possible JSON files statically
import cpl01Data from '/src/Pages/Projects/database_Json/cpl01_project_full.json';
import cpl02Data from '/src/Pages/Projects/database_Json/cpl02_project.json';
// Add more imports as needed

const dataMapping = {
  cpl01: cpl01Data,
  cpl02: cpl02Data,
  // Add more mappings as needed
};

const CardKeyword = () => {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    // Extract part of the URL to determine which data to use
    const url = window.location.href;
    const projectIdentifier = url.match(/cpl0\d+/);
    const identifier = projectIdentifier ? projectIdentifier[0] : 'default';

    // Select the appropriate data based on the identifier
    const selectedData = dataMapping[identifier] || [];
    
    if (selectedData.length > 0) {
      // Extract the data array from the JSON file
      const tableData = selectedData.find(entry => entry.type === 'table' && entry.name === 'keywords').data;
      setData(tableData);
      setActiveButton(tableData[0].id); // Set default active button
    }
  }, []);

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div className="d-flex row" style={{ marginTop: "-2rem" }}>
      <div className="col-12 mb-5">
        {data.slice(0, 3).map(item => (
          <KeywordButton
            key={item.id}
            active={activeButton === item.id}
            onClick={() => handleButtonClick(item.id)}
          >
            {item.keyword}
          </KeywordButton>
        ))}
      </div>
      <div className="col-12 mb-5">
        {data.slice(3).map(item => (
          <KeywordButton
            key={item.id}
            active={activeButton === item.id}
            onClick={() => handleButtonClick(item.id)}
          >
            {item.keyword}
          </KeywordButton>
        ))}
      </div>
      <div className="col-12">
        <span className="description">
          {data.find(item => item.id === activeButton)?.description}
        </span>
      </div>
    </div>
  );
};

export default CardKeyword;

const KeywordButton = styled.button`
  border-radius: 100px;
  border: 1px solid grey;
  background: ${(props) => (props.active ? "#534CFE" : "rgba(255, 255, 255, 0.2)")};
  color: white;
  padding: 10px;
  width: fit-content;
  margin-left: 50px;

  &:hover {
    cursor: pointer;
  }
`;
