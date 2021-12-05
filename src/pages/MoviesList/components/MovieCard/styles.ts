import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.primary_dark};

  margin: 0 10px;

  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary_dark};
    opacity: 0.4;
  }
`;

export const MovieCoverWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 200px;
`;

export const MovieCover = styled.img`
  width: 110px;
  height: auto;
`;

export const MovieNameWrapper = styled.div`
  display: flex;
  justify-items: center;
  align-items: center;

  width: 100%;
  height: 100%;
  max-height: 100px;

  background-color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
  border-radius: 5px;

  padding: 0 10px;
`;

export const MovieName = styled.span`
  margin-top: 10px;

  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.poppins};
  font-size: 1.2rem;

  width: 100%;
`;
