import styled from "styled-components";

interface HeaderOptionProps {
  isSelected: boolean;
}

export const Container = styled.header`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px 40px;

  ${({ theme }) =>
    theme.medias.md({ justifyContent: "center", flexDirection: "column" })}
`;

export const HeaderLogo = styled.img`
  max-width: 150px;
`;

export const HeaderOptionsWrapper = styled.nav`
  width: 30%;

  ${({ theme }) => theme.medias.md({ marginTop: 30, width: "100%" })}
`;

export const HeaderOptions = styled.ul`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  ${({ theme }) => theme.medias.md({ justifyContent: "center" })}
`;

export const HeaderOption = styled.li<HeaderOptionProps>`
  list-style: none;
  margin: 0 15px;

  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary_dark : theme.colors.primary};

  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary_dark};
  }
`;
