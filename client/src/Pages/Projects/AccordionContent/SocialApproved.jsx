import styled from "styled-components";
import { BiSolidCommentDetail } from "react-icons/bi";
import { Container, Row } from "react-bootstrap";
import PropTypes from "prop-types";

//
const SocialApproved = (props) => {
  return (
    <Container fluid>
      <Row>
        <CardBox className="d-flex text-center">
          <span>
            <BiSolidCommentDetail /> Concept ดี สามารถพัฒนาต่อได้
          </span>
          <CardBoxSub className="d-flex gap-1">
            <BiSolidCommentDetail /> เป็นการปรับใช้สมาร์ทโฟนกับการออกกำลังได้ดี
          </CardBoxSub>
          <span>
            <BiSolidCommentDetail /> อยากให้พัฒนาผลงานต่อ
          </span>
        </CardBox>
      </Row>
    </Container>
  );
};

SocialApproved.propTypes = {
  
};
export default SocialApproved;

// const FullWidthContainer = styled.div`
//   width: 100vw;
//   position: relative;
//   left: 50%;
//   right: 50%;
//   margin-left: -50vw;
//   margin-right: -50vw;
//   /* background-color: #f8f9fa;  */
// `;

const CardBox = styled.div`
  width: 100%;
  height: 100px;
  border: solid var(--color-secondary);
  border-left: none;
  border-right: none;
  position: relative;
  justify-content: space-evenly;
  align-items: center;
`;

const CardBoxSub = styled.span`
  width: 33.33%;
  height: 60%;
  border-right: 3px solid var(--color-secondary);
  border-left: 3px solid var(--color-secondary);
  align-items: center;
  justify-content: center;
`;
