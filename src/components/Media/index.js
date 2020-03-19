import React from 'react';

import { MediaContainer, Container, MediaIconContainer } from './styles';

export default function Media({ medias = [] }) {
  return (
    <Container>
      {medias.map(media => (
        <a key={Math.random()} href={`search?&filter[]=${media.url}`}>
          <MediaContainer>
            {media.svg ? (
              <MediaIconContainer>
                <media.icon />
              </MediaIconContainer>
            ) : (
              <img
                src={media.icon}
                alt={`Ícone de tipo de Mídia ${media.name}`}
              />
            )}

            <h3>{media.name}</h3>
          </MediaContainer>
        </a>
      ))}
    </Container>
  );
}
