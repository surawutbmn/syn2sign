import "./footer.css";
import {Container } from "react-bootstrap";
import SponsorsGrid from "./Sponsor/SponsorGrid";
import SponRow from "./Sponsor/SponRow";
import { sponsors } from "./Sponsor/Sponsor";
import SocialLinks from "./Social/SocialLink";

export const Footers = () => {
  return (
    <>
      <footer id="footer" className="pb-3 position-relative">
        {/* <div className="bg-gd-foot"></div> */}
        <Container className="align px-4 d-flex flex-column flex-md-row justify-content-between">
          <div className="d-block d-md-none w-100 w-xs-50 mb-3">
            <span className="txt-cap text-center">sponsored by:</span>
            <SponsorsGrid sponsors={sponsors} />
          </div>
          <div className="d-none d-md-flex flex-column">
            <SponRow sponsors={sponsors} />
          </div>
          <div className="d-flex flex-column">
              <SocialLinks />
          </div>
        </Container>
      </footer>
    </>
  );
};
