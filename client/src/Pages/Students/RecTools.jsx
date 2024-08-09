import styled from "styled-components"
import SectionTitle from "../../component/SectionTitle";


function RecTools() {
  return (
    <>
      <CardBox>
        <SectionTitle
          title={`Tools for Developer`}
          subtitle={`แนะนำเครื่องมือสำหรับนักพัฒนา`}
          className="text-center txt-second mt-4"
        />
        <ToolBox>
          <img src="/tools/devTool/trello.png" alt="" />
          <ToolText>
            <h2>
              <strong>name</strong>
            </h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum velit iure ex, vitae dicta quae, nulla perspiciatis excepturi cumque molestiae, amet minima. Fugit illo excepturi ullam nulla eligendi, pariatur consequuntur.</p>
          </ToolText>
        </ToolBox>
      </CardBox>
    </>
  );
}

export default RecTools

const ToolText = styled.div`
display: flex; flex-direction: column; text-align: start; margin-left: 2rem;
`;
const ToolBox = styled.div`
display: flex;
align-items: center;
padding: 0 4rem;
`;

const CardBox = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 1rem;
  background: transparent;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 1rem 1rem 0 0;
    padding: 0.1rem;
    background: linear-gradient(
      180deg,
      rgba(5, 186, 100, 0.8) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;