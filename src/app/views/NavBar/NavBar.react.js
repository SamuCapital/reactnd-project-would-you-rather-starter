import React from 'react';

import { NavBarContainer, ItemHolder, Item, ItemContainer } from './NavBar.styled';

const NavBar = () => {
  return (
    <NavBarContainer>
      <ItemHolder>
        <ItemContainer>
          <Item>Home</Item>
        </ItemContainer>
        <ItemContainer>
          <Item>New Question</Item>
        </ItemContainer>
        <ItemContainer>
          <Item>Leader Bord</Item>
        </ItemContainer>
        <ItemContainer>
          <Item>Login</Item>
        </ItemContainer>
      </ItemHolder>
    </NavBarContainer>
  );
};

export default NavBar;
