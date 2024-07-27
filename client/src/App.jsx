import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import { Nav2 } from "./component/Nav/Nav";
import { Footers } from "./component/Footer/Footer";
import { ScrollTop } from "./component/ScrollTopBtn/Scrolltop";
import Home from "./Pages/Home";
import Showcase from "./Pages/Showcase/Showcase";
import Project from "./Pages/Projects/Projects";
import Students from "./Pages/Students/Students";
import Exhibition from "./Pages/Exhibition/Exhibition";
import Credit from "./Pages/Credits/credit"
import StayTune from "./Pages/StayTune/StayTune";
import Notfound from "./Pages/Notfound/Notfound";

function App() {
  const location = useLocation();
  const [title, setTitle] = useState("syn2sign");

  useEffect(() => {
    const pathname = location.pathname;

    // Update the title based on the current route
    switch (pathname) {
      case "/":
        setTitle("syn2sign senior project exhibition 2024 - Home Page");
        break;
      case "/showcase":
        setTitle("Showcase - syn2sign senior project exhibition 2024");
        break;
      case "/exhibition":
        setTitle("Exhibition - syn2sign senior project exhibition 2024");
        break;
      case "/credit":
        setTitle("Credit - syn2sign senior project exhibition 2024");
        break;
      case "/stay-tune":
        setTitle("Stay Tune - syn2sign senior project exhibition 2024");
        break;
      default:
        setTitle("syn2sign senior project exhibition 2024");
    }
  }, [location]);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <ScrollTop />
      <div className="wrapper">
        <Nav2 />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase" element={<Showcase />} />
            <Route path="/showcase/project/:prj_id" element={<Project />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/showcase/student/:std_id" element={<Students />} />
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
