import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  max-height: 100%;
  overflow-y: auto;
  overflow-x: none;

  padding: 30px;
`;

export const List = styled.div`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.colors.secondary_light};
  border-radius: 10px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;

  padding: 20px;
`;
