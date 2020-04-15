import React from 'react';
import PropTypes from 'prop-types';

import { Background, Container, Filter, Text } from 'app/views/Home/Home.styled';
import { LoadingBar } from 'react-redux-loading';
import { NavBarContainer, ItemHolder, NavBarBackground, Link } from './NavBar.styled';

const NavBar = ({
  isHome,
  style,
  filter,
  setFilter,
  toggleIsHome,
  toggleIsFourOhFour,
  containerRef,
  greeting,
}) => {
  return (
    <NavBarContainer ref={containerRef}>
      <NavBarBackground main>
        <ItemHolder>
          <Link to="/" toggleIsHome={toggleIsHome} toggleIsFourOhFour={toggleIsFourOhFour}>
            Home
          </Link>
          <Link to="/add" toggleIsHome={toggleIsHome} toggleIsFourOhFour={toggleIsFourOhFour}>
            New Question
          </Link>
          <Link
            to="/leaderboard"
            toggleIsHome={toggleIsHome}
            toggleIsFourOhFour={toggleIsFourOhFour}
          >
            Leader Bord
          </Link>
          <Link to="/login" toggleIsHome={toggleIsHome} toggleIsFourOhFour={toggleIsFourOhFour}>
            {greeting}
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
      <LoadingBar />
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  style: PropTypes.object.isRequired,
  isHome: PropTypes.bool.isRequired,
  filter: PropTypes.bool.isRequired,
  setFilter: PropTypes.func.isRequired,
  toggleIsHome: PropTypes.func.isRequired,
  toggleIsFourOhFour: PropTypes.func.isRequired,
  containerRef: PropTypes.func.isRequired,
  greeting: PropTypes.string.isRequired,
};
export default NavBar;
