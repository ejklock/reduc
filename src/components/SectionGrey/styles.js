import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  align-content: center;

  p {
    font-family: 'Rubik';
    font-size: 12px;
    line-height: 19px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 50px;

    p {
      font-family: 'Rubik';
      font-size: 25px;
      padding: 40px;
      line-height: 40px;
    }
  }
`;

export const SectionIcon = styled.div`
  flex-direction: column;
  text-align: center;
  padding-bottom: 20px;
  scroll-padding-left: 20px;

  h1 {
    font-family: 'Rubik';
    font-size: 17px;
    color: #28166f;
    width: 200px;
    line-height: 13px;
    font-weight: bold;
  }

  svg {
    margin-top: 10px;
    width: 59px;
    height: 42px;
    fill: #28166f;
  }

  @media screen and (min-width: 768px) {
    h1 {
      font-family: 'Rubik';
      font-size: 52px;
      color: #28166f;
      width: 442px;
      line-height: 42px;
      font-weight: bold;
    }

    svg {
      width: 239px;
      height: 171px;
      fill: #28166f;
    }
  }
`;
