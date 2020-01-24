import React from 'react';

import { useSelector } from 'react-redux';
import NavBar from '../../components/NavBar';
import SearchItems from '../../components/SearchItems';

import SearchBlock from '../../components/SearchBlock';

import { Container, Section } from './styles';

export default function Search() {
  const {
    term,
    pagination: { records = [] },
  } = useSelector(state => state.search);

  return (
    <Container>
      <NavBar />
      <Section color="#EFEEEE">
        <SearchBlock />
      </Section>
      <SearchItems records={records} />
    </Container>
  );
}
