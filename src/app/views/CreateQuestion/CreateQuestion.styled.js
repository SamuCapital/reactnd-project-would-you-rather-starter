import styled from 'styled-components';

export const Input = styled.input`
  flex-grow: 1;
  background: transparent;
  border: 0;
  border-width: 1px;
  font-size: 15px;
  height: 25px;
  padding: 10px;
  outline: none !important;
  margin: 5px;
  top: -12px;
  border: 2px solid rgba(0, 0, 0, 0.9);
  padding: 0.25em 0.5em 0.3125em;
  color: rgba(0, 0, 0, 0.9);
`;

export const InputContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 20px;
  margin-top: 5px;
`;
