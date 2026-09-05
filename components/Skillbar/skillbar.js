import skills from "@/lib/skills";
import Image from "next/image";
import styled from "styled-components";

export default function Skillbar() {
  return (
    <div>
      <ul>
        <SkillList>
          <SkillTitle>Tech-Stack</SkillTitle>
          <SkillContainer>
            {skills.map((skill) => {
              return (
                <div key={skill.name}>
                  <ListItem>
                    <Image
                      alt={skill.name}
                      width={48}
                      height={48}
                      src={skill.icon}
                    />
                  </ListItem>
                  <SkillName>{skill.name}</SkillName>
                </div>
              );
            })}
          </SkillContainer>
        </SkillList>
      </ul>
    </div>
  );
}

const SkillName = styled.p`
  text-align: center;
  margin-top: 5px;
`;

const SkillTitle = styled.p`
  text-align: center;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
const SkillList = styled.div`
  margin-top: 30px;
  list-style: none;
`;

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const ListItem = styled.li`
  padding: 10px;
  margin-top: 10px;
  background-color: var(--bg-card);
  border: solid var(--text-dimmed) 1px;
  filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.4));

  @media (min-width: 768px) {
    padding: 20px;
    margin-top: 20px;
  }
`;
