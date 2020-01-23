import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${props => (props.color ? props.color : '#fff')};
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
    flex-direction: column;
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
  flex-direction: row;
  text-align: left;
  padding-bottom: 20px;

  h1 {
    font-family: 'Rubik';
    font-size: 40px;
    text-transform: uppercase;
    color: #28166f;

    border-bottom: 4px solid #28166f;

    line-height: 40px;
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
      font-size: 40px;
      text-transform: uppercase;
      color: #311b7b;
      border-bottom: 4px solid #311b7b;
      line-height: 40px;
      font-weight: bold;
    }
  }
`;
