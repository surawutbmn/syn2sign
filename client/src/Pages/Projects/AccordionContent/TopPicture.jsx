import styled from "styled-components";
import { BiSolidCommentDetail } from "react-icons/bi";
//
const CardThreePictureProject = () => {
  return (
    <div className="d-flex row mt-5 mb-5">
      {/* <div className="col-12"> */}
      <CardBox className="col-4">
        <CardImage src="/showcase/threeTop/desktop-cpl-1.png"></CardImage>
      </CardBox>
      <CardBox className="col-4">
        {" "}
        <CardImage src="/showcase/threeTop/desktop-cpl-2.png"></CardImage>
      </CardBox>
      <CardBox className="col-4">
        {" "}
        <CardImage src="/showcase/threeTop/desktop-cpl-3.png"></CardImage>
      </CardBox>
      {/* </div> */}
    </div>
  );
};

export default CardThreePictureProject;

const CardBox = styled.div`
  width: 33.33%;
  height: auto;
  /* border: solid; */
  /* border-color: rgb(5, 186, 100); */
  /* position: relative; */
  /* justify-content: space-evenly; */
  /* align-items: center; */
`;
const CardImage = styled.img`
  width: 100%;
  height: 100%;
`;
