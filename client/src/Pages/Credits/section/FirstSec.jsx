import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';

const HeadTxt = styled.h1`
font-weight: var(--txt-sbold);`;
const AdviceCon = styled.div`
    font-size: 1.2em;
`;
function FirstSec() {
  return (
    <Container className="position-relative">
      <div className="text-center mt-5">
        <HeadTxt className="txt-prim">CREDIT Syn2sign</HeadTxt>
        <div className="mt-5">
          <span className="txt-sbold txt-upper">
            <h3 className="mb-4">SENIOR PROJECT ACADEMIC YEAR 2023</h3>
            Senior Project Exhibition 2024 • FROM 802408 SENIOR PROJECT
            PREPARATION AND 802409 SENIOR PROJECT
            <p>
              INTERACTIVE APPLICATION PROGRAMME DIGITAL TECHNOLOGY FOR DESIGN{" "}
              <br />
              INFORMATION AND COMMUNICATION TECHNOLOGY SILPAKORN UNIVERSITY
            </p>
          </span>
        </div>
        <img
          src="../../s2s-logo/syn2sign_logo_cl.webp"
          alt="syn2sign logo"
          className="s2s-logo"
        />
      </div>
      <div className="mt-4">
        <h2 className="txt-prmhead mb-4">
          Administration Committee of the Faculty of Information and
          communication technology
        </h2>
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
        <h2 className="txt-prmhead mb-4">Project Advisory Committee</h2>
        <Row xs={1} md={3} className="justify-content-center">
          <Col className="d-flex justify-content-center">
            <AdviceCon className=" advice-con text-start">
              <span>
                <strong>ADVISORS GROUP 1</strong>
              </span>
              <p>
                Rakchanok Sukagalanan (Chairman) <br />
                Nattavut Luenthaisong <br />
                Sranya Maraprygsavan <br />
                Sarayut Thibhodee
              </p>
            </AdviceCon>
          </Col>
          <Col className="d-flex justify-content-center">
            <AdviceCon className=" advice-con text-start">
              <span>
                <strong>ADVISORS GROUP 2</strong>
              </span>
              <p>
                Orawan Praphruetdee (Chairman) <br />
                Methin Pingsutthiwong <br />
                Kittinon Oywongpaisan <br />
                Nathapong Masathien
              </p>
            </AdviceCon>
          </Col>
          <Col className="d-flex justify-content-center">
            <AdviceCon className=" advice-con text-start">
              <span>
                <strong>ADVISORS GROUP 3</strong>
              </span>
              <p>
                Kachornpon Hiranchotepaisan (Chairman) <br />
                Kanpat Kalumpahaiti <br />
                Chuladid Suntitoranee <br />
                Pasupong Prasertroongrueng
              </p>
            </AdviceCon>
          </Col>
        </Row>
        <div className="text-center mt-5">
            <h2 className="txt-prmhead mb-4">Introducing the ICT:SILPAKORN</h2>
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