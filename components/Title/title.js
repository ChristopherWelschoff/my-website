import styled from "styled-components";

export default function Title() {
  return (
    <WelcomeTextContainer>
      <p>Hi,</p>
      <p>ich bin Christopher Welschoff</p>

      <JobText>Frontend Developer</JobText>

      <AboutText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </AboutText>

      <ButtonContainer>
        <StyledButtonLeft>StyledButton links</StyledButtonLeft>
        <StyledButtonRight>StyledButton rechts</StyledButtonRight>
      </ButtonContainer>
    </WelcomeTextContainer>
  );
}

const WelcomeTextContainer = styled.div`
  font-weight: 900;
  font-size: 1rem;

  @media (min-width: 768px) {
    font-weight: 900;
    font-size: 1.5rem;
  }
`;

const JobText = styled.p`
  font-weight: 400;
`;

const AboutText = styled.p`
  margin-top: 30px;
  font-weight: 300;
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;

const StyledButtonLeft = styled.button`
  padding: 6px 12px;
  background-color: var(--accent-green);
  color: var(--test-secondary);

  @media (min-width: 768px) {
    padding: 16px 36px;
  }
`;

const StyledButtonRight = styled.button`
  padding: 6px 12px;
  background-color: var(--bg-card);
  color: var(--test-secondary);

  @media (min-width: 768px) {
    padding: 16px 36px;
  }
`;
