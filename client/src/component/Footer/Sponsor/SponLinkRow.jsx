import styled from "styled-components";
import propTypes from "prop-types";

const LinkBox = styled.a`
  text-decoration: none;
  &.spon-row:hover img{
    transform: scale(1.1);
  }
`;

const LogoContainer = styled.img`
  width: ${({ $spon, type }) => {
    if (type === "LogoRec") {
      return $spon === "tier-1" ? "6em" : $spon === "tier-2" ? "3.5em" : "2em";
    } else {
      return $spon === "tier-1"
        ? "2.3em"
        : $spon === "tier-2-dl"
        ? "2.5em"
        : $spon === "tier-2"
        ? "1.8em"
        : "1.5em";
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
  transition: all 0.3s cubic-bezier(0.33, 2, 0.41, 0.69);
  @media (max-width: 991.98px) {
    width: ${({ $spon, type }) => {
      if (type === "LogoRec") {
        return $spon === "tier-1"
          ? "8em"
          : $spon === "tier-2"
          ? "4em"
          : "3em";
      } else {
        return $spon === "tier-1"
          ? "3em"
          : $spon === "tier-2-dl"
          ? "2.8em"
          : $spon === "tier-2"
          ? "1.8em"
          : "1.5em";
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

const SponLinkRow = (props) => {
  const { href, imgSrc, alt, type, spon } = props;
  return (
    <LinkBox
      className="spon-row"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <LogoContainer
        $spon={spon}
        type={type}
        src={import.meta.env.VITE_BASE_URL + imgSrc}
        alt={alt}
      />
    </LinkBox>
  );
};

SponLinkRow.propTypes = {
  href: propTypes.string,
  spon: propTypes.string,
  imgSrc: propTypes.string,
  type: propTypes.string,
  alt: propTypes.string,
  //   className: propTypes.string,
};
export default SponLinkRow;
