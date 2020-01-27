import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 15px;
  border-radius: 5px;
  small {
    width: 140px;
    font-size: 22px;
    text-align: left;
    font-family: 'Rubik';
    font-weight: 500;
    letter-spacing: 0;
    color: #3a1d98;

    opacity: 1;
  }

  input,
  select {
    font-family: 'Rubik';
    font-weight: 500;
    font-style: italic;
    height: 48px;

    background: #fff;
    border-radius: 5px;
    border: 3px solid #23135a;
    margin-left: 5px;
    padding: 10px;
    font-size: 16px;
  }
  input {
    width: 60%;
  }
  button {
    border: 0;
    border-radius: 0px 5px 5px 0px;
    width: 88px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0;
    color: #281664;
    background: #42ce9e;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 600px) {
    input,
    select {
      width: 100%;
      margin-top: 10px;
    }
    flex-direction: column;
  }
`;
