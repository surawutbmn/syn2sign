import { Col, Container, Row } from "react-bootstrap";
import HomeElement from "../component/HomeElement/HomeElement";


function Home() {
  
  return (
    <div>
      <HomeElement />
      <Container className="position-relative">
        {/* <Row className="align-items-center">
          <Col xs={3} className="text-start">
            <h1>
              <strong>
                0<span className="txt-prim">8*2</span>
              </strong>
            </h1>
            <h4>projects</h4>
            <hr />
            <p>
              Student Senior Project 2024 เว็บไซต์รวบรวมผลงานสำเร็จการศึกษา
              นักศึกษาปีการศึกษา 2566
            </p>
          </Col>
          <Col xs={6}>
            <img src="/s2s-logo/s2s-outline-logo.svg" alt="" />
            <h2>
              &ldquo;Syn of art and technology, the force of ideas combined and
              brought into syn2sign&rdquo;
            </h2>
          </Col>
          <Col xs={3}>
            <p>social review</p>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
}

export default Home;