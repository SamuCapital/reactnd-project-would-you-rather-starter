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
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 50px;
  box-shadow: 6px 10px 28px 1px rgba(131, 144, 184, 1);
`;

/* --------------------------------- Picture -------------------------------- */

export const UserData = styled.div`
  margin: 0px 20px 0px 30px;
  /* margin-left: 30px; */
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

export const AnimatedDiv = styled.div`
  flex-grow: 1;
  display: flex;
  width: 100%;
  /* align-self: flex-start; */
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
  box-shadow: 0px 0px 40px 10px #0ff;
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
  margin-right: 25px;
  background-color: #bf005c;
  background-color: #e2e2e2;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 40px;
  margin: 40px;
  box-shadow: 0px 0px 40px 25px rgba(191, 0, 92, 1);
`;
