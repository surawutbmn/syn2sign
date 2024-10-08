import { useState, useEffect, useRef } from "react";
import "./project.css";
import { Link, useParams } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Accordions from "./Accordion/Accordion";
import projectsdata from "/public/data/Projectdata";
import { Container, Breadcrumb } from "react-bootstrap";
import SectionTitle from "../../component/SectionTitle";
import studentsdata from "../../../public/data/Studentdata";
import PageElement from "../../component/Element/PageElement";
import SocialApproved from "./AccordionContent/SocialApproved";
import CardThreePictureProject from "./AccordionContent/TopPicture";
import LinkButton from "../../component/Button/LinkButton";
import CardIdeaConcept from "../../component/card/CardIdeaConcept";
import CardKeyword from "../../component/card/CardKeyword";
import CardMainFunction from "../../component/card/CardMainFunction";
import CardToolDevelopment from "../../component/card/CardToolDevelopment";
import CardToolDesignPresentation from "../../component/card/CardToolDesignPresentation";
import CardDesignProcess from "../../component/card/CardDesignProcess";
import CardTargetGroup from "../../component/card/CardTargetGroup";
import CardFeedback from "../../component/card/CardFeedback";
import CardCreator from "../../component/card/CardCreator";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SocialApprovedMobile from "./AccordionContent/SocialApprovedMobile";
import CardIdeaConceptMobile from "../../component/card/CardIdeaConceptMobile";
import useIsMobile from "./useIsMobile";
import CardToolDevelopmentMobile from "../../component/card/CardToolDevelopmentMobile";
import CardFeedbackMobile from "../../component/card/CardFeedbackMobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import CardCreatorMobile from "../../component/card/CardCreatorMobile";

