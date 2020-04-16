import React from 'react';

import {
  Background,
  Container,
  PictureBorder,
  Index,
  Sum,
  Score,
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

const sum = (users, user) =>
  Object.keys(users[user].answers).length + Object.keys(users[user].questions).length;

// eslint-disable-next-line no-nested-ternary
const mult = (i) => (i === 0 ? 3 : i === 1 ? 2 : 1); // 3 -> 2 -> rest 1
