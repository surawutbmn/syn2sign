import PropTypes from 'prop-types';
import styled from "styled-components";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const LinkButton = () => {
  // Get the current URL path
  const url = window.location.pathname;

  // Extract the project identifier from the URL (assuming it's part of the path)
  const projectId = url.split("/").pop(); // Get the last segment of the URL

  const linkMappings = {
    cpl01: {
      href: "https://www.instagram.com/p/C8RvmBBvh4z/?img_index=1",
      text: "Concept Trailer",
    },
    cpl02: {
      href: "https://www.instagram.com/p/C8TXpOQvj4m/?img_index=1",
      text: "Concept Trailer",
    },
    cpl03: {
      href: "https://www.instagram.com/p/C8UOhH9P8rh/?img_index=1",
      text: "Concept Trailer",
    },
    cpl04: {
      href: "https://www.instagram.com/p/C8YhJlHMBRf/?img_index=1",
      text: "Concept Trailer",
    },
    cpl05: {
      href: "https://www.instagram.com/p/C8bF64wJb5b/?img_index=1",
      text: "Concept Trailer",
    },
    cpl06: {
      href: "https://www.instagram.com/p/C8dqvfPxrvJ/?img_index=1",
      text: "Concept Trailer",
    },
    cpl07: {
      href: "https://www.instagram.com/p/C8gPiCRvWjX/?img_index=1",
      text: "Concept Trailer",
    },
    cpl08: {
      href: "https://www.instagram.com/p/C8i0UMOxLbx/?img_index=1",
      text: "Concept Trailer",
    },
  };

  // Get the appropriate link based on the projectId, default to cpl01 if not found
  const currentLink = linkMappings[projectId] || linkMappings.cpl01;

  return (
    <span className="d-flex row align-items-center txt-body1">
       {/* <LinkButtonContainer> */}
        <Link href={currentLink.href} target="_blank">
          <Icon /> <span className="ms-2 pe-2">{currentLink.text}</span>
        </Link>
       {/* </LinkButtonContainer> */}
    </span>
  );
};

LinkButton.propTypes = {
  name: PropTypes.string.isRequired, // Check if 'name' is needed here
};

export default LinkButton;

const LinkButtonContainer = styled.div`
  width: fit-content;
  border: solid #05ba64;
  border-radius: 30px;
  padding: 10px;
  margin-top: 40px;
  background-color: transparent;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--color-primary);
  }
`;

const Icon = styled(FaFacebookSquare)`
  color: white;
  font-size: 25px;
  margin-left: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font: inherit;
`;
