import styled from "styled-components";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <StyledHeader>
        <h3>CW</h3>

        <LinkContainer>
          <StyledLink href="/projects">Projekte</StyledLink>
          <StyledLink href="">Button</StyledLink>
          <StyledLink href="">Button</StyledLink>
          <StyledLink href="">Button</StyledLink>
        </LinkContainer>
      </StyledHeader>

      <main>{children}</main>
    </div>
  );
}

const StyledHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: var(--bg-card); */
`;

const LinkContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 10px;
`;

const StyledLink = styled(Link)`
  position: relative;
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 600;

  transition: color 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: var(--accent-green-hover);

    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: var(--accent-green-hover);
  }

  &:hover::after {
    transform: scaleX(1);
  }
  @media (min-width: 768px) {
    font-size: 1.5rem;
    margin-right: 30px;
  }
`;
