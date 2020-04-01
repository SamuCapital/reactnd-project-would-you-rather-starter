import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  border: 2px solid #000;
  flex: 1;
  margin: auto;
// width: ${(props) => (props.width * 0.6 > 800 ? 800 : props.width * 0.6)}px;
  width:60%;
  min-width: 500px;
  max-width: 800px;
  height: 180px;
  margin: auto;
  display: flex;
  align-items: center;
  //   flex-direction: column;
  justify-content: flex-start;
`;

/* --------------------------------- Picture -------------------------------- */

export const UserData = styled.div`
  flex-grow: 1;
  margin: auto;
  //   margin: 15px 25px;
`;
export const QuestionBy = styled.p`
  margin: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  color: #607d8b;
`;
export const Name = styled.span`
  color: #37474f;
`;

export const PictureBorder = styled.div`
  width: 120px;
  height: 120px;
  margin: auto;
  border-radius: 100px;
  //   margin-top: 15px;

  //   max-width: 250px;
  //   padding: 1rem;
  //   position: relative;
  background-color: #21d4fd;
  background-image: linear-gradient(130deg, #21d4fd 0%, #b721ff 100%);
  padding: 3px;
`;

export const ProfilePicture = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  background-image: url('${(props) => props.url}');
  background-size: contain;
`;

/* -------------------------------- Question -------------------------------- */

export const Container = styled.div`
  display: flex;
  flex-grow: 4;
  width: 100px;
  height: 100px;
  margin-right: 25px;
  background-color: #faff;
  flex-direction: column;
`;

export const Header = styled.h3`
  color: #abab;
  left: 0
  position: absolute;
`;
