import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeElement from "../component/HomeElement/HomeElement";
import styled from "styled-components";
import messagesData from "/src/Pages/Exhibition/messages.json"; // Adjust path as needed
import projectsData from "./Home.json"; // Adjust path as needed

function Home() {
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Function to get 5 random messages
    const getRandomMessages = () => {
      const messagesObject = messagesData.find(
        (item) => item.type === "table" && item.name === "messages"
      );
      const allMessages = messagesObject ? messagesObject.data : [];
      const shuffled = [...allMessages].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 5);
    };

    // Function to get 2 random projects
    const getRandomProjects = () => {
      const projectKeys = Object.keys(projectsData);
      const shuffledKeys = projectKeys.sort(() => 0.5 - Math.random());
      return [projectsData[shuffledKeys[0]], projectsData[shuffledKeys[1]]];
    };

    // Set initial messages and projects
    setMessages(getRandomMessages());
    setProjects(getRandomProjects());

    // Update messages and projects every 5 seconds
    const interval = setInterval(() => {
      setMessages(getRandomMessages());
      setProjects(getRandomProjects());
    }, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <HomeElement />
      <Container className="position-relative">
        <Row className="align-items-center mb-5 mt-3">
          <Col xs={4} className="text-start mb-6 align-self-start mt-3">
            <h1>
              <strong>
                0<span className="txt-prim">8*2</span>
              </strong>
            </h1>
            <h4 className="txt-head3 txt-upper">projects</h4>
            <p>
              Student Senior Project 2024 <br />รวบรวมผลงานสำเร็จการศึกษา<br />
              นักศึกษาปีการศึกษา 2566
            </p>
          </Col>
          <Col xs={4} className="mb-4 align-self-start">
            <img
              className="w-100"
              src="/s2s-logo/s2s-outline-logo.svg"
              alt=""
            />
            <h2 className="txt-body3 txt-upper mt-4">
              &ldquo;Syn of art and technology, the force of ideas combined and
              brought into syn2sign&rdquo;
            </h2>
          </Col>
          <Col xs={4} className="text-end mt-3">
            <p className="">Review Records (5★ Out of 20)</p>
            <SocialContainer>
              {messages.map((msg, index) => (
                <SocialBox className="txt-body3" key={index}>
                  {msg.message}
                </SocialBox>
              ))}
            </SocialContainer>
          </Col>
          
          {projects.map((project, index) => (
            <Col
              xs={6}
              className={`d-flex text-end ${index === 0 ? "justify-content-end" : "justify-content-start"}`}
              key={index}
            >
              <a href={project.link}>
                <DeviceBox>
                  {index === 0 ? (
                    <FrontBox>
                      <div
                        className="txt-upper txt-prim text-start txt-bold ms-3 mt-1"
                        style={{ fontSize: "1.25rem" }}
                      >
                        {project.title}
                      </div>
                      <div className="txt-dark text-start ms-3 txt-body3">
                        {project.subtitle}
                      </div>
                    </FrontBox>
                  ) : (
                    <FrontBox2>
                      <div
                        className="txt-upper txt-prim text-start txt-bold ms-3 mt-1"
                        style={{ fontSize: "1.25rem" }}
                      >
                        {project.title}
                      </div>
                      <div className="txt-dark text-start ms-3 txt-body3">
                        {project.subtitle}
                      </div>
                    </FrontBox2>
                  )}
                  <DeviceImage src={project.img} />
                </DeviceBox>
              </a>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;

// Styled components
const SocialBox = styled.div`
  width: fit-content;
  height: auto;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 10px;
  margin-bottom: 10px; /* Add spacing between each box */
  text-align: right; /* Align text to the right */
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Align all boxes to the right */
`;

const DeviceBox = styled.div`
  position: relative;
  width: 210px;
  height: 210px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.1); /* #fff at 10% opacity */
  padding: 30px;
  margin-top: -90px;
  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transition for background and shadow */

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
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    z-index: -1;
    transition: background 0.3s; /* Smooth transition for the gradient */
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5); /* Darker background on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Optional shadow effect */
  }

  &:hover:before {
    background: linear-gradient(
      131deg,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(5, 186, 100, 0.8) 100%
    );
  }
`;

const DeviceImage = styled.img.attrs({
  loading: "lazy"  // Add the lazy loading attribute
})`
  height: 100%;
  width: auto;
  object-fit: contain; /* Ensures the image maintains its aspect ratio */
  display: block;
  margin: 0 auto; /* Centers the image horizontally */
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
