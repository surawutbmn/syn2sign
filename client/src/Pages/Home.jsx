import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeElement from "../component/HomeElement/HomeElement";
import styled from "styled-components";
import messagesData from "/src/Pages/Exhibition/messages.json"; // Adjust path as needed

function Home() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Function to get 5 random messages
    const getRandomMessages = () => {
      // Access the 'data' property from the correct object in the array
      const messagesObject = messagesData.find(item => item.type === "table" && item.name === "messages");
      const allMessages = messagesObject ? messagesObject.data : [];
      const shuffled = [...allMessages].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 5);
    };

    // Set initial messages
    setMessages(getRandomMessages());

    // Update messages every 5 seconds
    const interval = setInterval(() => {
      setMessages(getRandomMessages());
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <HomeElement />
      <Container className="position-relative">
        <Row className="align-items-center mb-5 mt-2">
          <Col xs={4} className="text-start mt-5 mb-6">
            <h1>
              <strong>
                0<span className="txt-prim">8*2</span>
              </strong>
            </h1>
            <h4 className="txt-head3 txt-upper">projects</h4>
            <hr />
            <p>
              Student Senior Project 2024 เว็บไซต์รวบรวมผลงานสำเร็จการศึกษา
              นักศึกษาปีการศึกษา 2566
            </p>
          </Col>
          <Col xs={4} className="mb-4">
            <img className="w-100" src="/s2s-logo/s2s-outline-logo.svg" alt="" />
            <h2 className="txt-body2 txt-upper">
              &ldquo;Syn of art and technology, the force of ideas combined and
              brought into syn2sign&rdquo;
            </h2>
          </Col>
          <Col xs={4} className="text-end mt-3 mb-6">
            <p className="txt-upper">social review</p>
            {messages.map((msg, index) => (
              <SocialBox className="txt-body3" key={index}>
                {msg.message}
              </SocialBox>
            ))}
          </Col>
          
          <Col xs={6} className="d-flex text-end justify-content-end">
            <DeviceBox>
              <FrontBox>
                <div className="txt-upper txt-prim text-start txt-bold ms-3 mt-1" style={{fontSize: "1.25rem"}}>WAIWAN</div>
                <div className="txt-dark text-start ms-3 txt-body3">LINE OA APPLICATION</div>
              </FrontBox>
              <DeviceImage src="/showcase/Project/cpl03/concept-device-cpl03.png" />
            </DeviceBox>
          </Col>

          <Col xs={6} className="d-flex text-end justify-content-start">
            <DeviceBox>
              <FrontBox2>
                <div className="txt-upper txt-prim text-start txt-bold ms-3 mt-1" style={{fontSize: "1.25rem"}}>Young & Chick</div>
                <div className="txt-dark text-start ms-3 txt-body3">WEB APPLICATION</div>
              </FrontBox2>
              <DeviceImage src="/showcase/Project/cpl06/concept-device-cpl06.png" />
            </DeviceBox>
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default Home;

const SocialBox = styled.div`
 width: fit-content;
 height: auto;
 border: 1px solid #fff;
 border-radius: 20px;
 padding: 10px;
`;

const DeviceBox = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1); /* #fff at 10% opacity */
  padding: 10px;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(
      131deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(5, 186, 100, 1) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
  }
`;

const DeviceImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
`;

const FrontBox = styled.div`
  position: absolute;
  width: 250px; /* Make FrontBox wider than DeviceBox */
  height: 60px;
  background-color: rgba(255, 255, 255); 
  border-radius: 10px; /* Rounded corners */
  bottom: 0px; 
  left: 10%;
  transform: translateX(-50%); /* Center the FrontBox horizontally */
  z-index: 1; /* Ensure it's on top of DeviceBox */
`;

const FrontBox2 = styled.div`
  position: absolute;
  width: 250px; /* Make FrontBox wider than DeviceBox */
  height: 60px;
  background-color: rgba(255, 255, 255); 
  border-radius: 10px; /* Rounded corners */
  bottom: 0px; 
  left: 90%;
  transform: translateX(-50%); /* Center the FrontBox horizontally */
  z-index: 1; /* Ensure it's on top of DeviceBox */
`;