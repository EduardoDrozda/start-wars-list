import styled from "styled-components";

export const Container = styled.footer`
  position: absolute;
  bottom: 0;

  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 15px;

  ${({ theme }) => theme.medias.md({ justifyContent: "center" })}
`;

export const FooterAuthorName = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 13px;

  color: ${({ theme }) => theme.colors.primary};
`;
