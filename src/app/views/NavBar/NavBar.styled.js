import styled from 'styled-components';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 2147483647;
`;

export const NavBarBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.main ? '#efd3ee' : '#EFEEEE')};
  flex-direction: column;
  min-height: 20px;
`;

export const ItemHolder = styled.div`
  flex-grow: 1;
  max-width: 60%;
  display: flex;
  align-self: center;
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
