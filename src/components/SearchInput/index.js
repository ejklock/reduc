import React from 'react';

import { Form, Input } from '@rocketseat/unform';
import { FaSearch } from 'react-icons/fa';
import * as Yup from 'yup';

import { Container, SearchContainer, FilterContainer } from './style';
import history from '../../services/history';

const filters = ['Assunto', 'Autores', 'Título', 'Data do documento', 'Idioma'];
const schema = Yup.object().shape({
  term: Yup.string().required('Digite um termo para busca'),
});

export default function SearchInput() {
  function handleGetSubmit({ term }) {
    history.push({
      pathname: '/search',
      search: `?lookfor=${term}`,
    });
  }
  return (
    <Container>
      <h1>Sobre o que você quer procurar?</h1>
      <Form schema={schema} onSubmit={handleGetSubmit}>
        <SearchContainer>
          <Input
            inputRef={input => input && input.focus()}
            type="text"
            name="term"
            className="search-box"
            placeholder="Buscar no repositório"
          />

          <button type="submit">
            <FaSearch size="30px" />
          </button>
        </SearchContainer>
      </Form>
      {/* <FilterContainer>
        <h2>Navegar Por:</h2>
        <ul>
          {filters.map(item => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </FilterContainer> */}
    </Container>
  );
}
