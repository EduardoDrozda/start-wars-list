import styled from "styled-components";

export const LoadingWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled.span`
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.poppins}, sans-serif;
`;
