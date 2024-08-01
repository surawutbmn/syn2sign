import { useState, useEffect } from "react";
import axios from "axios";
import "./project.css";
import { Link, useParams } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import Accordions from "./acc";


function Project() {
  const [project, setProject] = useState({});
  const { prj_id } = useParams();
  // const prj_id = "cpl01";
  const [activeProject, setActiveProject] = useState(null);
const items = [
  { title: "idea concept", content: "Content for section 1" },
  { title: "Key WORD", content: "Content for section 2" },
  { title: "MAIN Function", content: "Content for section 3" },
];
  const projectLinks = [
    { id: "cpl01", icon: "/icon/prj/cpl01-sqr.webp", name: "EVAL Balance" },
    { id: "cpl02", icon: "/icon/prj/cpl02-sqr.webp", name: "WAIWAN" },
    { id: "cpl03", icon: "/icon/prj/cpl03-sqr.webp", name: "ARTIST MATCH" },
    { id: "cpl04", icon: "/icon/prj/cpl04-sqr.webp", name: "MORYTECH" },
    { id: "cpl05", icon: "/icon/prj/cpl05-sqr.webp", name: "FULLFILL" },
    { id: "cpl06", icon: "/icon/prj/cpl06-sqr.webp", name: "YOUNG & CHIC" },
    { id: "cpl07", icon: "/icon/prj/cpl07-sqr.webp", name: "Tent Care" },
    { id: "cpl08", icon: "/icon/prj/cpl08-sqr.webp", name: "TINY THAI" },
  ];

  const Getprojects = async () => {
    try {
      console.log(
        `Fetching project from URL: http://localhost/syn2sign/projects/${prj_id}`
      );
      if (prj_id) {
        const response = await axios.get(
          `http://localhost/syn2sign/projects/${prj_id}`
        );
        const projectData = response.data;
        setProject(projectData);
        setActiveProject(prj_id);
      } else {
        console.error("Project ID is missing");
      }
    } catch (error) {
      console.error("Error fetching project data:", error);
    }
  };
  useEffect(() => {
    console.log("Project ID:", prj_id);
    if (prj_id) {
      Getprojects();
    }
  }, [prj_id]);

  useEffect(() => {
    if (project) {
      document.title = `${project.name_en} / ${project.fullname_th} - Syn2sign senior project exhibition 2024`;
    }
  }, [project]);

  return (
    <>
      <Helmet>
        {project
          ? `${project.name_en} ${project.name_th} - Syn2sign senior project exhibition 2024`
          : "Loading..."}
      </Helmet>
      <div className="container mt-5">
        <div className="bg-gd-btr"></div>
        <img src="/icon/ele-head-l.svg" className="ele-sch-l" alt="" />
        <img src="/icon/ele-head-r.svg" className="ele-sch-r" alt="" />
        <div className="project-content-sec">
          <div className="row">
            <div className="col">
              <div className="d-flex">
                <img
                  src={`/icon/prj/${project.icon}`}
                  alt=""
                  className="prj-sec-icon"
                />
                <div className="text-start mx-4">
                  <h1 className="txt-scu-head ">
                    <strong>{project.name_en}</strong>
                  </h1>
                  <p>({project.name_th})</p>
                </div>
                <hr className="prj-name-line" />
                <h1 className="outlined-text">#{project.id}</h1>
                <img
                  src={`/icon/prj/${project.icon_std}`}
                  alt=""
                  className="prj-sec-icon"
                />
              </div>
              <div className="d-flex flex-column">
                <span>
                  <p>{project.fullname_th}</p>
                </span>
              </div>
            </div>
            <div className="mx-auto ratio ratio-16x9">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${project.shreel_link}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="video-box"
              ></iframe>
            </div>
          </div>
          <Accordions items={items} />
          <div className="row mt-4">
            <div className="col">
              <div className="text-start mb-4 header-wline">
                <h3 className="txt-upper">
                  <strong>Other Projects</strong>
                </h3>
                <span className="txt-grey">ผลงานอื่นๆ</span>
              </div>
              <div className="d-flex justify-content-around text-center mb-6">
                {projectLinks.map((proj) => (
                  <div
                    key={proj.id}
                    className={`list-group-item ${
                      activeProject === proj.id ? "active" : ""
                    }`}
                  >
                    <Link
                      to={`/showcase/projects/${proj.id}`}
                      onClick={() => setActiveProject(proj.id)}
                      className="link-txt"
                    >
                      <div className="d-flex flex-column">
                        <div className="link-prj-con">
                          <div className="prj-check-i">
                            <BsCheckLg />
                          </div>
                          <div className="icon-prj-ovl"></div>
                          <img
                            className="icon-img-link"
                            src={proj.icon}
                            alt=""
                          />
                        </div>
                        <div className="mt-3 fs-5 txt-upper">
                          <span>{proj.name}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
