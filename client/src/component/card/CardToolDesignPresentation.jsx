import styled from "styled-components";
import PropTypes from "prop-types";
import cpl01Data from "/src/Pages/Projects/database_Json/cpl01_project.json";
import cpl02Data from "/src/Pages/Projects/database_Json/cpl02_project.json";
import cpl03Data from "/src/Pages/Projects/database_Json/cpl03_project.json";
import cpl04Data from "/src/Pages/Projects/database_Json/cpl04_project.json";
import cpl05Data from "/src/Pages/Projects/database_Json/cpl05_project.json";
import cpl06Data from "/src/Pages/Projects/database_Json/cpl06_project.json";
import cpl07Data from "/src/Pages/Projects/database_Json/cpl07_project.json";
import cpl08Data from "/src/Pages/Projects/database_Json/cpl08_project.json";

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

const CardToolDesignPresentation = (props) => {
  const {proj_id} = props;
  const projectData = dataMapping[proj_id] || {};

  const designPresentItems =
    projectData.find((item) => item.name === "design_present")?.data || [];

  return (
    <Container>
      <Title className="txt-prim txt-head3 text-start">
        DESIGN & PRESENTATION
      </Title>
      <FlexContainer>
        {designPresentItems.map((item) => (
          <ItemBox key={item.id}>
            <img
              src={`/icon/prj/designPresent/${item.design_present
                .toLowerCase()
                .replace(/\s+/g, "-")}.svg`}
              alt={item.design_present}
            />
            {item.design_present}
          </ItemBox>
        ))}
      </FlexContainer>
    </Container>
  );
};

CardToolDesignPresentation.propTypes = {
  proj_id: PropTypes.string,
};
export default CardToolDesignPresentation;

const Container = styled.div`
  margin-top: -50px;
  height: 130px;
`;

const Title = styled.div`
  /* font-size: 1.5em; */
  font-weight: bold;
  margin-bottom: 20px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100px;

  img {
    width: 30px;
    height: 30px;
  }
`;
