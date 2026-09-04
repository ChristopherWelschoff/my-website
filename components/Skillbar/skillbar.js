import skills from "@/lib/skills";
import Image from "next/image";
import styled from "styled-components";

export default function Skillbar() {
  return (
    <>
      <SkillTextContainer>
        <p>Tech-Stack</p>
      </SkillTextContainer>
      <SkillsContainer>
        {skills.map((skill) => {
          return (
            <>
              <StyledListItem key={skill.name}>
                <Image width={48} height={48} alt="skill" src={skill.icon} />
                <p>{skill.name}</p>
              </StyledListItem>
            </>
          );
        })}
      </SkillsContainer>
    </>
  );
}

const SkillTextContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const SkillsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;

  gap: 80px;
  list-style: none;
  border: solid white 1px;
`;

const StyledListItem = styled.li`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  background-color: var(--bg-card);
`;
