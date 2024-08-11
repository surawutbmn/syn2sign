import styled from "styled-components";
import propTypes from "prop-types";
import { RxArrowTopRight } from "react-icons/rx";

import { CgSoftwareDownload } from "react-icons/cg";

const ArrowButton = (props) => {
  const iconMap = {
    arrow: RxArrowTopRight,
    download: CgSoftwareDownload,
    // Add other icons here if needed
  };
  const { link, text, text2, style } = props;
  const IconComponent = iconMap[props.icon] || RxArrowTopRight;
  const classname = `txt-dark txt-upper ${style || "txt-head4"}`;
  return (
    <div className="text-start align-self">
      <a href={link || "#"} target="_blank">
        <ButtonBox className={classname}>
          <IconWrapper>
            {text || "Arrow Button"} <Goto className="txt-cap">({text2 || "on next"})</Goto>
            <IconComponent className="ms-2"size={30}/>
          </IconWrapper>
        </ButtonBox>
      </a>
    </div>
  );
};

ArrowButton.propTypes = {
  link: propTypes.string,
  text: propTypes.string,
  text2: propTypes.string,
  style: propTypes.string,
  icon: propTypes.oneOf(["arrow", "download"]),
};

export default ArrowButton;

const Goto = styled.span`font-size: .8em`
const ButtonBox = styled.button`
  width: auto;
  height: auto;
  background: none;
  border: solid 0.05rem var(--color-grey);
  border-radius: 100px;
  padding: 0.5rem 1rem;
  transition: color 0.3s ease;
  &:hover {
    color: var(--color-primary);
    border: solid 0.05rem var(--color-primary);
  }
`;

const IconWrapper = styled.div`
  font-size: 1.5rem;

  @media (max-width: 991.98px) {
    font-size: 1rem;
  }
  @media (max-width: 767.98px) {
    font-size: 1rem;
  }

  @media (max-width: 575.98px) {
    font-size: .9rem;
  }
`;
