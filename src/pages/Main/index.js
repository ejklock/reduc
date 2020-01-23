import React from 'react';
import { Container } from './styles';
import HeaderReduc from '../../components/HeaderReduc';
import NavBar from '../../components/NavBar';
import SearchInput from '../../components/SearchInput';

export default function Main() {
  return (
    <Container>
      <HeaderReduc>
        <NavBar />
        <SearchInput />
      </HeaderReduc>
    </Container>
  );
}
