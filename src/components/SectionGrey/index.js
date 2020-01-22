import React from 'react';

import { Container, SectionIcon } from './styles';

export default function SectionGrey(props) {
  const { Icon } = props;
  return (
    <Container>
      <SectionIcon>
        <h1>SOBRE O PORTAL</h1>
        <Icon />
      </SectionIcon>
      <p>
        O Portal de Revistas Científicas da Universidade Federal de Mato Grosso
        (UFMT) é um projeto do Curso de Biblioteconomia, da Editora UFMT e da
        Pró-Reitoria de Pós-graduação e Pesquisa, que visa o desenvolvimento, a
        democratização do acesso ao conhecimento produzido pelas pesquisas
        científicas e a qualificação dos periódicos da UFMT. O Portal utiliza o
        Sistema Eletrônico de Editoração de Revistas (SEER) que é um software
        desenvolvido para a construção e gestão de uma publicação periódica
        eletrônica. Esta ferramenta contempla ações essenciais à automação das
        atividades de editoração de periódicos científicos.
      </p>
    </Container>
  );
}
