import React from "react";
import { LuMail } from "react-icons/lu";
import { FaLinkedinIn, FaReadme } from "react-icons/fa6";
import { Link } from "react-router-dom";

interface CreatorsProps {
  stdID: number;
  nameTH: string;
  nameEN: string;
  nicknameEN: string;
  email: string;
  linkedin: string;
  qoutes: string;
  profileImg: string;
}

const Creators: React.FC<CreatorsProps> = ({
  stdID,
  nameTH,
  nameEN,
  nicknameEN,
  email,
  linkedin,
  qoutes,
  profileImg,
}) => {
  return (
    <div className="row">
      <div className="col">
        <img src={profileImg} alt="" style={{width:"100%", maxWidth:"20dvw"}}/>
        <span>({nicknameEN})</span>
        <span>{nameEN}</span>
        <span>{nameTH}</span>
      </div>
      <div className="col">
        <div>
          <img
            src={`/icon/double-qoute.svg`}
            alt="double quote"
            style={{ maxWidth: "5vw", width: "100%" }}
            loading="lazy"
          />
          <span>{qoutes}</span>
        </div>
        <hr />
        <div className="icon-link-con">
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="txt-link"
          >
            <span className="icon-crl me-2">
              <LuMail />
            </span>
            <span>{email}</span>
          </a>
        </div>
        <div className="icon-link-con">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="txt-link"
          >
            <span className="icon-crl me-2">
              <FaLinkedinIn />
            </span>
            <span>{nameEN}</span>
          </a>
        </div>
        <Link
          to={`/showcase/creators/${stdID}`}
          className="txt-link"
          style={{
            border: ".1rem solid",
            padding: ".4rem .8rem",
            borderRadius: "100px",
          }}
        >
          <span className="txt-upper">
            <strong>read more</strong>
          </span>
          <span className="ms-2">
            <FaReadme />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Creators;
