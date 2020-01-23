import React from 'react';

import { Container, SectionIcon } from './styles';

export default function SectionGrey({ children }) {
  return (
    <Container>
      <SectionIcon>
        <h1>Tipos de Mídia</h1>
      </SectionIcon>
      {children}
    </Container>
  );
}
