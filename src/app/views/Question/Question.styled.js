import React from 'react';
import styled from 'styled-components';

export const Background = styled.div`
  background-color: teal;
  border-radius: 5px;
  border: 1px solid #455a64;
  /* box-shadow: 2px 5px 10px #b0bec5, 60px -16px teal; */
  flex: 1;
  margin: auto;
  width: 60%;
  min-width: 500px;
  max-width: 800px;
  height: 180px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 50px;
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

export const ContainerContainer = styled.div`
  display: flex;
  flex-grow: 4;
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-right: 25px;
  padding: 5px;
  align-content: center;
  /* background-color: #efee; */
  /* background: radial-gradient(#e66465, #9198e5); */
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  /* height: 100px; */
  margin-right: 25px;
  background-color: #efee;
  border-radius: 5px;
  align-self: center;
  width: ${(props) => props.dimensions.width * 0.9}px;
  height: ${(props) => props.dimensions.height * 0.9}px;
  margin-top: ${(props) => props.dimensions.height * 0.05}px;
  margin-left: ${(props) => props.dimensions.height * 0.1}px;
  margin-right: ${(props) => props.dimensions.height * 0.05}px;
  margin-top: ${(props) => props.dimensions.height * 0.05}px;
`;

export const ContainerBG = styled.div`
  position: absolute;
  /* top: 0;
  left: 0;
  right: 0;
  bottom: 0; */
  background: #000;
  z-index: 0;
  width: ${(props) => props.dimensions.width}px;
  height: ${(props) => props.dimensions.height}px;
  background-color: #efee;
  background: radial-gradient(#ef0, #efee);

  flex-direction: column;
  filter: blur(20px);
  border-radius: 50px;
`;

export const Header = styled.h3`
  color: #fef2;
  left: 0;
  position: absolute;
`;
