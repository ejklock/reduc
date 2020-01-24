import React from 'react';
import MaterialTextual from '../../assets/img/material_textual.svg';

import { Container, Card } from './styles';

const generateKey = pre => {
  return `${pre}_${new Date().getTime()}`;
};
export default function SearchItems({ records = [] }) {
  return (
    <Container>
      {records
        ? records.map(item => (
            <a
              target="_blank"
              rel="no"
              href={item.urls}
              key={generateKey(item.id)}
            >
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
