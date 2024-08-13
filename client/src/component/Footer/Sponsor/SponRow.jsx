import propTypes from "prop-types";
import SponLinkRow from "./SponLinkRow";

const SponRow = ({ sponsors }) => {
  return (
    <div className="d-none d-lg-flex flex-column">
      <h6 className="txt-cap text-start" style={{ fontSize: "0.625rem" }}>Sponsored by:</h6>
        <div className="d-flex align-items-center">
       
          {sponsors.map((sponsor, index) => (
            
            <div key={index} className="me-3">
              <SponLinkRow
                href={sponsor.href}
                imgSrc={sponsor.imgSrc}
                alt={sponsor.alt}
                type={sponsor.type}
                spon={sponsor.tier}
              />
            </div>
          ))}
        </div>
    </div>
  );
};

SponRow.propTypes = {
  sponsors: propTypes.arrayOf(
    propTypes.shape({
      href: propTypes.string,
      tier: propTypes.string,
      imgSrc: propTypes.string,
      type: propTypes.string,
    })
  ),
};
export default SponRow;
