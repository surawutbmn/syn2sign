import { Col } from "react-bootstrap";
import propTypes from "prop-types";
import styled from "styled-components";


function RoleCard(props) {
  const { roleArr = [] } = props;
  return (
    <>
      {roleArr.map((roleItem, index) => {
          return (
            <Col key={index} className="d-flex align-items-center">
              <img src={`/icon/roles/${roleItem.icon}`} alt="" />
              <RoleName className="ms-3 txt-upper">{roleItem.name}</RoleName>
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

const RoleName = styled.span`
  @media (max-width: 991.98px) {
      font-size: .8em;
  }
`;