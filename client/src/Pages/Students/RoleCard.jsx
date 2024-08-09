import { Col } from "react-bootstrap";
import propTypes from "prop-types";


function RoleCard({role,icon}) {
  return (
    <>
      <Col>
        <img src={`/icon/roles/${icon}`} alt="" />
        <span className="ms-3 txt-cap">{role}</span>
      </Col>
    </>
  );
}

RoleCard.propTypes = {
  role: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
};
export default RoleCard;
