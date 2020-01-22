import React from 'react';
import { Container } from './styles';
import HeaderReduc from '../../components/HeaderReduc';
import NavBar from '../../components/NavBar';

export default function Main() {
  return (
    <Container>
      <HeaderReduc>
        <NavBar></NavBar>
      </HeaderReduc>
    </Container>
  );
}
