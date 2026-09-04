import styled from "styled-components";
import Image from "next/image";

export default function Home() {
  return (
    <MainContent>
      <ImageContainer>
        <StyledImage
          priority="eager"
          width={800}
          height={600}
          alt="cover"
          src="/assets/me-cover.png"
        />
      </ImageContainer>
      <StyledTitle>
        <p> Hi,</p>
        <p>ich bin Christopher Welschoff</p>
        <JobText>Frontend Developer</JobText>
        <AboutText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </AboutText>
        <ButtonContainer>
          <StyledButtonLeft>Button links</StyledButtonLeft>
          <StyledButtonRight>Button rechts</StyledButtonRight>
        </ButtonContainer>
      </StyledTitle>
    </MainContent>
  );
}

const MainContent = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.15rem;
  width: 95%;
  margin: 0 auto;
  border: solid white 2px;
`;
const ImageContainer = styled.div`
  align-self: flex-end;
  overflow: hidden;
  overflow: hidden;
  box-shadow: 0 0 40px 20px var(--background);
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: 50% 30%;
  /* mask-image: radial-gradient(circle, black 55%, transparent 75%);

  -webkit-mask-image: radial-gradient(circle, black 55%, transparent 75%); */

  filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.25));
`;

const StyledTitle = styled.div`
  display: flex;
  overflow-wrap: break-word;
  flex-direction: column;
  font-size: 3rem;
  font-weight: 900;
  align-items: flex-start;
  justify-content: center;
  min-width: 0;
  max-width: 45%;
`;

const JobText = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;
const AboutText = styled.p`
  min-width: 0;
  overflow-wrap: break-word;
  font-size: 1rem;
  font-weight: 400;
  margin-top: 50px;
`;

const ButtonContainer = styled.div`
  display: flex;
  padding: 20px;
  gap: 30px;
  margin-top: 30px;
`;

const StyledButtonLeft = styled.button`
  background-color: var(--bg-primary);
  color: var(--accent-green);
  text-decoration: none;
  padding: 10px 20px;
  cursor: pointer;
  border: solid var(--accent-green) 1px;

  &:hover {
    background-color: var(--accent-green);
    color: var(--text-primary);
  }
`;

const StyledButtonRight = styled.button`
  background-color: var(--accent-green);
  color: var(--text-primary);
  text-decoration: none;
  padding: 10px 20px;
  cursor: pointer;
  border: solid var(--accent-green) 1px;

  &:hover {
    background-color: var(--bg-primary);
    color: var(--accent-green);
  }
`;
