import styled from "styled-components";
import { IoLogoYoutube } from "react-icons/io";
import PropTypes from "prop-types";

//
const LinkButton = (props) => {
  return (
    <div className="d-flex row align-items-center txt-body1">
      <LinkButtonContainer>
        <Link
          href="https://www.youtube.com/watch?v=9bZkp7q19f0"
          target="_blank"
        >
          <Icon />{" "}
          <span className="ms-2 pe-2">{props.name} • Video SHOWREEL</span>
        </Link>
      </LinkButtonContainer>
    </div>
  );
};

LinkButton.propTypes = {
  name: PropTypes.string.isRequired,
};
export default LinkButton;

const LinkButtonContainer = styled.div`
  width: fit-content;
  /* height: 40px; */
  border: solid #05ba64;
  border-radius: 30px;
  padding: 10px;
  margin-top: 40px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--color-secondary);
  }
`;
const Icon = styled(IoLogoYoutube)`
  color: white;
  font-size: 25px;
  justify-content: center;
  align-items: center;
  /* padding-left: 10px; */
  margin-left: 10px;
`;
const Link = styled.a`
  text-decoration: none;
  color: white;
  font: inherit;
`;
