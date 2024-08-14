import styled from "styled-components";
import PropTypes from "prop-types";

const TabBtnCon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TabIcon = styled.img`
  &.active {
    filter: var(--filter-color-secondary);
  }
`;

const TabButton = styled.div`
  padding: 10px 20px;
  cursor: pointer;
  max-width: 40dvw;
  font-weight: var(--txt-bold);
  flex: 1;
  border-bottom: 4px solid var(--color-grey);
  color: var(--color-grey);
  text-transform: uppercase;
  font-size: 1.3rem;
  img {
    width: 1.9rem;
  }
  &.active {
    color: var(--color-primary);
    border-bottom: 4px solid var(--color-primary);
  }
  @media (max-width: 991.98px) {
    img {
      width: 1.5rem;
    }
  }
  @media (max-width: 767.98px) {
    img {
      width: 2rem;
    }
    font-size: 1.3rem;
  }
  @media (max-width: 575.98px) {
    font-size: 0.8rem;
    img {
      width: 1.3rem;
    }
  }
`;

const Tabs = ({ activeTab, onTabClick }) => (
  <TabBtnCon>
    <TabButton
      className={`tab ${activeTab === 1 ? "active" : ""}`}
      onClick={() => onTabClick(1)}
    >
      <div className="d-flex align-items-center justify-content-center">
        <TabIcon
          src="/icon/prj-tab.svg"
          alt="tab icon"
          className={`me-3 tab-icon ${activeTab === 1 ? "active" : ""}`}
        />
        8 Projects
      </div>
    </TabButton>
    <TabButton
      className={`tab ${activeTab === 2 ? "active" : ""}`}
      onClick={() => onTabClick(2)}
    >
      <div className="d-flex align-items-center justify-content-center">
        <TabIcon
          src="/icon/creator-tab.svg"
          className={`me-3 tab-icon ${activeTab === 2 ? "active" : ""}`}
          alt="tab icon"
        />
        8*2 Creators
      </div>
    </TabButton>
  </TabBtnCon>
);

Tabs.propTypes = {
  activeTab: PropTypes.number.isRequired,
  onTabClick: PropTypes.func.isRequired,
};
export default Tabs;
