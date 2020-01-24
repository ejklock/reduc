import React from 'react';

import { Container, SectionIcon } from './styles';

export default function Section({
  children,
  title = '',
  color,
  titleAlign = 'center',
}) {
  return (
    <Container color={color}>
      <SectionIcon titleAlign={titleAlign}>
        <h1>{title}</h1>
      </SectionIcon>
      {children}
    </Container>
  );
}
