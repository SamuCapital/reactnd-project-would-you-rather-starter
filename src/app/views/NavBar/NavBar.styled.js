import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(239, 211, 238);
`;

export const ItemHolder = styled.div`
  flex-grow: 1;
  max-width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Item = styled.h3`
  margin: 20px;
`;
