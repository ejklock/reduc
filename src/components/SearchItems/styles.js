import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px;
  @media (max-width: 600px) {
    padding: 10px;
  }
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
    font-weight: 400;
  }

  @media (max-width: 600px) {
    h5 {
      font-family: 'Rubik';
      font-style: italic;
      font-size: 12px;

      color: #3a1d98;
      margin-top: 10px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  padding: 15px;
  border-radius: 5px;

  align-items: center;

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

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    height: 260px;

    h4 {
      font-family: 'Rubik';
      font-size: 12px;
      padding-left: 15px;
      text-transform: capitalize;
      color: #3a1d98;
    }
    img {
      width: 80px;
      height: 80px;
      padding: 8px;
      margin-bottom: 20px;
    }
  }
`;
