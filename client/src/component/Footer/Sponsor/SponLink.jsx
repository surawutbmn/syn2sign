import styled from "styled-components";
import propTypes from "prop-types";

const LinkBox = styled.a`
  text-decoration: none;
`;

const LogoContainer = styled.img`
  width: ${({ tier, type }) => {
    if (type === "LogoRec") {
      return tier === "tier-1" ? "10em" : tier === "tier-2" ? "7em" : "4.5em";
    } else {
      return tier === "tier-1"
        ? "5em"
        : tier === "tier-2-dl"
        ? "4em"
        : tier === "tier-2"
        ? "3.5em"
        : "3em";
    }
  }};
  aspect-ratio: ${({ type }) => {
    if (type === "LogoRec") {
      return "16 / 9";
    } else {
      return "1 / 1";
    }
  }};
  object-fit: contain;
  @media (max-width: 991.98px) {
    width: ${({ tier, type }) => {
      if (type === "LogoRec") {
        return tier === "tier-1" ? "14em" : tier === "tier-2" ? "9em" : "5.5em";
      } else {
        return tier === "tier-1"
          ? "7em"
          : tier === "tier-2-dl"
          ? "5em"
          : tier === "tier-2"
          ? "3.5em"
          : "3em";
      }
    }};
  }
  @media (max-width: 767.98px) {
    width: ${({ tier, type }) => {
      if (type === "LogoRec") {
        return tier === "tier-1" ? "12em" : tier === "tier-2" ? "8em" : "6em";
      } else {
        return tier === "tier-1"
          ? "5em"
          : tier === "tier-2-dl"
          ? "4em"
          : tier === "tier-2"
          ? "3.5em"
          : "3em";
      }
    }};
    aspect-ratio: ${({ type }) => {
      if (type === "LogoRec") {
        return "16 / 9";
      } else {
        return "1 / 1";
      }
    }};
  }
`;
const SponLink = (props) => {
  const { href, imgSrc, alt, type, tier } = props;
  return (
    // <LogoContainer tier={tier} type={type}>
    <LinkBox href={href} target="_blank" rel="noopener noreferrer">
      <LogoContainer tier={tier} type={type} src={imgSrc} alt={alt} />
    </LinkBox>
    // </LogoContainer>
  );
};

SponLink.propTypes = {
  href: propTypes.string,
  tier: propTypes.string,
  imgSrc: propTypes.string,
  type: propTypes.string,
  alt: propTypes.string,
  //   className: propTypes.string,
};
export default SponLink;
