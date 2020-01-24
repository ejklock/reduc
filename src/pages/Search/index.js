import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import SearchItems from '../../components/SearchItems';
import Section from '../../components/Section';
import { Container } from './styles';

export default function Search() {
  const {
    term,
    pagination: { records = [] },
  } = useSelector(state => state.search);

  return (
    <Container>
      <NavBar />
      <Section title="Refinar a Busca" color="#EFEEEE" />

      {term ? <h1>Você buscou por: "{term}"</h1> : ''}
      <SearchItems records={records} />
    </Container>
  );
}
