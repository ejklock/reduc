import React from 'react';

import { MediaContainer, Container } from './styles';

export default function Media({ medias = [] }) {
  return (
    <Container>
      {medias.map(media => (
        <a key={Math.random()} href={`search?&filter[]=${media.url}`}>
          <MediaContainer>
            <img src={media.icon} />
            <h3>{media.name}</h3>
          </MediaContainer>
        </a>
      ))}
    </Container>
  );
}
