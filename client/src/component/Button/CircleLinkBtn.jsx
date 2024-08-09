import { LuMail } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import styled from "styled-components";
import propTypes from "prop-types";

function CircleLinkBtn(props) {
  const iconMap = {
    mail: LuMail,
    linkedin: FaLinkedinIn,
  };
  const { link, txt, bg } = props;
  const color = `me-2 linkicon bg-${bg}`;
  const IconComponent = iconMap[props.icon] || LuMail;
  return (
    <>
      <BtnCon href={link} target="_blank" rel="noopener noreferrer">
        <Icon className={color}>
          <IconComponent size={16} />
        </Icon>
        <h5>
          <u>{txt}</u>
        </h5>
      </BtnCon>
    </>
  );
}

CircleLinkBtn.propTypes = {
  link: propTypes.string,
  txt: propTypes.string,
  bg: propTypes.string,
  icon: propTypes.oneOf(["mail", "linkedin"]),
};
export default CircleLinkBtn;

const BtnCon = styled.a`
  width: fit-content;
  display: flex;
  align-items: baseline;
  color: var(--color-light);
  &:hover .bg-light {
    background: var(--color-secondary) !important;
    color: var(--color-light);
  }
  &:hover .bg-second {
    background: var(--color-light);
    color: var(--color-dark);
  }
`;
const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  padding: 0;
  transition: all 0.3s ease;
  &.bg-light {
    background: var(--color-light);
    color: var(--color-dark);
  }
  &.bg-second {
    background: var(--color-secondary);
    color: var(--color-light);
  }
`;
