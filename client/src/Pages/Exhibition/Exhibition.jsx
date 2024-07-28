import "./exhibition.css";
import banner from "./img/exh-banner.webp";

function Exhibition() {
  return (
    <>
      <div className="exh-banner">
        <img src={banner} alt="" style={{ width: "100%" }} />
        <h3
          style={{
            textShadow:
              "3px 3px 20px rgba(255, 255, 255, .5), -1px -1px 2px rgba(255, 255, 255, 0.7)",
          }}
        >
          The combination of art and technology has led to Syn2sign
        </h3>
        <span>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            Syn2sign Website Repo
          </a>
          <p>SPHERE GALLERY 1, M FLOOR, EMSPHERE</p>
          <p>จำนวนผู้เข้าชมนิทรรศการ Syn2sign 26-29 June 2024 ~140 persons</p>
        </span>
        <div className="banner-overlay"></div>
      </div>
    </>
  );
}

export default Exhibition;
