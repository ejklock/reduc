import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FaSearch } from 'react-icons/fa';
import * as Yup from 'yup';
import { searchPageRequest } from '../../store/modules/search/actions';
import { Container, SearchContainer, FilterContainer } from './style';

const filters = ['Assunto', 'Autores', 'Título', 'Data do documento', 'Idioma'];
const schema = Yup.object().shape({
  term: Yup.array(),
});

export default function SearchInput() {
  const dispatch = useDispatch();

  function handleSubmit({ term }) {
    dispatch(searchPageRequest(term));
  }

  function handleGetSubmit() {}
  return (
    <Container>
      <h1>Sobre o que você quer procurar?</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <SearchContainer>
          <Input
            type="text"
            name="term[0]"
            className="search-box"
            placeholder="Buscar no repositório"
          />

          <button type="submit">
            <FaSearch size="30px" />
          </button>
        </SearchContainer>
      </Form>
      <FilterContainer>
        <h2>Navegar Por:</h2>
        <ul>
          {filters.map(item => (
            <li key={item}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </FilterContainer>
    </Container>
  );
}
