import styled from "styled-components";
import { IoLogoYoutube } from "react-icons/io";

const LinkButton = () => {
  // Get the current URL path
  const url = window.location.pathname;

  // Extract the project identifier from the URL (assuming it's part of the path)
  const projectId = url.split("/").pop(); // Get the last segment of the URL

  const linkMappings = {
    cpl01: {
      href: "https://www.youtube.com/watch?v=_41WQgd5qKw",
      text: "EVAL Balance (อีวาล บาลานซ์) • Video SHOWREEL",
    },
    cpl02: {
      href: "https://www.youtube.com/watch?v=OwyQ7eIHmoc",
      text: "WAIWAN (ไหว้วาน) • Video SHOWREEL",
    },
    cpl03: {
      href: "https://www.youtube.com/watch?v=dp_AlUgThnQ",
      text: "ARTIST MATCH (อาร์ทิส แมทช์) • Video SHOWREEL",
    },
    cpl04: {
      href: "https://www.youtube.com/watch?v=zPt2Uu3vZ4I",
      text: "MORYTECH (โมรี่เทค) • Video SHOWREEL",
    },
    cpl05: {
      href: "https://www.youtube.com/watch?v=wMnxzOlEVPA",
      text: "FULL FILL (ฟูลฟิล) • Video SHOWREEL",
    },
    cpl06: {
      href: "https://www.youtube.com/watch?v=asaKqFdHkRE",
      text: "YOUNG & CHIC (ยังแอนด์ชิค) • Video SHOWREEL",
    },
    cpl07: {
      href: "https://www.youtube.com/watch?v=KhAfnkMRctc",
      text: "TENT CARE (เต็นท์แคร์) • Video SHOWREEL",
    },
    cpl08: {
      href: "https://www.youtube.com/watch?v=2fkCoiR49wo",
      text: "TINY THAI (ไทนี่ไทย) • Video SHOWREEL",
    },
  };

  // Get the appropriate link based on the projectId, default to cpl01 if not found
  const currentLink = linkMappings[projectId] || linkMappings.cpl01;

  return (
    <div className="d-flex row align-items-center txt-body1">
      <LinkButtonContainer>
        <Link href={currentLink.href} target="_blank">
          <Icon /> <span className="ms-2 pe-2">{currentLink.text}</span>
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
  margin-left: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: white;
  font: inherit;
`;
