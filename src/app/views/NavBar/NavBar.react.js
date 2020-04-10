import React from 'react';

import {
  NavBarContainer,
  ItemHolder,
  Item,
  ItemContainer,
  NavBarBackground,
} from './NavBar.styled';
import { Background, Container, Filter } from '../Home/Home.styled';

const NavBar = ({ isHome, style }) => {
  console.log('Is Home? ', isHome);
  return (
    <NavBarContainer>
      <NavBarBackground main>
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
      </NavBarBackground>
      <NavBarBackground />

      {/*  ---------------------------------- HOME ---------------------------------- */}

      {isHome && (
        <Background>
          <Container>
            <Filter>Answered</Filter>
            <Filter>Not Answered</Filter>
          </Container>
        </Background>
      )}
    </NavBarContainer>
  );
};

export default NavBar;
