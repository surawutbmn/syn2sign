import styled from "styled-components";
import { socialLinks } from "./Social";

const SocialLinks = () => (
  <>
    <Txt className="txt-cap text-start d-none d-md-flex">Follow us:</Txt>
    <h6 className="txt-cap justify-content-center d-flex d-md-none">
      Follow us:
    </h6>
    <div className="d-flex align-items-center justify-content-center justify-content-md-start">
      {socialLinks.map((link, index) => (
        <FooterLink
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`${import.meta.env.VITE_BASE_URL}${link.src}`} alt={link.alt} />
        </FooterLink>
      ))}
    </div>
  </>
);

export default SocialLinks;

const Txt = styled.span`
  font-size: 0.7em;
  margin-bottom: 1.1em;
`;
const FooterLink = styled.a`
  display: block;
  margin-right: 0.8em;
  img {
    width: 1.6em;
    height: auto;
    transition: all 0.3s cubic-bezier(0.33, 2, 0.41, 0.69);
  }
  &:hover img {
    transform: scale(1.3);
  }
  @media (max-width: 991.98px) {
    img {
      width: 1.8em;
    }
  }
  @media (max-width: 767.98px) {
    img {
      width: 2em;
    }
  }

  @media (max-width: 575.98px) {
    font-size: 0.9rem;
  }
`;
