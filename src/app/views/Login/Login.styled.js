import styled from 'styled-components';

export const Background = styled.div`
  background-color: rgba(0, 20, 39, 1);
  border-radius: 5px;
  flex: 1;
  flex-direction: column;
  margin: auto;
  max-width: 800px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-around;
  margin-bottom: 20px;
  box-shadow: 6px 10px 28px 1px rgba(131, 144, 184, 1);
  padding: 20px;
`;

export const Headline = styled.p`
  font-size: 400%;
  margin: 20px 40px 0px;
  color: #e3ebff;
  font-weight: bold;
`;

export const Text = styled.h1`
  color: #e3ebff;
  font-weight: bold;
  text-align: center;
`;

export const Container = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px;
`;

export const Button = styled.button`
  background-color: #6ad5cb;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 5px;
  margin-left: 80px;
`;
