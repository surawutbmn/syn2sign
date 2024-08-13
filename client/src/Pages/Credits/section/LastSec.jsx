import styled from "styled-components";
import { Container } from "react-bootstrap";

function LastSec() {
  return (
    <StyledContainer>
      <Section>
        <Heading>Onsite Supporter</Heading>
        <span>
          <strong>ONSITE PHOTOGRAPHY TEAM:</strong>
          <p>
            Kantaphod Phumphruek, <br className="d-block d-md-none" />
            Kissana Suwannawong and Thitiwat Chormanee
          </p>
        </span>
        <span>
          <p>
            <strong>EQUIPMENT TRANSPORT PROVIDER:</strong>
            <br /> Bualoi Roongrueangsub Transport Limited Partnership
          </p>
        </span>
        <SupporterGrid>
          <SupporterItem>
            <p>
              <strong>LIGHTING & SOUND:</strong>{" "}
              <br className="d-block d-md-none" />Q Light & Sound
            </p>
          </SupporterItem>
          <SupporterItem>
            <p>
              <strong>CARPET INSTALLATION:</strong>{" "}
              <br className="d-block d-md-none" />
              DILO PRODUCTS
            </p>
          </SupporterItem>
          <SupporterItem>
            <p>
              <strong>MEDIA PRINTING:</strong>{" "}
              <br className="d-block d-md-none" />
              IMP factory
            </p>
          </SupporterItem>
          <SupporterItem>
            <p>
              <strong className="txt-upper">Board service provider:</strong>{" "}
              <br className="d-block d-md-none" />
              Thumnaksilp Advertising
            </p>
          </SupporterItem>
          <SupporterItem>
            <p>
              <strong>T-SHIRT SUPPLIER:</strong>{" "}
              <br className="d-block d-md-none" />
              INDYt-shirt
            </p>
          </SupporterItem>
          <SupporterItem>
            <p>
              <strong>Attachments and more:</strong>{" "}
              <br className="d-block d-md-none" />
              17bxn.paperprint
            </p>
          </SupporterItem>
        </SupporterGrid>
      </Section>
      <Section>
        <Heading>Exhibition Project Manager</Heading>
        <p>
          <strong className="txt-upper">Project Manager:</strong> Chalida
          Ingkapattanakul{" "}
        </p>
        <p>
          <strong className="txt-upper">Assistant Project Manager:</strong>{" "}
          Panita Lainananukul
        </p>
        <Heading>Supporter and Advisor</Heading>
        <p>
          <strong className="txt-upper">Project Consultant:</strong> Kowit
          Meboon
        </p>
        <p>
          <strong>SUPPORTER:</strong> Methin Pingsutthiwong
        </p>
        <p>
          <strong>SUPPORTER:</strong> Orawan Praphruetdee
        </p>
        <p>
          <strong>SUPPORTER:</strong> Sarayut Thibhodee
        </p>
        <Heading>Publicize Project by</Heading>
        <span>
          <StyledLink
            href="https://ict.su.ac.th/func/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <u>
              <strong>FUNC/ (FUNCSLASH)</strong>
            </u>
          </StyledLink>
          <br /> INTERACTIVE APPLICATION PROGRAMME <br /> ICT SILPAKORN
          UNIVERSITY
        </span>
      </Section>
    </StyledContainer>
  );
}

export default LastSec;

const StyledContainer = styled(Container)`
  position: relative;
`;

const Section = styled.div`
  margin: 3rem 0;
`;

const Heading = styled.h2`
  margin-bottom: 1rem;
  color: var(--color-primary);
  text-transform: uppercase;
  font-weight: var(--txt-bold);
`;

const SupporterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-left: 14rem;

  @media (max-width: 767.99px) {
    margin-left: 1rem;
  }
  @media (max-width: 575.99px) {
    /* grid-template-columns: 1fr; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-left: 5rem; */
  }
`;

const SupporterItem = styled.div`
  display: flex;
`;

const StyledLink = styled.a`
  color: var(--link-color);
  text-decoration: underline;
`;
