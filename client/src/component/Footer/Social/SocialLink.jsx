import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { socialLinks } from "./Social";

const FooterLink = styled.a`
  display: block;
  margin: 0 0.5rem;
  img {
    width: 1.5em;
    height: auto;
    transition: all 0.3s ease;
  }
  &:hover img {
    transform: scale(1.3);
  }
  @media (max-width: 991.98px) {
    img {
      width: 3em;
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
  // <Row>
  //   <Col>
  <div>
      <h6 className="txt-cap text-start d-none d-md-flex"  style={{ fontSize: "0.625rem" }}>Follow us:</h6>
      {/* <h6 className="txt-cap text-center d-flex d-md-none">Follow us:</h6> */}
      <div className="d-flex align-items-center mt-4">
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
     {/* </Col> */}
   {/* </Row> */}
  </div>
);

export default SocialLinks;
