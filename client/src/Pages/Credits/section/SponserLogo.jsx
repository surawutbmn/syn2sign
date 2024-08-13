import styled from "styled-components";
import propTypes from "prop-types";

// Styled components
const LinkBox = styled.a`
  text-decoration: none;
  display: inline-block;
  text-align: center;
  margin: 1em 0;
  @media (max-width: 575.98px) {
    text-align: start;
  }
`;

const LogoContainer = styled.img`
  width: ${({ $tier, type }) => {
    if (type === "rect") {
      return $tier === "tier1"
        ? "14em"
        : $tier === "tier2"
        ? "12em"
        : $tier === "tier3"
        ? "8em"
        : "6em";
    } else {
      return $tier === "tier1"
        ? "5em"
        : $tier === "tier2"
        ? "5em"
        : $tier === "tier2-dl"
        ? "4em"
        : $tier === "tier3"
        ? "4em"
        : "3.5em";
    }
  }};
  object-fit: contain;
  margin-bottom: 1em;

  @media (max-width: 991.98px) {
  }

  @media (max-width: 767.98px) {
    width: ${({ $tier, type }) => {
      if (type === "rect") {
        return $tier === "tier1"
          ? "8em"
          : $tier === "tier2"
          ? "8em"
          : $tier === "tier3"
          ? "6em"
          : "6em";
      } else {
        return $tier === "tier1"
          ? "4em"
          : $tier === "tier2"
          ? "4em"
          : $tier === "tier2-dl"
          ? "3.5em"
          : $tier === "tier3"
          ? "4em"
          : "3em";
      }
    }};
    
  }
`;

const TextContainer = styled.p`
  font-size: 0.9rem;
  color: var(--color-grey);
  margin: 0;

  u {
    font-size: 1.2rem;
    text-decoration: underline;
  }
  br {
    margin-top: 0.5em;
  }
  @media (max-width: 767.98px) {
    font-size: 0.6em;
    u {
      font-size: 1em;
    }
  }
`;

const SponsorLogo = ({ href, imgSrc, alt, type, tier, text }) => {
  return (
    <LinkBox href={href} target="_blank" rel="noopener noreferrer">
      <LogoContainer className="spl" $tier={tier} type={type} src={imgSrc} alt={alt} />
      <TextContainer>
        <u>{text.title}</u> <br /> {text.subtitle}
      </TextContainer>
    </LinkBox>
  );
};

SponsorLogo.propTypes = {
  href: propTypes.string.isRequired,
  imgSrc: propTypes.string.isRequired,
  alt: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  tier: propTypes.string.isRequired,
  text: propTypes.shape({
    title: propTypes.string.isRequired,
    subtitle: propTypes.string.isRequired,
  }).isRequired,
};

export default SponsorLogo;
