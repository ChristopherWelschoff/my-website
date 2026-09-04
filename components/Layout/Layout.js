import styled from "styled-components";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <Page>
      <StyledHeader>
        <h2>Christopher</h2>

        <StyledLinkContainer>
          <StyledLink href="">Button</StyledLink>
          <StyledLink href="">Button</StyledLink>
          <StyledLink href="">Button</StyledLink>
          <StyledLink href="">Button</StyledLink>
        </StyledLinkContainer>
      </StyledHeader>

      <StyledMain>{children}</StyledMain>

      <StyledFooter>Placeholder</StyledFooter>
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const StyledMain = styled.main`
  flex: 1;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 50px;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1rem;
`;

const StyledLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  margin-right: 50px;

  &:hover {
    text-decoration: underline;
    color: var(--accent-green-hover);
  }
`;

const StyledFooter = styled.footer`
  width: 100%;
  border: solid white 2px;
  padding: 20px;
`;
