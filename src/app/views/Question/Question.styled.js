import styled from 'styled-components';
/* Coolors Exported Palette - coolors.co/9e0031-8e0045-001427-708d81-f4d58d */

// /* HSL */
// $color1: hsla(341%, 100%, 31%, 1);
// $color2: hsla(331%, 100%, 28%, 1);
// $color3: hsla(209%, 100%, 8%, 1);
// $color4: hsla(155%, 11%, 50%, 1);
// $color5: hsla(42%, 82%, 75%, 1);

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
  /* border: 1px solid #455a64; */
  /* border: 1px solid rgb(244, 213, 141); */
  /* box-shadow: 2px 5px 10px #b0bec5, 60px -16px teal; */
  flex: 1;
  margin: auto;
  width: 60%;
  min-width: 500px;
  max-width: 800px;
  height: 280px;
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
`;
export const QuestionBy = styled.p`
  font-size: 130%;
  margin: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  color: ${colors.color2};
`;
export const Name = styled.span`
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
`;

export const ProfilePicture = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 100px;
  background-image: url('${(props) => props.url}');
  background-size: contain;
`;

/* -------------------------------- Question -------------------------------- */

export const ContainerContainer = styled.div`
  display: flex;
  flex-grow: 4;
  width: 100px;
  height: 170px;
  border-radius: 5px;
  margin-right: 50px;
  padding: 5px;
  align-content: center;
`;

export const ContainerBG = styled.div`
  position: absolute;
  background: #000;
  z-index: 0;
  width: ${(props) => props.dimensions.width}px;
  height: ${(props) => props.dimensions.height}px;
  background-color: #efee;
  /* background: radial-gradient(#ef0, #efee); */
  /* background: radial-gradient(${colors.color3}, ${colors.color3}); */
  background: radial-gradient(${colors.color3}, #ef0);

  flex-direction: column;
  filter: blur(15px);
  border-radius: 5px;
`;

export const Header = styled.h3`
  color: #fef2;
  left: 0;
  position: absolute;
`;

export const Container = styled.div`
  position: absolute;
  display: flex;
  z-index: 1;
  margin-right: 25px;
  background-color: #efee;
  border-radius: 5px;
  /* align-self: center; */
  width: ${(props) => props.dimensions.width - 15}px;
  height: ${(props) => props.dimensions.height - 15}px;
  margin: ${(props) => props.dimensions.height * 0.05}px;
  display: flex;
  flex-direction: column;
  margin: 10px 10px 5px;
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

export const Option = styled.div`
  flex-grow: 4;
  text-align: start;
  color: #000;
  z-index: 5;
  font-size: 15px;
  padding: 10px 15px 10px;
`;

export const SubmitButton = styled.button`
  background-color: ${colors.color4};
  flex-grow: 1;
  align-self: center;
  padding: 10px 15px 10px;
  margin-bottom: 10px;
`;
SubmitButton.defaultProps = { 'data-id': 'SubmitButton' };
