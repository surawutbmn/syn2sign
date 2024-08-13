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
  transition: all .3s ease;
`;

const SponLinkRow = (props) => {
  const { href, imgSrc, alt, type, spon } = props;
  return (
    <LinkBox className="spon-row" href={href} target="_blank" rel="noopener noreferrer">
      <LogoContainer $spon={spon} type={type} src={imgSrc} alt={alt} />
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
