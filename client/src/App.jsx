import "./App.css";
// import { Routes, Route, Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
// import Home from "./component/Home";
// import Creator from "./component/creator";
// import AddCreator from "./component/addUser";
// import Navs from "./component/Nav/Nav";
import { Nav2 } from "./component/Nav/Nav_v2";
import { Footers } from "./component/Footer/Footer";
import { ScrollTop } from "./component/ScrollTopBtn/Scrolltop";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Project from "./Pages/Projects/Projects"
import Students from "./Pages/Students/Students"
import Credit from "./Pages/Credit/Credit"
import StayTune from "./Pages/StayTune/StayTune";

function App() {
  return (
    <div className="wrapper">
      <Nav2 />
      <div className="mt-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/showcase" element={<Project />} />
          <Route path="/exhibiton" element={<Students />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/stay-tune" element={<StayTune />} />
        </Routes>
      </div>
      <ScrollTop />
      <Footers />
    </div>
    // <div className="App">
    //   <Navbar bg="dark" variant="dark">
    //     <Navbar.Brand as={Link} to="/">
    //       <img
    //         src="/public/s2s-logo/logo syn2sign.svg"
    //         alt=""
    //       />
    //     </Navbar.Brand>
    //     <Nav className="mr-auto">
    //       <Nav.Link as={Link} to="/">
    //         HOME
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/creator">
    //         CREATOR
    //       </Nav.Link>
    //       <Nav.Link as={Link} to="/addCreator">
    //         ADDCREATOR
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar>
    //   <div className="container mt-3">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/creator" element={<Creator />} />
    //       <Route path="/addCreator" element={<AddCreator />} />
    //     </Routes>
    //   </div>
    // </div>
  );
}

export default App;
