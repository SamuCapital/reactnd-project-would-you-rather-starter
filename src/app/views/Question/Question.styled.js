import styled, { keyframes } from 'styled-components';
/* Coolors Exported Palette - coolors.co/9e0031-8e0045-001427-708d81-f4d58d */
import { zoomInDown, bounceOut } from 'react-animations';

// /* RGB */
const colors = {
  color1: 'rgba(158, 0, 49, 1)',
  color2: 'rgba(142, 0, 69, 1)',
  color3: 'rgba(0, 20, 39, 1)',
  color4: 'rgba(112, 141, 129, 1)',
  color5: 'rgba(244, 213, 141, 1)',
};
export const Background = styled.div`
  background-color: ${colors.color3};
  border-radius: 5px;
  flex: 1;
  margin: auto;
  width: 60%;
  max-width: 800px;
  min-height: 280px; */
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 50px;
`;

/* --------------------------------- Picture -------------------------------- */

export const UserData = styled.div`
  margin: 20px;
  margin-left: 30px;
`;

export const QuestionBy = styled.p`
  font-size: 130%;
  margin: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  color: ${colors.color2};
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0px 20px;
`;
export const Name = styled.span`
  margin-top: -20px;
  color: ${colors.color4};
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
  background-size: contain;
`;

/* -------------------------------- Question -------------------------------- */

export const ContainerData = styled.div`
  flex-grow: 4;
  margin: auto;
  display: inline-flex;
  flex-direction: column;
`;

export const ContainerContainer = styled.div`
  display: inline-flex;
  flex-grow: 4;
  position: relative;
  /* width: 100px;
  min-height: 170px; */
  border-radius: 5px;
  margin: auto;
  /* margin-right: 50px; */
  padding: 5px;
  align-content: center;
`;

export const ContainerBG = styled.div`
  position: relative;
  background: #000;
  z-index: 0;
  /* height: 100px; */
  flex-grow: 1;

  background-color: #efee;
  background: radial-gradient(${colors.color3}, #ef0);

  margin: 0;
  flex-direction: column;
  filter: blur(15px);
  border-radius: 5px;
`;

export const Header = styled.h3`
  color: #fef2;
  left: 0;
  position: absolute;
`;
const flinInXAnim = keyframes`${zoomInDown}`;
const flinOutXAnim = keyframes`${bounceOut}`;

export const Container = styled.div`
  /* position: absolute; */
  flex-grow: 1;
  display: flex;
  z-index: 1;
  margin-right: 25px;
  background-color: #efee;
  border-radius: 5px;

  display: flex;
  flex-direction: column;
  margin: 40px;
  box-shadow: 0px 0px 40px 10px #0ff;

  animation: 0.5s ${flinInXAnim};
`;

export const AnimatedDiv = styled.div`
  flex-grow: 1;
  display: flex;
  animation: 0.75s ${(props) => (props.show ? flinInXAnim : flinOutXAnim)};
`;

export const Headline = styled.div`
  flex-grow: 1;
  text-align: start;
  text-transform: uppercase;
  color: #000;
  z-index: 5;
  font-size: 20px;
  padding: 10px 10px 5px;
`;
export const OptionContainer = styled.div`
  margin: 10px 20px;
`;

export const Option = styled.div`
  flex-grow: 4;
  text-align: start;
  z-index: 5;
  font-size: 15px;
`;

export const SubmitButton = styled.button`
  background-color: ${colors.color4};
  flex-grow: 1;
  align-self: center;
  padding: 10px 15px 10px;
  margin-bottom: 10px;
`;

export const CircleContainer = styled.div`
  align-self: center;
  align-content: center;
  width: 250px;
  height: 250px;
  display: inline-block;
  margin: auto;
`;
