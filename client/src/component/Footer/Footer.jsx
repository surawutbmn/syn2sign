import "./footer.css";
import { Col, Container, Row } from "react-bootstrap";
import SponsorsGrid from "./Sponsor/SponsorGrid";
import SponRow from "./Sponsor/SponRow";
import { sponsors } from "./Sponsor/Sponsor";
import SocialLinks from "./Social/SocialLink";

export const Footers = () => {
  return (
    <>
      <footer id="footer" className="pb-3 position-relative">
        {/* <div className="bg-gd-foot"></div> */}
        <Container className="align px-4 d-flex flex-column flex-lg-row justify-content-between ">

          <div className="d-block d-lg-none w-100 w-xs-50 mb-3">
            {/* <span className="txt-cap text-center txt-body3">sponsored by:</span> */}
            <SponsorsGrid sponsors={sponsors} />
          </div>

          <div className="d-none d-lg-flex">
            <SponRow sponsors={sponsors} />
          </div>

          <Row>

            <Col >
              <SocialLinks/>
            </Col>

          </Row>
        </Container>
      </footer>
    </>
  );
};
