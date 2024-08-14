import styled from "styled-components";
import { socialLinks } from "./Social";

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

const SocialLinks = () => (
  <>
      <span className="txt-cap text-start d-none d-md-flex mb-1" style={{ fontSize: "0.625rem" }}>Follow us:</span>
      <h6 className="txt-cap text-center d-flex d-md-none "style={{ fontSize: "0.625rem" }}>Follow us:</h6>
      <div className="d-flex align-items-center mt-2">
        {socialLinks.map((link, index) => (
          <FooterLink
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={link.src} alt={link.alt} />
          </FooterLink>
        ))}
      </div>
  </>
);

export default SocialLinks;
