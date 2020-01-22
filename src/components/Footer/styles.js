import styled from 'styled-components';

export const Container = styled.div`
  background-color: #28166f;
  padding: 20px;
  color: #ffff;
  footer {
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    img {
      width: 180px;

      height: 90px;
    }

    p {
      font-family: 'Rubik';
      font-size: 10px;
      margin-left: 10px;
      margin-top: 10px;

      color: #ffff;
      width: 667px;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;

    padding: 40px;
    footer {
      justify-content: center;
      p {
        font-size: 22px;
        line-height: 24px;
      }

      img {
        width: 284px;

        height: 86px;
      }
    }
  }
`;
