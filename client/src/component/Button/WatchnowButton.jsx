import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
const WatchnowButton = (props) => {
  // const Line = props.href ? LineImage : 'div';
  return (
    <div className="text-start align-self mt-4">
        <a href="https://www.youtube.com/playlist?list=PLiCmIB88gkWQyzpusqxE8uaydKCTN-dij" target="_blank">
        <ButtonBox className="txt-head3 txt-dark txt-upper">Watch now <FaArrowRightLong size={30}/></ButtonBox>
        </a>
        
    </div>
  );
};



export default WatchnowButton;

const ButtonBox = styled.button`
  width: auto;
  height: auto;
  /* height: 250px; */
  /* background: white; */
  background: none;
  border: 1px;
  border-radius: 30px;
  border-style: solid;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  &:hover {
    color: white;
      background: var(--color-secondary);
      border:  var(--color-secondary);
  }
`;
