import React from 'react';
import PropTypes from 'prop-types';

import {
  NavBarContainer,
  ItemHolder,
  Item,
  ItemContainer,
  NavBarBackground,
} from './NavBar.styled';
import { Background, Container, Filter, Text } from '../Home/Home.styled';

const NavBar = ({ isHome, style, filter, setFilter }) => {
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
        <Background style={style}>
          <Container>
            <Filter onClick={() => setFilter(false)}>
              <Text selected={!filter}>Not Answered</Text>
            </Filter>
            <Filter onClick={() => setFilter(true)}>
              <Text selected={filter}>Answered</Text>
            </Filter>
          </Container>
        </Background>
      )}
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  style: PropTypes.object.isRequired,
  isHome: PropTypes.bool.isRequired,
  filter: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
};
export default NavBar;
