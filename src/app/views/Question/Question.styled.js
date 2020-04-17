/* eslint-disable no-nested-ternary */
import styled, { keyframes } from 'styled-components';
import { zoomInDown, bounceOut } from 'react-animations';

export const Background = styled.div`
  background-color: rgba(0, 20, 39, 1);
  border-radius: 5px;
  flex: 1;
  margin: auto;
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  box-shadow: 6px 10px 28px 1px rgba(131, 144, 184, 1);
`;

export const UserData = styled.div`
  margin: 0px 20px 0px 30px;
`;

export const PictureBorder = styled.div`
  width: 180px;
  height: 180px;
  margin: auto;
  border-radius: 100px;
  background-color: #21d4fd;
  background-image: linear-gradient(130deg, #21d4fd 0%, #b721ff 100%);
  padding: 3px;
  margin-top: 20px;
`;

export const ProfilePicture = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100px;
  background-image: url('${(props) => props.url}');
  background-size: 100% 100%;
`;

export const QuestionBy = styled.p`
  font-size: 130%;
  margin: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  color: rgba(142, 0, 69, 1);
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0px 20px;
`;
export const Name = styled.span`
  margin-top: -20px;
  color: #e3ebff;
`;

export const AnimatedDiv = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  animation: 0.75s ${(props) => (props.show ? keyframes`${zoomInDown}` : keyframes`${bounceOut}`)};
`;

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  margin-right: 25px;
  background-color: #efee;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  margin: 40px;
  box-shadow: 0px 0px 40px 10px
    ${(props) => (props.creatingQuestion ? '#8CF259' : props.renderResults ? '#bf005c' : '#0ff')};
`;

export const Headline = styled.div`
  flex-grow: 1;
  text-align: start;
  text-transform: uppercase;
  color: #000;
  font-size: 20px;
  padding: 10px 10px 5px;
`;

export const OptionContainer = styled.div`
  margin: 10px 20px;
`;

export const Option = styled.div`
  text-align: start;
  font-size: 15px;
`;

export const SubmitButton = styled.button`
  flex-grow: 1;
  align-self: center;
  width: 160px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin-bottom: 20px;
  height: 40px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  background-position: 100% 0;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  background-image: linear-gradient(to right, #25aae1, #4481eb, #04befe, #3f86ed);
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
`;

export const ResultBarContainer = styled.div`
  flex-grow: 1;
  display: flex;
  margin-right: 20px;
  background-color: #bf005c;
  border-radius: 5px;
  flex-direction: column;
  padding: 20px 40px;
  margin: 20px 40px 30px;
  z-index: 0;
`;
