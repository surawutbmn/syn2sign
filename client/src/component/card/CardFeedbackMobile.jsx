import styled from "styled-components";
import PropTypes from "prop-types";
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

const CardFeedbackMobile = ({proj_id}) => {

  const projectData = dataMapping[proj_id] || [];
  const testingData = projectData.find(item => item.type === 'table' && item.name === 'testing');
  const feedback = testingData ? testingData.data.find(item => item.id === "1") : {};

  return (
    <div className="d-flex row" style={{ marginTop: "-50px" }}>
      <div className="col-12 text-start">
        <div className="txt-prim txt-head2 txt-upper">Testing</div>
        <div className="txt-body2 mb-4">
          {feedback.th || "No data available"}
        </div>
        <div className="txt-body2 txt-grey mb-5">
          {feedback.en || "No data available"}
        </div>
      </div>
      <div className="col-3"></div>
      <CircleContainer>
        <BoxCircle className="row">
          <div className="txt-head3 mt-5">ด้านการออกแบบ</div>
          <div className="txt-body3">ค่าเฉลี่ย</div>
          <div className="txt-prim txt-bold" style={{ fontSize: "4rem" }}>
            {feedback.num_design || "0"}
          </div>
        </BoxCircle>

      </CircleContainer>

      <CircleContainer>
      <BoxCircle  className="row mt-5">
          <div className="txt-head3 mt-5">ด้านการใช้งาน</div>
          <div className="txt-body3">ค่าเฉลี่ย</div>
          <div className="txt-prim txt-bold" style={{ fontSize: "4rem" }}>
            {feedback.num_use || "0"}
          </div>
        </BoxCircle>
      </CircleContainer>

      <CircleContainer>
      <BoxCircle  className="row mt-5 mb-3">
          <div className="txt-head3 mt-5">ด้านภาพรวม</div>
          <div className="txt-body3">ค่าเฉลี่ย</div>
          <div className="txt-prim txt-bold" style={{ fontSize: "4rem" }}>
            {feedback.num_overall || "0"}
          </div>
        </BoxCircle>
      </CircleContainer>
      

   

      <div className="col-12 text-start mt-4 mb-4 txt-head2 txt-sbold">
        ความคิดเห็นจากผู้ใช้งาน
      </div>

      <div className="col-12 text-start">
        <div className="txt-prim txt-sbold txt-head3 mb-3">ด้านการออกแบบ</div>
        <div>{feedback.opinion_design || "No data available"}</div>
      </div>
      <div className="col-12 text-start mt-3">
        <div className="txt-prim txt-sbold txt-head3 mb-3">ด้านการใช้งาน</div>
        <div>{feedback.opinion_use || "No data available"}</div>
      </div>
      <div className="col-12 text-start mt-3">
        <div className="txt-prim txt-sbold txt-head3 mb-3">ด้านภาพรวม</div>
        <div>{feedback.opinion_overall || "No data available"}</div>
      </div>
    </div>
  );
};

CardFeedbackMobile.propTypes = {
  proj_id: PropTypes.string,
};
export default CardFeedbackMobile;

const BoxCircle = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid #8e8e8e;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const CircleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;
