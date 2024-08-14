import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import { Nav2 } from "./component/Nav/Nav";
import { Footers } from "./component/Footer/Footer";
import { ScrollTop } from "./component/ScrollTopBtn/Scrolltop";
import Home from "./Pages/Home";
import Showcase from "./Pages/Showcase";
import Project from "./Pages/Projects";
import Students from "./Pages/Students";
import Exhibition from "./Pages/Exhibition";
import Credit from "./Pages/Credits";
import StayTune from "./Pages/StayTune/StayTune";
import Notfound from "./Pages/Notfound";

function App() {
  const location = useLocation();
  const [title, setTitle] = useState("Syn2sign");
  const [metaTags, setMetaTags] = useState({
    description: "Syn2sign senior project exhibition 2024",
    image: "default-image-url", // Replace with a default image URL
  });

  useEffect(() => {
    const pathname = location.pathname;

    // Update title and meta tags based on the current route
    switch (pathname) {
      case "/":
        setTitle("Syn2sign senior project exhibition 2024 - Home Page");
        setMetaTags({
          description: "Welcome to Syn2sign senior project exhibition 2024.",
          image: "https://img5.pic.in.th/file/secure-sv1/syn2sign-og.png",
        });
        break;
      case "/showcase":
        setTitle("8 Projects and 16 Creators List - Syn2sign senior project exhibition 2024");
        setMetaTags({
          description: "Explore 8 projects and 16 creators in our showcase.",
          image: "https://img5.pic.in.th/file/secure-sv1/syn2sign-og.png",
        });
        break;

        case "/showcase/projects/cpl01":
          setTitle("EVAL BALANCE - Syn2sign senior project exhibition 2024");
          setMetaTags({
            description: "การออกแบบและพัฒนาแอปพลิเคชันประเมินสมรรถภาพทางกาย เพื่อลดความเสี่ยงในการหกล้ม และออกกำลังกายเพื่อเสริมสร้างความแข็งแรงของกล้ามเนื้อในผู้สูงอายุ บนระบบปฏิบัติการไอโอเอส",
            image: "https://img5.pic.in.th/file/secure-sv1/cpl01-og.png",
          });
          break;
          case "/showcase/projects/cpl02":
            setTitle("WAIWAN - Syn2sign senior project exhibition 2024");
            setMetaTags({
              description: "การออกแบบและพัฒนาแอปพลิเคชันควบคู่กับระบบไลน์แชตบอต เพื่อให้บริการสำหรับธุรกิจร้านจัดของไหว้เจ้า",
              image: "https://img5.pic.in.th/file/secure-sv1/cpl02-og.png",
            });
            break;
        case "/showcase/projects/cpl03":
          setTitle("ARTIST MATCH - Syn2sign senior project exhibition 2024");
          setMetaTags({
            description: "การออกแบบและพัฒนาเว็บแอปพลิเคชันเพื่อค้นหาศิลปินและลงประกาศรับสมัครสำหรับผู้จัดงาน",
            image: "https://img5.pic.in.th/file/secure-sv1/cpl03-og.png",
          });
          break;
        case "/showcase/projects/cpl04":
          setTitle("MORYTECH - Syn2sign senior project exhibition 2024");
          setMetaTags({
            description: "การออกแบบและพัฒนาแอปพลิเคชัน เพื่อเพิ่มทักษะความจำสำหรับคนวัยทำงานบนระบบปฎิบัติการไอโอเอส",
            image: "https://img2.pic.in.th/pic/cpl04-og.png",
          });
          break;
        case "/showcase/projects/cpl05":
          setTitle("FULL FILL - Syn2sign senior project exhibition 2024");
          setMetaTags({
            description: "การออกแบบและพัฒนาเว็บแอปพลิเคชัน เพื่อส่งเสริมการบริหาร ร้านรีฟิล ในกรุงเทพมหานคร",
            image: "https://img2.pic.in.th/pic/cpl05-og.png",
          });
          break;
        case "/showcase/projects/cpl06":
          setTitle("YOUNG & CHIC - Syn2sign senior project exhibition 2024");
          setMetaTags({
            description: "การออกแบบและพัฒนาเว็บแอปพลิเคชัน เพื่อส่งเสริมแฟชั่นดีไซน์เนอร์ไทยรุ่นใหม่ในการเพิ่มโอกาสการหางาน",
            image: "https://img2.pic.in.th/pic/cpl06-og.png",
          });
          break;
        case "/showcase/projects/cpl07":
          setTitle("TENT CARE - Syn2sign senior project exhibition 2024");
          setMetaTags({
            description: "การออกแบบและพัฒนาระบบเครื่องมือสำหรับผู้ประกอบการแฟรนไชส์ธุรกิจทำความสะอาดเต็นท์",
            image: "https://img2.pic.in.th/pic/cpl07-og.png",
          });
          break;
        case "/showcase/projects/cpl08":
          setTitle("TINY THAI - Syn2sign senior project exhibition 2024");
          setMetaTags({
            description: "การออกแบบเกมสื่อการเรียนรู้ สำหรับเด็กชั้นประถมศึกษาปีที่ 2 กรณีศึกษา ปัญหาด้านการสะกดคำและบอกความหมายของคำกลุ่มสาระภาษาไทย",
            image: "https://img5.pic.in.th/file/secure-sv1/cpl08-og.png",
          });
          break;
           
      case "/exhibition":
        setTitle("EXHIBITION ARCHIVE - Syn2sign senior project exhibition 2024");
        setMetaTags({
          description: "Browse our exhibition archive.",
          image: "https://img5.pic.in.th/file/secure-sv1/syn2sign-og.png",
        });
        break;
      case "/credit":
        setTitle("CREDIT - Syn2sign senior project exhibition 2024");
        setMetaTags({
          description: "Credits for the Syn2sign senior project exhibition 2024.",
          image: "https://img5.pic.in.th/file/secure-sv1/syn2sign-og.png",
        });
        break;
      case "/stay-tune":
        setTitle("STAY TUNE - Syn2sign senior project exhibition 2024");
        setMetaTags({
          description: "Stay tuned for more updates.",
          image: "https://img5.pic.in.th/file/secure-sv1/syn2sign-og.png",
        });
        break;
    }
  }, [location]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaTags.description} />
        <meta property="og:image" content={metaTags.image} />
        {/* <meta property="og:url" content={`https://yourdomain.com${location.pathname}`} /> */}
        {/* Add other Open Graph meta tags as needed */}
      </Helmet>
      <ScrollTop />
      <div className="wrapper">
        <Nav2 />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/showcase/projects/:prj_id" element={<Project />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/showcase/creators/:std_id" element={<Students />} />
            <Route path="/credit" element={<Credit />} />
            <Route path="/stay-tune" element={<StayTune />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
            <Route path="/404" element={<Notfound />} />
          </Routes>
        </main>
        <Footers />
      </div>
    </HelmetProvider>
  );
}

export default App;
