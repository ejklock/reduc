import styled from 'styled-components';

export const Container = styled.div``;

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
`;
