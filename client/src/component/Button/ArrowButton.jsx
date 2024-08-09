import styled from "styled-components";
import propTypes from "prop-types";
import { FaArrowRightLong } from "react-icons/fa6";
import { CgSoftwareDownload } from "react-icons/cg";

const ArrowButton = (props) => {
  const iconMap = {
    arrow: FaArrowRightLong,
    download: CgSoftwareDownload,
    // Add other icons here if needed
  };
  const { link, text, style } = props;
  const IconComponent = iconMap[props.icon] || FaArrowRightLong;
  const classname = `txt-dark txt-upper ${style || "txt-head4"}`;
  return (
    <div className="text-start align-self">
      <a href={link || "#"} target="_blank">
        <ButtonBox className={classname}>
          {text || "Arrow Button"} <IconComponent size={30} />
        </ButtonBox>
      </a>
    </div>
  );
};

ArrowButton.propTypes = {
  link: propTypes.string,
  text: propTypes.string,
  style: propTypes.string,
  icon: propTypes.oneOf(["arrow", "download"]),
};

export default ArrowButton;

const ButtonBox = styled.button`
  width: auto;
  height: auto;
  /* height: 250px; */
  /* background: white; */
  background: none;
  border: solid 0.05rem var(--color-grey);
  border-radius: 100px;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: var(--color-secondary);
    border: solid 0.05rem var(--color-secondary);
  }
`;
