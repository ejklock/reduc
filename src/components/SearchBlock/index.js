import React from 'react';
import { Input, Select } from '@rocketseat/unform';

import PropTypes from 'prop-types';
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
    id: 'Author',
    title: 'Autor',
  },
];

export default function SearchBlock({ item = 0 }) {
  return (
    <Container>
      <SearchContainer>
        <small>Buscar por</small>
        <Input
          type="text"
          name={`lookfor[${item}]`}
          placeholder="digitar termo de busca"
        />
        <Select name={`type[${item}]`} defaultChecked options={fields} />
        {item === 0 ? (
          <Select multiple name="bool" options={boolOptions} />
        ) : (
          ''
        )}
      </SearchContainer>
    </Container>
  );
}

PropTypes.propTypes = {
  item: PropTypes.number,
};

PropTypes.defaultProps = {
  item: 0,
};
