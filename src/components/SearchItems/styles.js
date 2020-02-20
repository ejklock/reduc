import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    font-family: 'Rubik';
    font-style: italic;
    font-size: 15px;
    padding-left: 15px;
    color: #3a1d98;
    margin-top: 10px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  padding: 15px;
  border-radius: 5px;

  align-items: center;
  height: 240px;

  background: #efeeee;
  img {
    border-radius: 50%;
    background: #3a1d98;
    width: 127px;
    height: 127px;
    padding: 35px;
  }

  h4 {
    font-family: 'Rubik';
    font-size: 18px;
    padding-left: 15px;
    text-transform: capitalize;
    color: #3a1d98;
  }
`;
