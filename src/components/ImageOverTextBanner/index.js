import React from 'react';

import { Container, TextContainer } from './styles';

export default function ImageOverTextBanner(props) {
  const { image = '' } = props;
  return (
    <Container image={image}>
      <TextContainer>
        <p>Conheça o acervo de periódicos científicos produzidos pela UFMT.</p>
      </TextContainer>
    </Container>
  );
}
