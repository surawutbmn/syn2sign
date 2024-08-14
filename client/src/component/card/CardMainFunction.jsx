import PropTypes from "prop-types";
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

const CardMainFunction = (props) => {

  const projectData = dataMapping[props.proj_id] || [];
  // Extract main_function table data
  const mainFunctionTable = projectData.find(
    (item) => item.type === 'table' && item.name === 'main_function'
  );

  const mainFunctions = mainFunctionTable ? mainFunctionTable.data : []; // Extract main function data

  return (
    <div className="d-flex row justify-content-evenly" style={{ marginTop: "-100px" }}>
      {mainFunctions.length === 0 ? (
        <p>No data available</p>
      ) : (
        mainFunctions.map((func) => (
          <Card key={func.id} className="col-4 text-center mt-5">
            <Icon src={`/icon/prj/${func.id}Function.svg`} className="mt-5" />
            <div className="txt-head3 txt-bold mt-4 mb-3">
              {func.title}
            </div>
            <LineHr />
            <div className="mt-3">
              {func.description}
            </div>
          </Card>
        ))
      )}
    </div>
  );
};

CardMainFunction.propTypes = {
  proj_id: PropTypes.string,
};
export default CardMainFunction;

const Card = styled.div`
  position: relative;
  width: 340px;
  height: 415px;
  border: 2px solid #8e8e8e;
  border-radius: 20px;
  padding: 20px;
`;

const Icon = styled.img`
  width: 107px;
  height: 107px;
`;

const LineHr = styled.hr`
  border: 1px solid #fff;
  margin-top: 15px;
  margin-bottom: 50px;
  width: 100px;
  margin: 0 auto;
`;
