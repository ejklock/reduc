import styled from 'styled-components';
import BackgroundImage from '../../assets/img/background.png';

export const Container = styled.header`
  background: url(${BackgroundImage});
  background-repeat: no-repeat;

  height: 687px;
  background-size: cover;
  background-position: center;

  nav {
    width: 100%;
  }
`;