function Project() {
  const [project, setProject] = useState(null);
  // const [students, setStudents] = useState([]);
  const { prj_id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook to programmatically navigate
  const isMobile = useIsMobile();
  const handleImageClick = () => {
    navigate("/"); // Replace with your desired URL
  };

  const handleShowcaseClick = (event) => {
    event.preventDefault(); // Prevent default behavior of link
    handleScrollToTop();
    navigate("/showcase#project"); // Programmatically navigate to the desired URL
  };

  const [activeProject, setActiveProject] = useState(
    prj_id
  );
  
  // useEffect(() => {
  //   if (activeProject && projectRefs.current[activeProject]) {
  //     projectRefs.current[activeProject].scrollIntoView({
  //       behavior: "smooth",
  //       block: "center",
  //       inline: "center",
  //     });
  //   }
  // }, [activeProject]);
const ref = useRef();
  useEffect(() => {
   setTimeout(() => {
    const width = ref?.current
    ?.querySelector(".active")
    ?.getClientRects()[0]?.width;
    const n = projectsdata.findIndex((project) => project.project_id === activeProject) + 1;
  ref.current.scrollTo({
    left: (width) * n - (width ),
    behavior: "smooth",
  });
   }, 1000);
  }, [activeProject]);
  // console.log("LOG", projectsdata.findIndex((project) => project.project_id === activeProject));
  const findProjectById = (project_id) => {
    return (
      projectsdata.find((project) => project.project_id === project_id) || null
    );
  };
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };
  const fetchProject = async (project_id) => {
    setLoading(true);
    try {
      const localProject = findProjectById(project_id);
      if (localProject) {
        setProject(localProject);
        
        localStorage.setItem("activeProject", project_id);
        setError(null); // Clear any previous errors
      }
    } catch (error) {
      console.error("Error fetching project data", error);
      setError("Error fetching project data");
    } finally {
      setLoading(false);
    }
  };

  // const fetchStudents = async () => {
  //   try {
  //     if (studentsdata) {
  //       setStudents(studentsdata);
  //     }
  //   } catch (error) {
  //     console.error("Error fetching student data", error);
  //   }
  // };

  useEffect(() => {
    fetchProject(prj_id);
    // fetchStudents();
  }, [prj_id]);

  useEffect(() => {
    if (project) {
      document.title = `${project.name_en} - Syn2sign senior project exhibition 2024`;
    }
  }, [project]);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!project) return <div>No project data available</div>;

  // console.log(students);
  const items = [
    {
      title: "idea concept",
      subtitle: "แนวคิดของผลงาน",
      content: isMobile ? (
        <CardIdeaConceptMobile proj_id={prj_id} />
      ) : (
        <CardIdeaConcept proj_id={prj_id} />
      ),
    },
    {
      title: "KeyWORDS",
      subtitle: "คำค้นหา / คำสำคัญ ",
      content: <CardKeyword proj_id={prj_id} />,
    },
    {
      title: "MAIN Function",
      subtitle: "ฟังก์ชันหลัก",
      content: <CardMainFunction proj_id={prj_id} />,
    },
    {
      title: "DEVELOPMENT TOOLs",
      subtitle: "เครื่องมือในการพัฒนาผลงาน",
      content: isMobile ? (
        <CardToolDevelopmentMobile proj_id={prj_id} />
      ) : (
        <CardToolDevelopment proj_id={prj_id} />
      ),
    },
    {
      title: "DESIGN & PRESENTATION TOOLs",
      subtitle: "เครื่องมือในการออกแบบ และนำเสนอผลงาน",
      content: <CardToolDesignPresentation proj_id={prj_id} />,
    },
    {
      title: "Design PROCESS",
      subtitle: "กระบวนการออกแบบผลงาน",
      content: <CardDesignProcess />,
    },
    {
      title: "target group",
      subtitle: "กลุ่มเป้าหมาย",
      content: <CardTargetGroup proj_id={prj_id} />,
    },
    {
      title: "Testing & Feedback",
      subtitle: "ทดสอบจากผู้ใช้งาน และผลตอบรับ",
      content: isMobile ? (
        <CardFeedbackMobile proj_id={prj_id} />
      ) : (
        <CardFeedback proj_id={prj_id} />
      ),
    },
    {
      title: "creator",
      subtitle: "ผู้สร้างผลงาน",
      content: "",
    },
  ];


  const itemsWithStudents = items.map((item) => {
    if (item.title === "creator") {
      return {
        ...item,
        content: (
          <>
            <CardCreator />
          </>
        ),
      };
    }
    return item;
  });

  return (
    <>
      <Helmet>
        {project
          ? `${project.name_en} ${project.name_th} - Syn2sign senior project exhibition 2024`
          : "Loading..."}
      </Helmet>
      <PageElement />
      <Container className="mt-5 position-relative">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <img
              className="prj-sec-icon"
              src={`${import.meta.env.VITE_BASE_URL}images/project_img/prj_logo/${project.icon_sqr}`}
              alt={`${project.name_en} icon`}
            />
            <div className="text-start mx-3 d-none d-md-block">
              <h1 className="txt-pru-head ">
                <strong>{project.name_en}</strong>
              </h1>
              <p className="txt-body1">{project.name_th}</p>
            </div>
          </div>
          <div className="d-flex align-items-baseline">
            <h1 className="outlined-text">#{project.id}</h1>
            <div className="prj-sec-icon2 ms-4">
              <img
                src={`${import.meta.env.VITE_BASE_URL}images/project_img/prj_icon/${project.icon_std}`}
                alt="creator icon"
              />
            </div>
          </div>
        </div>
        <div className="d-flex flex-column text-start mb-3 txt-body1 mt-3 w-70 d-none d-md-block">
          <div className="text-start d-block d-md-none" >
            <h1 className="txt-pru-head txt-head1" >
              <strong >{project.name_en}</strong>
            </h1>
            <p className="txt-body3">({project.name_th})</p>
          </div>
          <div className="txt-body2">
            <p>{project.fullname_th}</p>
          </div>
        </div>

        <div className="d-flex flex-column text-start mb-3 txt-body1 mt-3 w-100 d-block d-md-none">
          <div className="text-start d-block d-md-none">
            <h1 className="txt-pru-head txt-head1">
              <strong>{project.name_en}</strong>
            </h1>
            <p className="txt-body3">({project.name_th})</p>
          </div>
          <div className="txt-body2">
            <p>{project.fullname_th}</p>
          </div>
        </div>

        <div className="text-start txt-grey mb-2 d-none d-md-block">Social Approved</div>

        <div className="text-start txt-grey mb-2 ms-4 d-block d-md-none">Social Approved</div>
      </Container>

      <SocialApproved proj_id={prj_id} />
      <SocialApprovedMobile className="" />
      <Container className="position-relative">
        <CardThreePictureProject />
        <div className="mx-auto ratio ratio-16x9">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${project.shreel_link}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="video-box"
          ></iframe>
        </div>
        <div>
          <LinkButton className="mt-4" name={project.name_en} />
        </div>

        <Accordions items={itemsWithStudents} />

        <div className="mt-4">
          <div className="col">
            <SectionTitle
              title="Other Projects"
              subtitle="ผลงานอื่นๆ"
              className="header-wline"
            />
            <LinkPrjCon ref={ref} className="d-flex justify-content-around text-center mb-5">
              {projectsdata.map((proj, index = project.prj_id) => (
                <div
                  key={index}
                  className={`list-group-item ${
                    activeProject === proj.project_id ? "active" : ""
                  }`}>
                  <Link
                    to={`/showcase/projects/${proj.project_id}`}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default behavior of Link
                      setActiveProject(proj.project_id);
                      navigate(`/showcase/projects/${proj.project_id}`);
                      handleScrollToTop();
                      // window.location.href = `${import.meta.env.VITE_BASE_URL}showcase/projects/${proj.project_id}`; 
                    }}
                    className="link-txt"
                  >
                    <div
                      className="d-flex flex-column align-items-center"
                      style={{ width: "140px" }}
                    >
                      <div className="link-prj-con">
                        <div className="prj-check-i">
                          <BsCheckLg />
                        </div>
                        <div className="icon-prj-ovl"></div>
                        <img
                          className="icon-img-link"
                          src={`${import.meta.env.VITE_BASE_URL}images/project_img/prj_logo/${proj.icon_sqr}`}
                          alt={`${proj.name_en} icon`}
                        />
                      </div>
                      <div className="mt-3 txt-upper prj_name">
                        <span>{proj.name_en}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </LinkPrjCon>
          </div>

          {/* Mobile  */}
          {/* <div className="col-12 mb-5">
            <SectionTitle
              title="Other Projects"
              subtitle="ผลงานอื่นๆ"
              className="header-wline"
            />
            <Swiper
              modules={[Navigation]}
              slidesPerView="auto" // Adjusts the number of slides to fit the container
              navigation={{
                nextEl: ".prj-pl-nav .swiper-button-next",
                prevEl: ".prj-pl-nav .swiper-button-prev",
              }}
              spaceBetween={20} // Space between slides
              breakpoints={{
                0: {
                  slidesPerView: 3.5, // Adjusts the number of slides to fit the container
                },
                576: {
                  slidesPerView: 3.5, // Adjusts the number of slides to fit the container
                },
                768: {
                  slidesPerView: 5, // Adjusts the number of slides to fit the container
                },
                992: {
                  slidesPerView: 5, // Adjusts the number of slides to fit the container
                },
                1200: {
                  slidesPerView: 8,
                },
              }}
            >
              {projectsdata.map((proj) => (
                <SwiperSlide key={proj.project_id} style={{ width: "140px" }}>
                  <div
                    className={`list-group-item ${
                      activeProject === proj.project_id ? "active" : ""
                    }`}
                  >
                    <Link
                      to={`/showcase/projects/${proj.project_id}`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default behavior of Link
                        setActiveProject(proj.project_id);
                        localStorage.setItem("activeProject", proj.project_id);
                        window.location.href = `/showcase/projects/${proj.project_id}`; // Force a full page reload
                      }}
                      className="link-txt"
                    >
                      <div
                        className="d-flex flex-column align-items-center"
                        style={{ width: "140px" }}
                      >
                        <div className="link-prj-con2">
                          <div className="prj-check-i2">
                            <BsCheckLg />
                          </div>
                          <div className="icon-prj-ovl2"></div>
                          <img
                            className="icon-img-link2"
                            src={`/images/project_img/prj_logo/${proj.icon_sqr}`}
                            alt={`${proj.name_en} icon`}
                            style={{
                              width: "65px",
                              height: "65px",
                              borderRadius: "100px",
                            }}
                          />
                        </div>
                        <div className="mt-3 txt-upper prj_name">
                          <span>{proj.name_en}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div> */}
        </div>
        <BreadcrumbContainer className="position-relative">
          <BreadcrumbImage
            src={import.meta.env.VITE_BASE_URL+"images/s2s-logo/syn2sign_logo.svg"}
            alt="breadcrumb icon"
            onClick={handleImageClick}
          />
          <Separator>
            <FaArrowRight />
          </Separator>
          <BreadcrumbItem onClick={handleShowcaseClick}>
            SHOWCASE
          </BreadcrumbItem>
          <Separator>
            <FaArrowRight />
          </Separator>
          <BreadcrumbItem>{project.name_en}</BreadcrumbItem>
        </BreadcrumbContainer>
      </Container>
    </>
  );
}
export default Project;
const LinkPrjCon = styled.div`
  overflow-x: scroll;
  overflow-y: hidden;
  .icon-img-link {
    max-width: 8em;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
`;
const BreadcrumbContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; // Adjust spacing as needed
  margin-bottom: 20px; // Adjust spacing as needed
`;

const BreadcrumbImage = styled.img`
  width: 50px; // Adjust size as needed
  height: auto;
  cursor: pointer;
  z-index: 10; // Ensure image is above other content
  position: relative; // Ensure it is positioned correctly
  pointer-events: auto; // Ensure pointer events are enabled
  /* Optional: temporary styles for debugging */
  /* background-color: rgba(255, 0, 0, 0.2); */
  /* border: 1px solid red; */
`;

const BreadcrumbItem = styled.span`
  font-size: 16px; // Adjust font size as needed
  cursor: pointer;
  &:hover {
    text-decoration: underline; // Adds underline on hover for better UX
  }
`;

const Separator = styled.span`
  margin: 0 8px; // Adjust spacing as needed
  color: #ccc; // Grey color for the separator
`;
