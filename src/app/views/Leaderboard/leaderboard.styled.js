import styled from 'styled-components';

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
  justify-content: space-between;
  margin-bottom: 20px;
  box-shadow: 6px 10px 28px 1px rgba(131, 144, 184, 1);
  padding: 20px;
`;

export const Container = styled.div`
  min-width: ${(props) => props.width}%;
  display: flex;
  flex-direction: column;
  justify-content: baseline;
`;

export const IndexContainer = styled.div`
  align-self: flex-start;
  flex-grow: 1;
  height: 100%;
`;

export const Index = styled.p`
  font-size: ${(props) => (props.i > 1 ? props.i * 0.75 * 180 : 180)}%;
  margin: 0px;
  color: #0ff4c6;
`;

export const PictureBorder = styled.div`
  width: 60px;
  height: 60px;
  margin: auto;
  border-radius: 100px;
  background-color: #21d4fd;
  background-image: linear-gradient(130deg, #21d4fd 0%, #b721ff 100%);
  padding: 3px;
  margin-right: 20px;
  margin-left: 10px;
`;

export const ProfilePicture = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  background-image: url('${(props) => props.url}');
  background-size: 100% 100%;
`;

export const Sum = styled.p`
  font-size: 400%;
  margin: 0px;
  color: #e3ebff;
  font-weight: bold;
`;

export const Score = styled.p`
  color: #e7f0ff;
  margin: 0px;
`;

export const Count = styled.p`
  color: #e3ebff;
  margin: 5px 0px;
  text-align: left;
`;

export const Text = styled.p`
  font-size: 140%;
  margin: 0px;
  margin-block-start: 0px;
  margin-block-end: 0px;
  align-items: flex-start;
  display: flex;
  margin: 20px 0px 20px;
  color: white;
  text-align: left;
  color: #e3ebff;
`;
