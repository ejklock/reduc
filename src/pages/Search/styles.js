import styled from 'styled-components';

export const Container = styled.div`
  h3 {
    font-family: 'Rubik';
    font-weight: 900;
    padding: 15px;
    font-size: 25px;
    font-style: italic;
    text-align: center;

    color: #311b7b;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Rubik';
  font-weight: bold;
  font-size: 40px;
  text-align: center;
  width: 8em;
  color: #311b7b;
  border-bottom: 4px solid #28166f;
`;

export const Section = styled.section`
  background-color: ${props => (props.color ? props.color : '#fff')};

  padding: 50px;
  form {
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Button = styled.button`
  background: ${props => (props.color ? props.color : '#311b7b')};

  border: 0;
  border-radius: 8px;
  display: flex;
  align-items: center;
  font-family: 'Rubik';
  font-size: 20px;
  padding: 10px;
  color: #fff;

  margin-left: 10px;

  svg {
    padding: 1px;
    margin-right: 5px;
  }
`;
