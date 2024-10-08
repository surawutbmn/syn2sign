  import { useState, useEffect } from "react";
  import { Col, Container, Row } from "react-bootstrap";
  import HomeElement from "../component/HomeElement/HomeElement";
  import styled from "styled-components";
  import messagesData from "/src/Pages/Exhibition/messages.json"; // Adjust path as needed

  import projectsdata from "../../public/data/Projectdata";
import { Link } from "react-router-dom";

  function Home() {
    const [messages, setMessages] = useState([]);
    const [messagesContainer2, setMessagesContainer2] = useState([]);
    const [projects, setProjects] = useState([]);
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
      // Trigger animation when data updates
      if (projects && projects.length > 0) {
        setAnimate(true);
        // Reset animation state after animation completes (adjust timing as needed)
        const timer = setTimeout(() => setAnimate(false), 700);
        return () => clearTimeout(timer);
      }
    }, [projects]);
    useEffect(() => {
      // Function to get messages for SocialContainer
      const getMessagesForContainer1 = () => {
        const messagesObject = messagesData.find(
          (item) => item.type === "table" && item.name === "messages"
        );
        const allMessages = messagesObject ? messagesObject.data : [];
        const shuffled = [...allMessages].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 5); // 5 messages for SocialContainer
      };
  
      // Function to get messages for SocialContainer2
      const getMessagesForContainer2 = () => {
        const messagesObject = messagesData.find(
          (item) => item.type === "table" && item.name === "messages"
        );
        const allMessages = messagesObject ? messagesObject.data : [];
        const shuffled = [...allMessages].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3); // 3 messages for SocialContainer2
      };
  
      // Function to get 2 random projects
      const getRandomProjects = () => {
        const projectKeys = Object.keys(projectsdata);
        const shuffledKeys = projectKeys.sort(() => 0.5 - Math.random());
        return [projectsdata[shuffledKeys[0]], projectsdata[shuffledKeys[1]]];
      };
      
  
      // Set initial messages and projects
      setMessages(getMessagesForContainer1());
      setMessagesContainer2(getMessagesForContainer2());
      setProjects(getRandomProjects());
      // console.log(projects);
      
  
      // Update messages and projects every 5 seconds
      const interval = setInterval(() => {
        setMessages(getMessagesForContainer1());
        setMessagesContainer2(getMessagesForContainer2());
        setProjects(getRandomProjects());
      }, 5000);
  
      // Cleanup interval on unmount
      return () => clearInterval(interval);
    }, []);

    return (
      <div>
        <HomeElement />
        <Container
          className="position-relative"
          style={
            {
              // marginTop: window.innerWidth <= 767 ? '1rem' : '0', // Adjust the value as needed
              // paddingTop: window.innerWidth <= 767 ? '1rem' : '0'  // Adjust the value as needed
            }
          }
        >
          <Row className="align-items-start mb-5 mt-3">
            <Col xs={5} className="text-start d-block d-md-none">
              <h1>
                <strong>
                  <span className="txt-prim">8*2</span>
                </strong>
                <h4 className="txt-head3 txt-upper">projects</h4>
              </h1>
            </Col>
            <Col xs={7} className="d-block d-md-none">
              <p className="txt-body3 text-end">
                Student Senior Project 2024 <br />
                รวบรวมผลงานสำเร็จการศึกษา
                <br />
                ของนักศึกษา ปีการศึกษา 2566
              </p>
            </Col>
            <Col xs={12} className="d-block d-md-none mt-5">
              <img
                className="w-75 "
                src={import.meta.env.VITE_BASE_URL + "images/s2s-logo/s2s-outline-logo.svg"}
                alt=""
              />
              <h2 className="txt-body3 txt-upper mt-4">
                &ldquo;Syn of Art and Technology, the Force of Ideas Combined and Brought Into Syn2sign&rdquo;
              </h2>
            </Col>
            <Col xs={12} className="d-block d-md-none mt-4">
              {/* test */}
              <p className="" style={{ fontSize: "0.7em" }}>Review June '24 Onward Exhibition Records (20)</p>
              <SocialContainer2>
                {messagesContainer2.map((msg, index) => (
                  <SocialBox2 className="txt-body3 " key={index}>
                    {msg.message}
                  </SocialBox2>
                ))}
              </SocialContainer2>
            </Col>
            {projects.map((project, index) => (
              <Col
                style={{ marginTop: "5rem" }}
                xs={6}
                className={`d-flex text-end d-block d-md-none ${
                  index === 0 ? "justify-content-end " : "justify-content-start "
                }${animate ? "card-animate" : ""}`}
                key={index}
              >
                <Link
                  to={`/showcase/projects/${project.project_id}`}
                  className="mt-"
                >
                  <DeviceBox>
                    {index === 0 ? (
                      <FrontBox>
                        <div
                          className="txt-upper txt-prim text-start txt-bold ms-3 mt-1"
                          style={{ fontSize: "1.25rem" }}
                        >
                          {project.name_en} 
                        </div>
                        <div className="txt-dark text-start ms-3 txt-body3">
                          {project.type}
                        </div>
                      </FrontBox>
                    ) : (
                      <FrontBox2>
                        <div
                          className="txt-upper txt-prim text-start txt-bold ms-3 mt-1"
                          style={{ fontSize: "1.25rem" }}
                        >
                          {project.name_en}
                        </div>
                        <div className="txt-dark text-start ms-3 txt-body3">
                          {project.type}
                        </div>
                      </FrontBox2>
                    )}
                    <DeviceImage
                      src={`${import.meta.env.VITE_BASE_URL}images/project_img/device/${project.device_img}`}
                    />
                  </DeviceBox>
                </Link>
              </Col>
            ))}

            <Col
              xs={4}
              className="text-start mb-6 align-self-start mt-3 d-none d-md-block"
            >
              <h1>
                <strong>
                  <span className="txt-prim "></span><span className="txt-light">8</span><span className="txt-prim ">*2</span>
                  {/* 0<span className="txt-prim">8</span> */}
                </strong>
              </h1>
              <h4 className="txt-head3 txt-upper">showcases</h4>
              <p className="d-none d-md-block txt-body">
                Student Senior Project 2024 <br />
                รวบรวมผลงานสำเร็จการศึกษา
                <br />
                ของนักศึกษา ปีการศึกษา 2566
              </p>
            </Col>
            <Col xs={4} className="mb-4 align-self-start d-none d-md-block">
              <img
                className="w-100"
                src={import.meta.env.VITE_BASE_URL+"images/s2s-logo/s2s-outline-logo.svg"}
                alt=""
              />
              <h2 className="txt-body3  mt-4">
                &ldquo;Syn of Art and Technology, the Force of Ideas Combined and Brought Into Syn2sign&rdquo;
              </h2>
            </Col>
            <Col xs={4} className="text-end mt-3 d-none d-md-block">
              <p className="" style={{ fontSize: "0.7em" }}>Review June '24 Onward Exhibition Records (20)</p>
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
                className={`d-none d-md-flex text-end ${
                  index === 0 ? "justify-content-end " : "justify-content-start "
                } ${animate ? " card-animate" : ""}`}
                key={index}
              >
                
                <Link
                  to={`/showcase/projects/${project.project_id}`}
                  className="d-none d-md-block"
                >
                  <DeviceBox>
                    {index === 0 ? (
                      <FrontBox>
                        <div
                          className="txt-upper txt-prim text-start txt-bold ms-3 mt-1"
                          style={{ fontSize: "1.25rem" }}
                        >
                          {project.name_en}
                        </div>
                        <div className="txt-dark text-start ms-3 txt-body3">
                          {project.type}
                        </div>
                      </FrontBox>
                    ) : (
                      <FrontBox2>
                        <div
                          className="txt-upper txt-prim text-start txt-bold ms-3 mt-1"
                          style={{ fontSize: "1.25rem" }}
                        >
                          {project.name_en}
                        </div>
                        <div className="txt-dark text-start ms-3 txt-body3">
                          {project.type}
                        </div>
                      </FrontBox2>
                    )}
                    <DeviceImage
                      src={`${import.meta.env.VITE_BASE_URL}images/project_img/device/${project.device_img}`}
                    />
                  </DeviceBox>
                </Link>
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
    border: .1em solid rgba(142, 142, 142, .5);
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 10px; /* Add spacing between each box */
    text-align: right; /* Align text to the right */
  `;

 const SocialBox2 = styled.div`
 width: fit-content;
 height: auto;
 border: .1em solid rgba(142, 142, 142, .5);
 border-radius: 20px;
 padding: 10px;
 margin: 0 10px;
 /* margin-bottom: 10px; */
 text-align: center; /* Align text to the right */
`;
  const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Align all boxes to the right */
  `;
  const SocialContainer2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center; /* Align all boxes to the right */
`;
  // Styled components
  const DeviceBox = styled.div`
    position: relative;
    width: 140px; /* Adjusted width for mobile */
    height: 140px; /* Adjusted height for mobile */
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.1); /* #fff at 10% opacity */
    padding: 20px; /* Reduced padding */
    margin-top: -60px; /* Adjusted margin */
    /* transition: background-color 0.3s, box-shadow 0.3s; */
    transition: transform 0.3s cubic-bezier(0.37, -0.59, 0.71, 1.44);
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
      
    }

    &:hover {
      
    transform: scale3d(1.02, 1.02, 1.02);
  }

    /* &:hover:before {
      background: linear-gradient(
        131deg,
        rgba(255, 255, 255, 0.5) 0%,
        rgba(255, 255, 255, 0.5) 50%,
        rgba(5, 186, 100, 0.8) 100%
      );
    } */

    @media (min-width: 768px) {
      width: 210px; /* Original width for larger screens */
      height: 210px; /* Original height for larger screens */
      padding: 30px; /* Original padding */
      margin-top: -90px; /* Original margin */
    }
  `;

const FrontBox = styled.div`
  position: absolute;
  width: 175px; /* Adjusted width for mobile */
  height: 60px; /* Adjusted height for mobile */
  background-color: rgba(255, 255, 255);
  border-radius: 10px; /* Rounded corners */
  bottom: 0px;
  left: 40%;
  transform: translateX(-50%); 
  z-index: 1; /* Ensure it's on top of DeviceBox */
  top: 100px; /* Adjust the top positioning for larger screens if needed */
  @media (min-width: 768px) {
    width: 250px; /* Original width for larger screens */
    height: 60px; /* Original height for larger screens */
    left: -40%; /* Adjust position for larger screens */
    right: 40%;
    top: 80%;
    transform: none; /* Remove horizontal centering for larger screens */

  }
`;

const FrontBox2 = styled.div`
  position: absolute;
  width: 175px; /* Adjusted width for mobile */
  height: 60px; /* Adjusted height for mobile */
  background-color: rgba(255, 255, 255);
  border-radius: 10px; /* Rounded corners */
  bottom: 0px;
  left: 60%;
  transform: translateX(-50%); /* Center horizontally on mobile */
  z-index: 1; /* Ensure it's on top of DeviceBox */
  top: 100px; /* Adjust the top positioning for larger screens if needed */
  @media (min-width: 768px) {
    width: 250px; /* Original width for larger screens */
    height: 60px; /* Original height for larger screens */
    left: 20%; /* Adjust position for larger screens */
    top: 80%;
    transform: none; /* Remove horizontal centering for larger screens */
    
  }
`;

  const DeviceImage = styled.img.attrs({
    loading: "lazy", // Add the lazy loading attribute
  })`
    height: 70%; /* Adjusted height for mobile */
    width: auto;
    object-fit: contain; /* Ensures the image maintains its aspect ratio */
    display: block;
    margin: 0 auto; /* Centers the image horizontally */

    @media (min-width: 768px) {
      height: 100%; /* Original height for larger screens */
    }
  `;
