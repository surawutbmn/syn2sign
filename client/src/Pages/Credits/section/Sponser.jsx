import { Col, Container, Row } from "react-bootstrap";
import em from "../img/logo_spon/em_cl.svg";
import dd from "../img/logo_spon/dd_cl.svg";
import st from "../img/logo_spon/st_cl.svg";
import dl from "../img/logo_spon/dl_cl.svg";
import meg from "../img/logo_spon/mg_cl.svg";
import nb from "../img/logo_spon/nb_cl.svg";
import dm from "../img/logo_spon/dm_cl.svg";
import dlo from "../img/logo_spon/dlo_cl.svg";
import ql from "../img/logo_spon/ql_cl.svg";
import m7 from "../img/logo_spon/m7_cl.svg";
import SponsorLogo from "./SponserLogo";
import styled from "styled-components";

function Sponser() {
  return (
    <Container className="mt-6 sponsor-con justify-content-center">
      <h2 className="txt-prim txt-upper txt-bold mb-4">
        Exhibition Sponsored by
      </h2>
      <div className="d-none d-md-flex justify-content-center align-items-center">
        <SponsorLogo
          imgSrc={em}
          alt="emdistrict logo"
          href="http://https://emdistrict.com/"
          text={{ title: "The Em District", subtitle: "ดิ เอ็มดิสทริค" }}
          type="rect"
          tier="tier1"
        />
      </div>
      <div className="d-none d-md-grid grid-cols-3 gap-4 align-items-center">
        <SponsorLogo
          imgSrc={dd}
          alt="ddproperty logo"
          href="https://www.ddproperty.com/en"
          text={{
            title: "DDproperty",
            subtitle: "บริษัท ออลพร็อพเพอร์ตี้ มีเดีย จำกัด",
          }}
          type="rect"
          tier="tier2"
        />
        <SponsorLogo
          imgSrc={st}
          alt="styleyeet logo"
          href="https://funcslash.com/styleyeet/"
          text={{
            title: `sty}e:yeet/`,
            subtitle: "ศิษย์เก่าเอกออกแบบเว็บและสื่อโต้ตอบ รุ่น 16",
          }}
          type="square"
          tier="tier2"
        />
        <SponsorLogo
          imgSrc={dl}
          alt="ducklab logo"
          href="https://ducklab.co.th/"
          text={{ title: "DUCK LAB", subtitle: "บริษัท ดัค แล็บ จำกัด" }}
          type="square"
          tier="tier2-dl"
        />
        <SponsorLogo
          imgSrc={meg}
          alt="merge logo"
          href="https://www.merge.co.th/"
          text={{
            title: "MERGE DIGITAL AGENCY",
            subtitle: "บริษัท เมิร์จ ดิจิตอล เอเจนซี่ จำกัด",
          }}
          type="rect"
          tier="tier3"
        />
        <SponsorLogo
          imgSrc={nb}
          alt="nabladigital logo"
          href="https://nabladigital.com/"
          text={{
            title: "NABLA DIGITAL COMPANY LIMITED",
            subtitle: "บริษัท แนบบลา ดิจิตอล จำกัด",
          }}
          type="rect"
          tier="tier3"
        />
        <SponsorLogo
          imgSrc={dm}
          alt="deemi logo"
          href="https://www.deemmi.com/"
          text={{
            title: "Deemmi AI and Tech Consultant",
            subtitle: "บริษัท ดีมมี่ คอนซัลแตนท์ จำกัด",
          }}
          type="square"
          tier="tier3"
        />
        <SponsorLogo
          imgSrc={dlo}
          alt="dilo logo"
          href="https://www.diloproducts.com/"
          text={{
            title: "DILO PRODUCTS GROUP",
            subtitle: "บริษัท ดิโล โปรดักส์ กรุ๊ป จำกัด",
          }}
          type="rect"
          tier="tier4"
        />
        <SponsorLogo
          imgSrc={ql}
          alt="qlight logo"
          href="https://www.facebook.com/p/Q-Light-Sound-100063757264018/"
          text={{
            title: "Q Light & Sound",
            subtitle: "บริษัท คิว ไลท์ แอนด์ ซาวด์ จำกัด",
          }}
          type="square"
          tier="tier4"
        />
        <SponsorLogo
          imgSrc={m7}
          alt="mango7 logo"
          href="https://www.youtube.com/@ApologizeCh122"
          text={{
            title: "Manggo07 Official",
            subtitle: "แมงโก้ เซเว่น ออฟฟิศเชียล",
          }}
          type="square"
          tier="tier4"
        />
      </div>
      <div className="grid d-md-none grid-cols-2 gap-4 align-items-center ms-4">
        <SponsorLogo
          imgSrc={em}
          alt="emdistrict logo"
          href="http://https://emdistrict.com/"
          text={{ title: "The Em District", subtitle: "ดิ เอ็มดิสทริค" }}
          type="rect"
          tier="tier1"
        />
        <SponsorLogo
          imgSrc={dd}
          alt="ddproperty logo"
          href="https://www.ddproperty.com/en"
          text={{
            title: "DDproperty",
            subtitle: "บริษัท ออลพร็อพเพอร์ตี้ มีเดีย จำกัด",
          }}
          type="rect"
          tier="tier2"
        />
        <SponsorLogo
          imgSrc={st}
          alt="styleyeet logo"
          href="https://funcslash.com/styleyeet/"
          text={{
            title: `sty}e:yeet/`,
            subtitle: "ศิษย์เก่าเอกออกแบบเว็บและสื่อโต้ตอบ รุ่น 16",
          }}
          type="square"
          tier="tier2"
        />
        <SponsorLogo
          imgSrc={dl}
          alt="ducklab logo"
          href="https://ducklab.co.th/"
          text={{ title: "DUCK LAB", subtitle: "บริษัท ดัค แล็บ จำกัด" }}
          type="square"
          tier="tier2-dl"
        />
        <SponsorLogo
          imgSrc={meg}
          alt="merge logo"
          href="https://www.merge.co.th/"
          text={{
            title: "MERGE DIGITAL AGENCY",
            subtitle: "บริษัท เมิร์จ ดิจิตอล เอเจนซี่ จำกัด",
          }}
          type="rect"
          tier="tier3"
        />
        <SponsorLogo
          imgSrc={nb}
          alt="nabladigital logo"
          href="https://nabladigital.com/"
          text={{
            title: "NABLA DIGITAL COMPANY LIMITED",
            subtitle: "บริษัท แนบบลา ดิจิตอล จำกัด",
          }}
          type="rect"
          tier="tier3"
        />
        <SponsorLogo
          imgSrc={dm}
          alt="deemi logo"
          href="https://www.deemmi.com/"
          text={{
            title: "Deemmi AI and Tech Consultant",
            subtitle: "บริษัท ดีมมี่ คอนซัลแตนท์ จำกัด",
          }}
          type="square"
          tier="tier3"
        />
        <SponsorLogo
          imgSrc={dlo}
          alt="dilo logo"
          href="https://www.diloproducts.com/"
          text={{
            title: "DILO PRODUCTS GROUP",
            subtitle: "บริษัท ดิโล โปรดักส์ กรุ๊ป จำกัด",
          }}
          type="rect"
          tier="tier4"
        />
        <SponsorLogo
          imgSrc={ql}
          alt="qlight logo"
          href="https://www.facebook.com/p/Q-Light-Sound-100063757264018/"
          text={{
            title: "Q Light & Sound",
            subtitle: "บริษัท คิว ไลท์ แอนด์ ซาวด์ จำกัด",
          }}
          type="square"
          tier="tier4"
        />
        <SponsorLogo
          imgSrc={m7}
          alt="mango7 logo"
          href="https://www.youtube.com/@ApologizeCh122"
          text={{
            title: "Manggo07 Official",
            subtitle: "แมงโก้ เซเว่น ออฟฟิศเชียล",
          }}
          type="square"
          tier="tier4"
        />
      </div>
      <AddSpon>
        <p>Yanisa Hemprachitchai (คุณญาณิศา เหมประชิตชัย)</p>
        <p>dotwish/*on (ศิษย์เก่าเอกออกแบบเว็บและสื่อโต้ตอบ รุ่น 17)</p>
        <p>
          EXPERT PEST SYSTEM COMPANY LIMITED (บริษัท เอ็กซ์เปอร์ท เพสท์ ซิสเต็ม
          จำกัด)
        </p>
        <p>DEEP LOVE COMPANY LIMITED (บริษัท ดีพ เลิฟ จำกัด)</p>
        <p>IMP FACTORY COMPANY LIMITED (บริษัท ไอเอ็มพี แฟคทอรี่ จำกัด)</p>
      </AddSpon>
    </Container>
  );
}

export default Sponser;

const AddSpon = styled.div`
  margin-top: 2rem;
  @media (max-width: 575.98px) {
    font-size: .8em;
  }
`;