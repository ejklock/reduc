import React from 'react';
import { Input, Select } from '@rocketseat/unform';

import { Container, SearchContainer } from './styles';

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

export default function SearchBlock({ item = 0 }) {
  return (
    <Container>
      <SearchContainer>
        <small>Buscar por</small>
        <Input
          type="text"
          name={`term[${item}]`}
          placeholder="digitar termo de busca"
        />
        <Select name={`type[${item}]`} defaultChecked options={fields} />
        <Select name={`bool[${item}]`} options={boolOptions} />
      </SearchContainer>
    </Container>
  );
}
