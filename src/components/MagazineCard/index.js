import React from 'react';

import { Container, CardImage, CardBody, CardTitle, Button } from './styles';

export default function MagazineCard() {
  return (
    <Container>
      <CardImage />
      <CardBody>
        <CardTitle>ACENO - Revista de Antropologia do Centro-Oeste</CardTitle>
        <Button>Acessar Revista</Button>
      </CardBody>
    </Container>
  );
}
