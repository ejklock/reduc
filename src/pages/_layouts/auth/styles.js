import styled from 'styled-components';

export const Wraper = styled.div`
  min-height: 100%;
  background: #28166f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  max-width: 300px;
  text-align: center;
  img {
    width: 300px;
    height: auto;
    margin: 0 0 10px;
  }
  h1 {
    color: #ffff;
    font-family: 'Roboto';
  }
  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.4);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #ffff;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
    span {
      color: red;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }
    button {
      height: 44px;
      margin-top: 20px;
      margin: 5px 0 0;
      background: #28a745;
      color: #ffff;
      font-size: 20px;
      font-weight: bold;
      border: 0;
      border-radius: 4px;
      transition: background 0.3s;
      &:hover {
        background: #555;
      }
    }
  }
`;
