import gsap, { Power1 } from 'gsap';
import { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const HeadTxt = styled.h1`
  font-weight: var(--txt-sbold);
  color: var(--color-primary);
`;
const AdviceCon = styled.div`
  font-size: 1.2em;
  @media (max-width: 767.99px) {
    font-size: 1em;
  }
  @media (max-width: 575.99px) {
    font-size: 1.2em;
    margin-left: 3rem;
  }
`;
const SubHeading = styled.h2`
  font-weight: var(--txt-bold);
  text-transform: uppercase;
  color: var(--color-primary);
  margin-bottom: 3rem;
`;
const Logo = styled.img`
  width: 24dvw;
  @media (max-width: 767.99px) {
    width: 50dvw;
  }
  @media (max-width: 575.99px) {
    width: 50dvw;
  }
`;
function FirstSec() {
    useEffect(() => {
      gsap.fromTo(
        ".s2s-logo",
        2,
        { y: 0 },
        { y: -10, ease: Power1.easeInOut, repeat: -1, yoyo: true, delay: 0.4 }
      );
    }, []);
  return (
    <Container className="position-relative">
      <div className="text-center mt-5">
        <HeadTxt>CREDIT Syn2sign</HeadTxt>
        <div className="mt-5">
          <span className="txt-sbold txt-upper">
            <h3 className="mb-4">SENIOR PROJECT ACADEMIC YEAR 2023</h3>
            Senior Project Exhibition 2024 • FROM SENIOR PROJECT PREPARATION AND
            SENIOR PROJECT
            <p>
              INTERACTIVE APPLICATION PROGRAMME DIGITAL TECHNOLOGY FOR DESIGN{" "}
              <br />
              INFORMATION AND COMMUNICATION TECHNOLOGY SILPAKORN UNIVERSITY
            </p>
          </span>
        </div>
        <Logo
          src={import.meta.env.VITE_BASE_URL + "images/s2s-logo/syn2sign_logo_cl.webp"}
          alt="syn2sign logo"
          className="s2s-logo"
        />
      </div>
      <div className="mt-4">
        <SubHeading>
          Administration Committee of the Faculty of Information and
          Communication Technology
        </SubHeading>
        <span>
          <h5>
            <strong>Nathaporn Karnjanapoomi</strong>
          </h5>
          <p>Dean of Faculty of Information and Communication Technology</p>
        </span>
        <span>
          <h5>
            <strong>Yuwaboon Thamrongsombatsakul</strong>
          </h5>
          <p>Chairman of Academic Disciplines, Digital Technology for Design</p>
        </span>
      </div>
      <div className="mt-5">
        <SubHeading>Project Advisory Committee</SubHeading>
        <Row xs={1} md={3} className="justify-content-center">
          <Col className="d-flex justify-content-md-center">
            <AdviceCon className="text-start">
              <span>
                <strong>ADVISORS GROUP 1</strong>
              </span>
              <p>
                Rakchanok Sukagalanan<br />
                Sranya Maraprygsavan <br />
                Nattavut Luenthaisong <br />
                Sarayut Thibhodee
              </p>
            </AdviceCon>
          </Col>
          <Col className="d-flex justify-content-md-center">
            <AdviceCon className="text-start">
              <span>
                <strong>ADVISORS GROUP 2</strong>
              </span>
              <p>
                Orawan Praphruetdee <br />
                Methin Pingsutthiwong <br />
                Kittinon Oywongpaisan <br />
                Nathapong Masathien
              </p>
            </AdviceCon>
          </Col>
          <Col className="d-flex justify-content-md-center">
            <AdviceCon className="text-start">
              <span>
                <strong>ADVISORS GROUP 3</strong>
              </span>
              <p>
                Kachornpon Hiranchotepaisan <br />
                Kanpat Kalumpahaiti <br />
                Chuladid Suntitoranee <br />
                Pasupong Prasertroongrueng
              </p>
            </AdviceCon>
          </Col>
        </Row>
        <div className="text-center mt-5">
          <SubHeading>Introducing the ICT:SILPAKORN</SubHeading>
          <p>
            <a
              href="https://ict.su.ac.th/?page_id=32"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white" }}
            >
              หลักสูตรเทคโนโลยีดิจิทัลเพื่อการออกแบบ (Digital Technology for
              Design),
            </a>
          </p>
        </div>
      </div>
    </Container>
  );
}

export default FirstSec