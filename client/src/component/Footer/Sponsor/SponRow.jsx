import propTypes from "prop-types";
import SponLinkRow from "./SponLinkRow";
import styled from "styled-components";

const SponRow = ({ sponsors }) => {
  return (
    <>
      <span className="txt-cap text-start">Sponsored by:</span>
        <div className="d-flex align-items-center">
       
          {sponsors.map((sponsor, index) => (
            <RowCon key={index} >
              <SponLinkRow
                href={sponsor.href}
                imgSrc={sponsor.imgSrc}
                alt={sponsor.alt}
                type={sponsor.type}
                spon={sponsor.tier}
              />
            </RowCon>
          ))}
        </div>
    </>
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

const RowCon = styled.div`
  margin-right: 1.3em;
  @media (max-width: 991.98px) {
    margin-right: 1em;
    
  }
`;