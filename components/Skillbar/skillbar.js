import skills from "@/lib/skills";
import Image from "next/image";
import styled from "styled-components";

export default function Skillbar() {
  return (
    <div>
      <div>Tech-Stack</div>

      <ul>
        {skills.map((skill) => {
          return (
            <li key={skill.name}>
              <Image alt={skill.name} width={48} height={48} src={skill.icon} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
