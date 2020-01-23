import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  padding: 60px;
  flex-wrap: wrap;
  a {
    text-decoration: none;
  }

  a:hover {
    background: rgba(0, 0, 255, 0.2);
    border-radius: 5px;

    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
  }

  @media (max-width: 600px) {
    justify-content: center;
  }
`;
export const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  width: 300px;
  justify-content: space-between;

  img {
    border-radius: 50%;
    background: #3a1d98;
    width: 127px;
    height: 127px;
    padding: 35px;
  }

  h3 {
    padding: 15px;
    font-family: 'Rubik';
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    color: #281664;
  }
`;
