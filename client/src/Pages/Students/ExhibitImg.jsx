import { Col, Container, Row } from "react-bootstrap";
import propTypes from "prop-types";
import styled from "styled-components";

function ExhibitImg({ name, std_id }) {
    const images = [
      {
        id: 1,
        exhimg: `${std_id}-img-1.webp`,
      },
      {
        id: 2,
        exhimg: `${std_id}-img-2.webp`,
      },
      {
        id: 3,
        exhimg: `${std_id}-img-3.webp`,
      },
      {
        id: 4,
        exhimg: `${std_id}-img-4.webp`,
      },
      {
        id: 5,
        exhimg: `${std_id}-img-5.webp`,
      },
    ];
  return (
    <>
      <Container className="text-start my-5">
        <div className="txt-grey mb-3">
          Some {name}&rsquo;s Syncshot at Syn2sign Exhibition 2024
        </div>
        <Row xs={2}>
          {images.slice(0, 1).map((img, index) => (
            <Col key={index}>
              <CardImg
                src={`/creator_img/exhImg/${img.exhimg}`}
                alt={`image-${index + 1}`}
              />
            </Col>
          ))}
          <Col>
            <Row xs={2} className="g-2">
              {images.slice(1).map((img, index) => (
                <Col key={index}>
                  <CardImg
                    src={`/creator_img/exhImg/${img.exhimg}`}
                    alt={`image-${index + 2}`}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

ExhibitImg.propTypes = {
  name: propTypes.string.isRequired,
  std_id: propTypes.string.isRequired,
  //   images: propTypes.arrayOf(
  //     propTypes.shape({ exhimg: propTypes.string.isRequired })
  //   ).isRequired,
};
export default ExhibitImg;

const CardImg = styled.img`
  width: 100%;
`;
