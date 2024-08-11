import { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


// Import all possible JSON files statically
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

const CardKeyword = (props) => {
  const [data, setData] = useState([]);
  const [activeButton, setActiveButton] = useState(null);

  useEffect(() => {
    const selectedData = dataMapping[props.proj_id] || [];

    if (selectedData.length > 0) {
      // Extract the data array from the JSON file
      const tableData = selectedData.find(
        (entry) => entry.type === "table" && entry.name === "keywords"
      ).data;
      setData(tableData);
      setActiveButton(tableData[0].id); // Set default active button
    }
  }, [props.proj_id]);

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  return (
    <div className="row justify-content-center" style={{ marginTop: "-2rem" }}>
      <div className="col-8 mb-5">
        <span className="description">
          {data.find((item) => item.id === activeButton)?.description}
        </span>
      </div>
      <div className="col-12 mb-5">
        {data.slice(0, 3).map((item) => (
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
        {data.slice(3).map((item) => (
          <KeywordButton
            key={item.id}
            active={activeButton === item.id}
            onClick={() => handleButtonClick(item.id)}
          >
            {item.keyword}
          </KeywordButton>
        ))}
      </div>
      
    </div>
  );
};

CardKeyword.propTypes = {
  proj_id: PropTypes.string,
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
