import styled from 'styled-components';
import BackgroundImage from '../../assets/img/background.png';

export const Container = styled.header`
  background: url(${BackgroundImage});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 688px;
  background-size: cover;
  background-position: center;
`;
