import React from 'react';

import {
  Background,
  Container,
  PictureBorder,
  ProfilePicture,
  Index,
  Sum,
  Score,
  Count,
  Text,
} from './leaderboard.styled';

const Leaderboard = ({ users }) => {
  const names = users ? Object.keys(users).sort((a, b) => sort(users, a, b)) : [];
  console.log('Names: ', names, 'Users ', users);
  if (users && users.loadInitialState) return null;
  return (
    <div>
      {names.map((user, index) => (
        <Background key={user} i={mult(index)}>
          <Container w={12}>
            <Index i={mult(index)}>#{index + 1}</Index>
          </Container>
          <Container w={8}>
            <Score>Score: </Score>
            <Sum>{sum(users, user)}</Sum>
          </Container>
          <Container w={2} />
          <Container w={15}>
            <Count># Asked: {questionScore(users, user)}</Count>
            <Count># Answered: {answerScore(users, user)}</Count>
          </Container>
          <Container q={10}>
            <PictureBorder>
              <ProfilePicture url={getUrl(users, user)} />
            </PictureBorder>
          </Container>
          <Container w={20}>
            <Text>{users[user].name}</Text>
          </Container>
        </Background>
      ))}
    </div>
  );
};
export default Leaderboard;

const sort = (users, userA, userB) => sum(users, userB) - sum(users, userA);

const answerScore = (users, user) => Object.keys(users[user].answers).length;

const questionScore = (users, user) => Object.keys(users[user].questions).length;

const sum = (users, user) => answerScore(users, user) + questionScore(users, user);

// eslint-disable-next-line no-nested-ternary
const mult = (i) => (i === 0 ? 3 : i === 1 ? 2 : 1); // 3 -> 2 -> rest 1

const getUrl = (users, user) => users[user].avatarURL;
