import styled from 'styled-components';

export const Background = styled.div`
  background-color: rgba(142, 0, 69, 1);
  display: flex;
  width: 65%;
  max-width: 860px;
  align-self: center;
  border-radius: 5px;
  box-shadow: 3px 10px 35px 0px rgba(142, 0, 69, 1);
  /* margin-bottom: -20px; */
`;

export const Container = styled.div`
  display: flex;
  align-self: flex-start;
  width: 100%;
  justify-content: space-around;
`;

export const Text = styled.h4`
  flex-grow: 1;
  color: ${(props) => (props.selected ? '#eee' : '#C8C8C8')};
  font-weight: ${(props) => (props.selected ? 'bold' : 'normal')};
`;

export const Filter = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  cursor: pointer;
`;
