import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.image});
  background-repeat: no-repeat;

  height: 248px;
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 768px) {
    height: 60vh;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  align-self: center;
  width: 278px;
  height: 46px;
  margin-left: 49px;
  margin-right: 49px;
  p {
    display: flex;
    font-family: 'Rubik';
    font-size: 18px;
    line-height: 24px;
    color: #ffff;
  }

  @media screen and (min-width: 768px) {
    margin-left: 190px;
    width: 619px;
    height: 98px;
    p {
      display: flex;
      font-family: 'Rubik';
      font-size: 40px;
      line-height: 51px;
      color: #ffff;
    }
  }
`;
