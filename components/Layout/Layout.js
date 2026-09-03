import Link from "next/link";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <StyledHeader>
        <h1>Christopher</h1>
        <StyledLinkContainer>
          <StyledLink href="">Skills</StyledLink>
          <StyledLink href="">Projects</StyledLink>
          <StyledLink href="">Contact</StyledLink>
        </StyledLinkContainer>
      </StyledHeader>

      <main>{children}</main>

      <footer>{/* Footer */}</footer>
    </>
  );
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  gap: 20px;
  font-size: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: var(--accent-green-hover);
  }
`;
