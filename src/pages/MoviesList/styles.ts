import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 30px;
`;

export const List = styled.div`
  width: 100%;
  min-height: 300px;

  background-color: ${({ theme }) => theme.colors.secondary_light};
  border-radius: 10px;
`;
