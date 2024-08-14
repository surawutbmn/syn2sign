import propTypes from "prop-types";
import SponLink from "./SponLink";
import styled from "styled-components";


const SponsorsGrid = ({ sponsors }) => {
  return (
    <>
      <Txt className="txt-cap text-center">sponsored by:</Txt>
      <div className="d-flex justify-content-around align-items-center">
        {sponsors
          .filter((sponsor) => sponsor.tier.startsWith("tier-1"))
          .map((sponsor, index) => (
            <SponLink
              key={index}
              href={sponsor.href}
              imgSrc={sponsor.imgSrc}
              alt={sponsor.alt}
              type={sponsor.type}
              tier={sponsor.tier}
            />
          ))}
      </div>
      <div className="d-flex justify-content-around align-items-center mt-2 ">
        {sponsors
          .filter((sponsor) => sponsor.tier.startsWith("tier-2"))
          .map((sponsor, index) => (
            <SponLink
              key={index}
              href={sponsor.href}
              imgSrc={sponsor.imgSrc}
              alt={sponsor.alt}
              type={sponsor.type}
              tier={sponsor.tier}
            />
          ))}
      </div>
      <div className="d-flex justify-content-around align-items-center mt-2">
        {sponsors
          .filter((sponsor) => sponsor.tier.startsWith("tier-3"))
          .map((sponsor, index) => (
            <SponLink
              key={index}
              href={sponsor.href}
              imgSrc={sponsor.imgSrc}
              alt={sponsor.alt}
              type={sponsor.type}
              tier={sponsor.tier}
            />
          ))}
      </div>
    </>
  );
};

SponsorsGrid.propTypes = {
  sponsors: propTypes.arrayOf(
    propTypes.shape({
      href: propTypes.string,
      tier: propTypes.string,
      imgSrc: propTypes.string,
      type: propTypes.string,
    })
  ),
};
export default SponsorsGrid;

const Txt =styled.span`font-size: 1rem;`