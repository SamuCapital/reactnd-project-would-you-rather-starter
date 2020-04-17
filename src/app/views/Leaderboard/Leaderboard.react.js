import React from 'react';
import PropTypes from 'prop-types';

import {
  Background,
  Container,
  PictureBorder,
  ProfilePicture,
  IndexContainer,
  Index,
  Sum,
  Score,
  Count,
  Text,
} from './leaderboard.styled';

import { answerScore, getUrl, mult, questionScore, sort, sum } from './leaderboard.helper';

const Leaderboard = ({ users }) => {
  const names = users ? Object.keys(users).sort((a, b) => sort(users, a, b)) : [];
  if (users && users.loadInitialState) return null;
  return (
    <div>
      {names.map((user, index) => (
        <Background key={user}>
          <Container width={12}>
            <IndexContainer>
              <Index i={mult(index)}>
                <u>#{index + 1}</u>
              </Index>
              <br />
              <br />
            </IndexContainer>
          </Container>
          <Container width={8}>
            <Score>Score: </Score>
            <Sum>{sum(users, user)}</Sum>
          </Container>
          <Container width={2} />
          <Container width={25}>
            <Count># Asked: {questionScore(users, user)}</Count>
            <Count># Answered: {answerScore(users, user)}</Count>
          </Container>
          <Container width={10}>
            <PictureBorder>
              <ProfilePicture url={getUrl(users, user)} />
            </PictureBorder>
          </Container>
          <Container width={25}>
            <Text>{users[user].name}</Text>
          </Container>
        </Background>
      ))}
    </div>
  );
};

Leaderboard.propTypes = {
  users: PropTypes.object.isRequired,
};

export default Leaderboard;
