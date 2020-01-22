import styled from 'styled-components';
import BackgroundImage from '../../assets/img/background-2x.png';

export const Container = styled.header`
  display: flex;
  flex-direction: row;

  margin: -10px;
  background: url(${BackgroundImage});
  background-repeat: no-repeat;

  height: 687px;
  background-size: cover;
  background-position: center;

  nav {
    width: 100%;
  }
`;
