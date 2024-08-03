import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
const WatchnowButton = (props) => {
  // const Line = props.href ? LineImage : 'div';
  return (
    <div className="text-start align-self">
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
  border: solid .1rem var(--color-grey);
  border-radius: 100px;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: var(--color-secondary);
    border: solid var(--color-secondary);
  }
`;
