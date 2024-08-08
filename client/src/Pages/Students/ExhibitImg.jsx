import { Col, Container, Row } from "react-bootstrap"
import PropTypes from "prop-types";

function ExhibitImg(props) {
  return (
    <>
      <Container className="text-start my-5">
        <div className="txt-grey mb-3">
          Pictures of {props.name} inside the Syn2sign exhibition
        </div>
        <Row xs={2}>
          <Col>
            <img
              src="/creator_img/exhImg/073-img-1.png"
              alt="creator onsite"
              style={{ width: "100%" }}
            />
          </Col>
          <Col>
            <Row xs={2} className="g-2">
              <Col>
                <img
                  src="/creator_img/exhImg/073-img-2.png"
                  alt="creator onsite"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <img
                  src="/creator_img/exhImg/073-img-3.png"
                  alt="creator onsite"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <img
                  src="/creator_img/exhImg/073-img-4.png"
                  alt="creator onsite"
                  style={{ width: "100%" }}
                />
              </Col>
              <Col>
                <img
                  src="/creator_img/exhImg/073-img-5.png"
                  alt="creator onsite"
                  style={{ width: "100%" }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

ExhibitImg.propTypes = {
  name: PropTypes.string.isRequired,
};
export default ExhibitImg