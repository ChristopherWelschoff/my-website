import skills from "@/lib/skills";
import Image from "next/image";
import styled from "styled-components";

export default function Skillbar() {
  return (
    <div>
      <div>Tech-Stack</div>

      <ul>
        <SkillList>
          {skills.map((skill) => {
            return (
              <ListItem key={skill.name}>
                <Image
                  alt={skill.name}
                  width={48}
                  height={48}
                  src={skill.icon}
                />
                <p>{skill.name}</p>
              </ListItem>
            );
          })}
        </SkillList>
      </ul>
    </div>
  );
}

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 40px;


  @media (min-width: 768px) {
    gap: 20px;
  }
`;

const ListItem = styled.li`
  background-color: var(--bg-card);
  border: solid var(--text-dimmed) 5px;
  filter: drop-shadow(0px 0px 20px rgba(255, 255, 255, 0.4));

  @media (min-width: 768px) {
    padding: 20px;
  }
`;
