import styled from "styled-components";
import Image from "next/image";
import Skillbar from "@/components/Skillbar/skillbar";
import Title from "@/components/Title/title";

export default function Home() {
  return (
    <div>
      <HeroCard>
        <StyledImage
          priority="eager"
          width={600}
          height={700}
          alt="cover"
          src="/assets/me-cover.png"
        />

        <Title />
      </HeroCard>

      {/* <div>
        <Skillbar />
      </div> */}
    </div>
  );
}

const HeroCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: 140px;
  height: 180px;

  border-radius: 16px;
  object-fit: cover;
  object-position: center 15%;

  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 600px;
    height: 700px;
  }
`;
