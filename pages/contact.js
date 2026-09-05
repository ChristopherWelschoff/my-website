import contacts from "@/lib/contact";
import Image from "next/image";
import styled from "styled-components";

export default function Contact() {
  return (
    <>
      <ContactPage>
        <ContactContainer>
          <HeaderText>Contact</HeaderText>
          {contacts.map((contact) => {
            return (
              <>
                <ListContainer key={contact.value}>
                  <ContactContent>
                    <StyledIcon
                      alt={contact.value}
                      width={36}
                      height={36}
                      src={contact.icon}
                    />
                    <ValueText>{contact.value}</ValueText>
                  </ContactContent>
                </ListContainer>
              </>
            );
          })}
        </ContactContainer>
      </ContactPage>
    </>
  );
}

const HeaderText = styled.h2`
  font-weight: 900;
  color: var(--accent-green);
  font-size: 2rem;
  margin-bottom: 30px;
`;
const ContactPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  min-height: 100vh;
`;

const ContactContainer = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  gap: 10px;
`;

const ListContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-card);
  padding: 20px;
  filter: drop-shadow(-10px 0px 10px rgba(255, 255, 255, 0.4));
  border: solid var(--accent-green) 1px;
`;

const StyledIcon = styled(Image)`
  flex-shrink: 0;
  filter: drop-shadow(-10px 0px 10px rgba(255, 255, 255, 0.4)) invert(1);
`;

const ValueText = styled.p`
  text-align: center;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr;
  align-items: center;
  gap: 10px;
  width: 100%;
`;
