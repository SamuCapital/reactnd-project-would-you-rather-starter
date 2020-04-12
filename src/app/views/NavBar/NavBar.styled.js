import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 999999999999999;
  left: 0;
  top: 0;
  position: fixed;
  transform: translateZ(0);
  width: 100%;
`;

export const NavBarBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => (props.main ? '#efd3ee' : '#fff')};
  flex-direction: column;
  min-height: 20px;
`;

export const ItemHolder = styled.div`
  flex-grow: 1;
  max-width: 60%;
  display: flex;
  flex-direction: row;
  margin: auto;
`;

const Item = styled.h2`
  color: ${(props) => (props.match ? '#000' : '#595C70')};
  font-weight: ${(props) => (props.match ? 'bold' : 'normal')};
  padding: 0px 10px;
`;

const ItemContainer = styled.a`
  margin: auto;
  align-items: baseline;
`;

export const Link = ({ children, to, toggleIsHome, exact = true }) => {
  Link.propTypes = {
    children: PropTypes.element.isRequired,
    to: PropTypes.string.isRequired,
    toggleIsHome: PropTypes.func.isRequired,
    exact: PropTypes.bool.isRequired,
  };
  Link.defaultProps = {};
  return (
    <Route path={to} exact={exact}>
      {({ match }) => (
        <NavLink
          to={to}
          exact
          style={{
            textDecoration: 'none',
          }}
          isActive={(isMatch, location) => {
            isMatch && toggleIsHome(to === '/') && window.dispatchEvent(new Event('scroll'));
            return isMatch;
          }}
        >
          <ItemContainer>
            <Item match={match}>{children}</Item>
          </ItemContainer>
        </NavLink>
      )}
    </Route>
  );
};
