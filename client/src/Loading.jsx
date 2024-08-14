import styled from "styled-components";

function LoadingPage() {
  return (
    <LoadingWrapper>
      <Syntosign src="/images/s2s-logo/syn2sign_logo_cl.svg" alt="" />
      {/* <DotContainer>
        {[...Array(9)].map((_, index) => (
          <Dot
            key={index}
            index={index}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </DotContainer> */}
      <LoadingText>Syn2sign....</LoadingText>
    </LoadingWrapper>
  );
}
export default LoadingPage;

const LoadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(83, 76, 254, 0.3) 0%,
    rgba(18, 18, 18, 1) 25%,
    rgba(18, 18, 18, 1) 75%,
    rgba(5, 186, 100, 0.3) 100%
  );
`;
const Syntosign = styled.img`
  width: 20em;
  animation: yoyo 2s ease-in-out infinite;
  animation-delay: 1s;
  @keyframes yoyo {
    0% {
      transform: translateY(5%);
    }
    50% {
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(5%);
    }
  }
`;

const LoadingText = styled.p`
  margin-top: 16px;
  font-size: 1.2rem;
  color: var(--color-primary);
`;
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 500px;
  height: 50px;
  /* background: linear-gradient(    to right,    var(--color-primary),    var(--color-secondary)  ); */
  background-clip: padding-box;
  position: relative;
  overflow: hidden;
`;

const Dot = styled.div`
  width: 1em;
  height: 1em;
  background-color: var(--color-primary);
  border-radius: 50%;
  margin-right: 0.4em;
  position: relative;
  animation: moveToCenter 1.5s ease-in-out infinite;

  @keyframes moveToCenter {
    0% {
      transform: translateX(
          ${(props) => (props.index % 2 === 0 ? "-100%" : "100%")}
        )
        translateY(-50%);
      opacity: 0;
    }
    50% {
      transform: translateX(0) translateY(-50%);
      opacity: 1;
      transform: scale(2);
    }
    100% {
      transform: translateX(
          ${(props) => (props.index % 2 === 0 ? "100%" : "-100%")}
        )
        translateY(-50%);
      transform: scale(1);
      opacity: 0;
    }
  }
`;