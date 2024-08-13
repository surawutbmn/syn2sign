import { Container } from 'react-bootstrap';

function LastSec() {
  return (
    <Container className="position-relative">
      <div className="my-5">
        <h2 className="mb-4 txt-prmhead">onsite supporter</h2>
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
        <div className="grid grid-cols-2 grid-cols-md-1 ml-20 onsite-thx gap-4">
          <div className="d-flex">
            <p>
              <strong>LIGHTING & SOUND:</strong>{" "}
              <br className="d-block d-md-none" />Q Light & Sound
            </p>
          </div>
          <div className="d-flex">
            <p>
              <strong>CARPET INSTALLATION:</strong>{" "}
              <br className="d-block d-md-none" />
              DILO PRODUCTS
            </p>
          </div>
          <div className="d-flex">
            <p>
              <strong>MEDIA PRINTING:</strong>{" "}
              <br className="d-block d-md-none" />
              IMP factory
            </p>
          </div>
          <div className="d-flex">
            <p>
              <strong className="txt-upper">Board service provider:</strong>{" "}
              <br className="d-block d-md-none" />
              Thumnaksilp Advertising
            </p>
          </div>
          <div className="d-flex">
            <p>
              <strong>T-SHIRT SUPPLIER:</strong>{" "}
              <br className="d-block d-md-none" />
              INDYt-shirt
            </p>
          </div>
          <div className="d-flex text-start">
            <p>
              <strong>Attachments and more:</strong>{" "}
              <br className="d-block d-md-none" />
              17bxn.paperprint
            </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <h2 className="mb-4 txt-prmhead">EXHIBITION PROJECT MANAGER</h2>
        <p>
          <strong className="txt-upper">Project Manager:</strong> Chalida
          Ingkapattanakul{" "}
        </p>
        <p>
          <strong className="txt-upper">Assistant Project Manager:</strong>{" "}
          Panita Lainananukul
        </p>
        <h2 className="mt-5 mb-4 txt-prmhead">SUPPORTER AND ADVISOR</h2>
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
        <h2 className="mt-5 txt-prmhead">Publicize Project BY</h2>
        <span>
          <a
            href="https://ict.su.ac.th/func/"
            target="_blank"
            rel="noopener noreferrer"
            className="txt-link"
          >
            <u>
              <strong>FUNC/ (FUNCSLASH)</strong>
            </u>
          </a>
          <br /> INTERACTIVE APPLICATION PROGRAMME <br /> ICT SILPAKORN
          UNIVERSITY
        </span>
      </div>
    </Container>
  );
}

export default LastSec;