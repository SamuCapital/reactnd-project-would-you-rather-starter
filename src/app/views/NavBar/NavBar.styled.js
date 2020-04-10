import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(239, 211, 238);
  box-shadow: 0px 10px 5px 0px rgb(239, 211, 238);
`;

export const ItemHolder = styled.div`
  flex-grow: 1;
  max-width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Item = styled.h3`
  color: #000;
`;

export const ItemContainer = styled.a`
  margin: 0px 20px;
  & :hover ${Item} {
    color: #fff;
  }
`;
