import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import { searchRequest } from '../../store/modules/search/actions';
import { Container, SearchContainer } from './styles';

const fieldInitialData = {
  type: 'AllFields',
  bool: 'AND',
};

const boolOptions = [
  {
    id: 'AND',
    title: 'TODOS os termos',
  },
  {
    id: 'OR',
    title: 'QUALQUER termo',
  },
  {
    id: 'NOT',
    title: 'NENHUM termo',
  },
];

const fields = [
  {
    id: 'AllFields',
    title: 'Todos os Campos',
  },
  {
    id: 'Title',
    title: 'Título',
  },
  {
    id: 'Subject',
    title: 'Assunto',
  },
  {
    id: 'abstract_por',
    title: 'Resumo Português',
  },
  {
    id: 'abstract_en',
    title: 'Resumo Inglês',
  },
  {
    id: 'publisher',
    title: 'Editor',
  },
  {
    id: 'year',
    title: 'Ano',
  },
];

const schema = Yup.object().shape({
  term: Yup.string(),
  type: Yup.array(),
  bool: Yup.string(),
});

export default function SearchBlock() {
  const dispatch = useDispatch();
  function handleSubmit(data) {
    console.log(data);
    // dispatch(searchRequest(term, type, bool));
  }
  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={fieldInitialData}
      >
        <SearchContainer>
          <label>Buscar por</label>
          <Input type="text" name="term" placeholder="digitar termo de busca" />
          <Select name="type[0]" options={fields} />
          <Select name="bool" options={boolOptions} />
        </SearchContainer>
      </Form>
    </Container>
  );
}
