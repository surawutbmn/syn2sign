import styled from "styled-components";

function LoadingPage() {
  return (
    <LoadingWrapper>
      <Syntosign src="/images/s2s-logo/syn2sign_logo_cl.svg" alt="" />
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