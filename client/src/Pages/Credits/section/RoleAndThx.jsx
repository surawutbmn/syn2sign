import styled from "styled-components";
// import graphic from "../img/icon/graphic.svg";
// import thx from "../img/icon/thx.svg";
// import sp from "../img/icon/spon.svg";
// import web from "../img/icon/web.svg";
// import int from "../img/icon/interact.svg";
// import pr from "../img/icon/pr.svg";
// import knb from "../img/icon/knowboard.svg";
// import lo from "../img/icon/location.svg";
// import led from "../img/icon/led.svg";

const Section = styled.div`
  margin-bottom: 3rem;
`;

const Heading = styled.h2`
  margin-bottom: 2rem;
  color: var(--color-primary);
  font-weight: var(--txt-bold);
  text-transform: uppercase;
  span{text-transform: capitalize;}
`;

const SubHeading = styled.h2`
  margin-top: 3rem;
  margin-bottom: 3rem;
  font-weight: var(--txt-bold);
  text-transform: uppercase;
  color: var(--color-primary);
  span{text-transform: none;}
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 3rem;
  margin-left: 5rem;
  @media (max-width: 991.99px) {
      grid-gap: 1rem;
    margin-left: 1.5rem;
  }
  @media (max-width: 575.99px) {
      grid-gap: 1.5rem;
    grid-template-columns: 1fr;
    margin-left: 1.5rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;

const IconContainer = styled.div`
  margin-right: 1rem;
  max-width: 6dvw;
  img {
    width: 100%;
  }
  @media (max-width: 991.99px) {
    max-width: 8dvw;
  }
  @media (max-width: 575.99px) {
    max-width: 15dvw;
  }
`;

const TextContainer = styled.div`
  text-align: left;
`;

const UpperText = styled.h5`
  text-transform: uppercase;
`;

function RoleAndThx() {
  return (
    <>
      <Section>
        <Heading>
          <span>Syn2sign</span> exhibition venue
        </Heading>
        <span>
          <strong>DIRECTED BY:</strong> FACULTY OF INFORMATION AND COMMUNICATION
          TECHNOLOGY, SILPAKORN UNIVERSITY
          <p>
            <strong>EXHIBITION VENUE & DATE:</strong> 26-29 JUNE 2024 • SPHERE
            GALLERY 1, M FLOOR, EMSPHERE
          </p>
        </span>
      </Section>
      <SubHeading>
        INSI<span>(gn)</span>DER
      </SubHeading>
      <GridContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/icon/graphic.svg`}
              alt="graphic icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>ART DIRection & Graphic team</strong>
            </UpperText>
            <p>
              <strong>Leader:</strong> Panyada Suxruxsa
              <br />
              Chalida Ingkapattanakul <br />
              Methasit Sitthametha <br />
              Onranpha Morsamarn <br />
              Pattawan Srattatam <br />
              Pattarawan Srattatam
            </p>
          </TextContainer>
        </FlexContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/icon/spon.svg`}
              alt="sponsor icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>Sponsor relation & Financial Team</strong>
            </UpperText>
            <p>
              <strong>Leader:</strong> Panita Lainananuku
              <br />
              Chanamon Kaewsomnuk <br /> Natthanan Vaowkhajon <br />
              Nattharnunt Zooriyarzazithum <br />
              Natthatida Sritulanontha <br />
              Sasikan Tianchanthuek
            </p>
          </TextContainer>
        </FlexContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/icon/web.svg`}
              alt="website icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>WebSITE</strong>
            </UpperText>
            <p>
              <strong>Designer: </strong> <br />
              Chalida Ingkapattanakul
              <br /> Panita Lainananukul
              <br /> Natthanan Vaowkhajon
              <br /> Sasikan Tianchanthuek
              <br />
              <strong>Developer: </strong>
              <br />
              Chawakorn Jitpathak <br /> Surawut Binmamud
            </p>
          </TextContainer>
        </FlexContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/icon/interact.svg`}
              alt="interactive icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>Interactive</strong>
            </UpperText>
            <p>
              <strong>Designer: </strong>
              <br /> Sasikan Tianchanthuek
              <br />
              <strong>Developer: </strong>
              <br />
              Chawakorn Jitpathak <br /> Surawut Binmamud
            </p>
          </TextContainer>
        </FlexContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}/img/icon/pr.svg`}
              alt="public relation icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>Public relation & marketing</strong>
            </UpperText>
            <p>
              <strong>Leader:</strong> Chanamon Kaewsomnuk
              <br />
              Chawakorn Jitpathak <br />
              Methasit Sitthametha <br />
              Onranpha Morsamarn <br />
              Panyada Suxruxsa <br />
              Sasikan Tianchanthuek <br />
              Surawut Binmamud
              <br /> Supakorn Achcha
            </p>
          </TextContainer>
        </FlexContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/icon/knowboard.svg`}
              alt="knowledge board icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>exhibition knowledge board</strong>
            </UpperText>
            <p>
              <strong>Leader:</strong> Nattharnunt Zooriyarzazithum <br />{" "}
              Chanamon Kaewsomnuk <br />
              Natthanan Vaowkhajon <br />
              Natthatida Sritulanontha <br />
              Panita Lainananukul <br />
              Sasikan Tianchanthuek
            </p>
          </TextContainer>
        </FlexContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/icon/location.svg`}
              alt="location icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>Location and equipments</strong>
            </UpperText>
            <p>
              <strong>Leader:</strong> Surawut Binmamud <br />
              Chalida Ingkapattanakul <br />
              Panita Lainananukul <br /> Supakorn Achcha
            </p>
          </TextContainer>
        </FlexContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/icon/led.svg`}
              alt="led media icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>pillar LED screen & Video Editor</strong>
            </UpperText>
            <p>
              Chanamon Kaewsomnuk <br />
              Chalida Ingkapattanakul <br />
              Panita Lainananukul <br />
              Panyada Suxruxsa <br />
              Piyapat Homkrajay <br />
              Supakorn Achcha
            </p>
          </TextContainer>
        </FlexContainer>
      </GridContainer>
      <SubHeading>Thank you for Your Support</SubHeading>
      <GridContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/icon/thx.svg`}
              alt="thank icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>Supporter in counseling and assistance</strong>
            </UpperText>
            <div>Alongkron Worasuit</div>
            <div>Chanchon Pansuwan</div>
            <div>Nattakit Jaruyotin</div>
            <div>Wutiporn Fungkajorn</div>
  
          </TextContainer>
        </FlexContainer>
        <FlexContainer>
          <IconContainer>
            <img
              src={`${import.meta.env.VITE_BASE_URL}img/icon/thx.svg`}
              alt="thank icon"
            />
          </IconContainer>
          <TextContainer>
            <UpperText>
              <strong>
                {" "}
                EQUIPMENTs, FOODs <br className="d-block d-md-none" /> AND OTHER
              </strong>
            </UpperText>
            <div>ICT Web & Interactive design Alumni</div>
            <div>Methin Pingsutthiwong</div>
            <div>Sarayut Thibhodee</div>

          </TextContainer>
        </FlexContainer>
      </GridContainer>
    </>
  );
}

export default RoleAndThx;
