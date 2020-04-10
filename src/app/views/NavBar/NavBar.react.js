import React from 'react';

import { NavBarContainer, ItemHolder, Item } from './NavBar.styled';

const NavBar = () => {
  return (
    <NavBarContainer>
      <ItemHolder>
        <Item>Home</Item>
        <Item>New Question</Item>
        <Item>Leader Bord</Item>
        <Item>Login</Item>
      </ItemHolder>
    </NavBarContainer>
  );
};

export default NavBar;
