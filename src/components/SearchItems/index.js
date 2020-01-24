import React from 'react';
import MaterialTextual from '../../assets/img/material_textual.svg';

import { Container, Card } from './styles';

export default function SearchItems({ records = [] }) {
  return (
    <Container>
      {records
        ? records.map(item => (
            <a target="_blank" rel="no" href={item.urls} key={item.id}>
              <Card>
                <img src={MaterialTextual} />
                <h4>{item.title}</h4>
              </Card>
            </a>
          ))
        : ''}
    </Container>
  );
}
