import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  p {
    font-family: 'Rubik';
    font-weight: 300;
    font-size: 25px;

    color: #4925bb;
  }
  section {
    font-family: 'Rubik';
    font-weight: 500;

    color: #4925bb;

    text-align: center;
    font-size: 25px;
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    p {
      font-family: 'Rubik';
      font-weight: 300;
      font-size: 18px;

      color: #4925bb;
    }
  }
`;
