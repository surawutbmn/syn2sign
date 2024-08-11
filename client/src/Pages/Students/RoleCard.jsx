import { Col } from "react-bootstrap";
import propTypes from "prop-types";


function RoleCard(props) {
  const { roleArr = [] } = props;
  return (
    <>
      {roleArr.map((roleItem, index) => {
          return (
            <Col key={index} className="d-flex align-items-center">
                <img src={`/icon/roles/${roleItem.icon}`} alt="" />
                <span className="ms-3 txt-upper">{roleItem.name}</span>
            </Col>
          );
        })}
    </>
  );
}

RoleCard.propTypes = {
  roleArr: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      icon: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default RoleCard;
