import styled from 'styled-components';

const Nav = styled.nav`
  background: transparent;
  padding: 50px;
  position: absolute;
  display: flex;

  flex-wrap: wrap;

  ul {
    list-style: none;

    display: flex;
    align-items: center;
    flex-grow: 1;
    justify-content: flex-end;

    flex-wrap: wrap;
    a {
      font-family: 'Rubik';
      font-size: 19px;
      text-transform: capitalize;
      color: #fff;
      display: block;
      padding: 10px;

      text-decoration: none;
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
    li > ul {
      display: none;
      flex-direction: column;
    }
    li:hover > ul {
      display: flex;

      position: absolute;
    }
    li a:hover {
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
      transition: all linear 0.1s;
      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.8);
    }
  }

  .brand-container {
    display: flex;
    justify-content: space-between;
    .brand img {
      width: 74px;
    }
    .brand {
      text-decoration: none;
      display: flex;
      align-items: center;
      h1 {
        font-family: 'Rubik';
        color: #fff;
        padding-left: 15px;

        font-size: 30px;
      }
      small {
        font-family: 'Rubik Light';
        font-style: italic;
        padding-left: 15px;
        font-size: 25px;
        color: #fff;
      }
    }
    button {
      background: none;
      display: none;
      border: none;
      svg {
        color: #ffff;
        margin: 5px;

        cursor: pointer;

        font-size: 36px;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 0;

    margin-top: 20px;
    ul li:hover > ul {
      display: flex;
      position: relative;
    }

    > ul {
      display: ${props => (props.open ? 'flex' : 'none')};
    }
    ul li {
      width: 100%;
    }
    .brand-container {
      padding: 20px;
      button {
        display: inline-block;
      }

      .brand {
        text-decoration: none;
        justify-content: center;
        display: flex;

        h1 {
          font-size: 14px;
          padding-left: 10px;
          letter-spacing: 0;
        }
        small {
          font-size: 12px;
          padding-left: 5px;
        }
      }
      .brand img {
        width: 20%;
        height: auto;
      }
    }
  }
`;

export { Nav };
