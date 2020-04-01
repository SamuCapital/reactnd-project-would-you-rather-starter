import styled from 'styled-components';

export const Background = styled.div`
  background-color: #fafafa;
  border-radius: 5px;
  border: 2px solid #000;
  flex: 1;
  margin: auto;
// width: ${(props) => (props.width * 0.6 > 800 ? 800 : props.width * 0.6)}px;
  width:60%;
  max-width: 800px;

  margin: auto;
  display: flex;
  align-items: center;
  //   flex-direction: column;
  justify-content: flex-start;
`;

/* --------------------------------- Picture -------------------------------- */

export const PictureBorder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  margin: 15px 25px;

  max-width: 250px;
  padding: 1rem;
  position: relative;
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
  flex-grow: 2;
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
//   align-self: flex-start;
`;
