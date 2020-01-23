import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { FaSearch } from 'react-icons/fa';
import * as Yup from 'yup';
import { searchRequest } from '../../store/modules/search/actions';
import { Container, SearchContainer, FilterContainer } from './style';

const filters = ['Assunto', 'Autores', 'Título', 'Data do documento', 'Idioma'];
const schema = Yup.object().shape({
  term: Yup.string(),
});

export default function SearchInput() {
  const dispatch = useDispatch();
  function handleSubmit({ term }) {
    dispatch(searchRequest(term));
  }
  return (
    <Container>
      <h1>Sobre o que você quer procurar?</h1>
      <Form schema={schema} onSubmit={handleSubmit}>
        <SearchContainer>
          <Input
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
