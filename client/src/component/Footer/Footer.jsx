import "./footer.css";
import fb from "./social-logo/i-fb.svg";
import ig from "./social-logo/i-ig.svg";
import tw from "./social-logo/i-tw.svg";
import yt from "./social-logo/i-y.svg";
import me from "./social-logo/i-m.svg";
import tk from "./social-logo/i-tk.svg";
import em from "./spon-logo/em.svg";
import dd from "./spon-logo/dd.svg";
import st from "./spon-logo/st.svg";
import dl from "./spon-logo/dl.svg";
import meg from "./spon-logo/mg.svg";
import nb from "./spon-logo/nb.svg";
import dm from "./spon-logo/dm.svg";
import dlo from "./spon-logo/dlo.svg";
import ql from "./spon-logo/ql.svg";
import m7 from "./spon-logo/m7.svg";

function Footers() {
  return (
    <>
      <footer id="footer" className="pb-3 position-relative">
        <div className="bg-gd-foot"></div>
        <div className="container px-4 w-100 d-flex justify-content-between">
          <div className="row">
            <div className="col">
              <h3 className="txt-cap text-start">sponsored by:</h3>
              <div className="d-flex align-items-center foot-l">
                <div className="box-logo">
                  <a
                    href="https://emdistrict.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={em}
                      alt=""
                      style={{ maxWidth: "8em" }}
                    />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="https://www.ddproperty.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={dd}
                      alt=""
                      style={{ maxWidth: "8em" }}
                    />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="https://funcslash.com/styleyeet/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={st}
                      alt=""
                      style={{ maxWidth: "2.5em" }}
                    />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="https://ducklab.co.th/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={dl}
                      alt=""
                      style={{ maxWidth: "2em" }}
                    />
                  </a>
                </div>
                <br />
                <div className="box-logo">
                  <a
                    href="https://www.merge.co.th/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={meg}
                      alt=""
                      style={{ maxWidth: "3em" }}
                    />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="https://nabladigital.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={nb}
                      alt=""
                      style={{ maxWidth: "3em" }}
                    />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="https://www.deemmi.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={dm}
                      alt=""
                      style={{ maxWidth: "1.5em" }}
                    />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    className="foot-logo"
                    href="https://www.diloproducts.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={dlo}
                      alt=""
                      style={{ maxWidth: "2.5em" }}
                    />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    className="foot-logo"
                    href="https://www.facebook.com/p/Q-Light-Sound-100063757264018/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={ql}
                      alt=""
                      style={{ maxWidth: "1.3em" }}
                    />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    className="foot-logo"
                    href="https://www.facebook.com/ApologizeCh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="foot-logo"
                      src={m7}
                      alt=""
                      style={{ maxWidth: "1.4em" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <h3 className="txt-cap text-start">Follow us:</h3>
              <div className="d-flex align-items-center footer-r">
                <div className="box-logo">
                  <a
                    href="http://www.facebook.com/funcslash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="foot-logo" src={fb} alt="" />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="http://www.instagram.com/funcslash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="foot-logo" src={ig} alt="" />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="http://twitter.com/funcslash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="foot-logo" src={tw} alt="" />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="http://www.youtube.com/@funcslash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="foot-logo" src={yt} alt="" />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="http://medium.com/funcslash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="foot-logo" src={me} alt="" />
                  </a>
                </div>
                <div className="box-logo">
                  <a
                    href="http://www.tiktok.com/@funcslash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="foot-logo" src={tk} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footers;
