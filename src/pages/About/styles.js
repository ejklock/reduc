import styled from 'styled-components';

export const SectionText = styled.div`
  padding: 50px;

  p {
    font-family: 'Rubik';
    font-weight: 300;
    font-size: 25px;
    margin-bottom: 30px;

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
    padding: 10px;
    p {
      font-family: 'Rubik';
      font-weight: 300;
      font-size: 18px;
      margin-bottom: 30px;

      color: #4925bb;
    }
  }
`;
