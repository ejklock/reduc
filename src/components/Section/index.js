import React from 'react';

import { Container, SectionIcon } from './styles';

export default function Section({ children, title = '', color }) {
  return (
    <Container color={color}>
      <SectionIcon>
        <h1>{title}</h1>
      </SectionIcon>
      {children}
    </Container>
  );
}
