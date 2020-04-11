import React from 'react';
import PropTypes from 'prop-types';

import { Background, Container, Filter, Text } from 'app/views/Home/Home.styled';
import { NavBarContainer, ItemHolder, NavBarBackground, Link } from './NavBar.styled';

const NavBar = ({ isHome, style, filter, setFilter, toggleIsHome }) => {
  return (
    <NavBarContainer>
      <NavBarBackground main>
        <ItemHolder>
          <Link to="/" toggleIsHome={toggleIsHome}>
            Home
          </Link>
          <Link to="/add" toggleIsHome={toggleIsHome}>
            New Question
          </Link>
          <Link to="/leaderboard" toggleIsHome={toggleIsHome}>
            Leader Bord
          </Link>
          <Link to="/login" toggleIsHome={toggleIsHome}>
            Login
          </Link>
        </ItemHolder>
      </NavBarBackground>

      {/*  ---------------------------------- HOME ---------------------------------- */}
      {isHome && <NavBarBackground />}
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
  toggleIsHome: PropTypes.func.isRequired,
};
export default NavBar;
