import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 40px;

  h1 {
    font-family: 'Rubik';
    font-size: 40px;
    letter-spacing: 0;
    padding-bottom: 30px;
    text-align: center;
    color: #fff;
    opacity: 1;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 908px;
  background: #fff;

  border-radius: 5px;

  input {
    font-family: 'Rubik';
    font-weight: 500;
    font-style: italic;
    height: 48px;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
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

  span {
    color: red;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button:hover {
    background: rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 600px) {
    width: fit-content;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
  margin-top: 15px;
  align-items: center;

  @media (max-width: 600px) {
    display: none;
  }

  h2 {
    font-family: 'Rubik';
    font-weight: 500;
    font-size: 22px;
    color: #fff;
  }

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    flex-wrap: wrap;
    a {
      font-family: 'Rubik';
      font-size: 18px;
      text-transform: capitalize;
      color: #fff;
      display: block;
      text-align: center;
    }

    li {
      width: 150px;
    }

    .drop-down > a:after {
      content: '\\25BC';
      padding-left: 8px;
    }
    li > ul > li {
      width: 150px;
    }

    li.drop-down {
      display: inline-block;
    }
    li > ul {
      opacity: 0;
      position: absolute;
    }
    li:hover > ul {
      opacity: 1;
      display: flex;
      flex-direction: column;

      position: absolute;

      background: rgba(0, 0, 255, 0.2);
      border-radius: 3px;
      transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.5s,
        z-index 0s linear 0.01s;
    }
    li a:hover {
      background: rgba(0, 0, 255, 0.1);
      border-radius: 3px;

      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
    }
  }
`;
